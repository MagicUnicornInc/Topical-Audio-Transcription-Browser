import React, { useRef, useEffect } from 'react';

    const WaveformVisualizer = ({ audioData, isPlaying }) => {
      const canvasRef = useRef(null);

      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;

        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Create gradient for waveform
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
          gradient.addColorStop(0, '#FF61D8');
          gradient.addColorStop(0.5, '#4A90E2');
          gradient.addColorStop(1, '#FFD700');
          
          ctx.fillStyle = gradient;
          
          // Draw waveform bars
          const barWidth = 3;
          const gap = 2;
          const bars = Math.floor(canvas.width / (barWidth + gap));
          
          for (let i = 0; i < bars; i++) {
            const x = i * (barWidth + gap);
            const height = (Math.random() * 50 + 10) * (isPlaying ? 1 : 0.5);
            const y = (canvas.height - height) / 2;
            
            ctx.fillRect(x, y, barWidth, height);
          }
          
          if (isPlaying) {
            animationId = requestAnimationFrame(draw);
          }
        };

        draw();
        return () => cancelAnimationFrame(animationId);
      }, [isPlaying, audioData]);

      return (
        <canvas
          ref={canvasRef}
          className="waveform-visualizer"
          width="800"
          height="100"
        />
      );
    };

    export default WaveformVisualizer;
