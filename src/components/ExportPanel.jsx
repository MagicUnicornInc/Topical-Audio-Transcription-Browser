import React from 'react';

    const ExportPanel = ({ onExport }) => (
      <div className="export-panel">
        <h3>🎨 Export Your Magic</h3>
        <div className="export-options">
          <button onClick={() => onExport('txt')} className="export-button">
            <span className="icon">📝</span>
            Text File
          </button>
          <button onClick={() => onExport('pdf')} className="export-button">
            <span className="icon">📄</span>
            PDF
          </button>
          <button onClick={() => onExport('json')} className="export-button">
            <span className="icon">🔮</span>
            JSON
          </button>
          <button onClick={() => onExport('srt')} className="export-button">
            <span className="icon">🎬</span>
            Subtitles
          </button>
        </div>
      </div>
    );

    export default ExportPanel;
