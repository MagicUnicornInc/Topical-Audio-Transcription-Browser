import React from 'react';

    const Logo = () => (
      <div className="logo">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <path
            d="M25 5C15 5 5 15 5 25s10 20 20 20 20-10 20-20S35 5 25 5zm0 36c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17z"
            fill="#FF61D8"
          />
          <path
            d="M25 12c-7.2 0-13 5.8-13 13s5.8 13 13 13 13-5.8 13-13S32.2 12 25 12z"
            fill="#4A90E2"
          />
        </svg>
        <span className="logo-text">Unicorn Transcription</span>
      </div>
    );

    export default Logo;
