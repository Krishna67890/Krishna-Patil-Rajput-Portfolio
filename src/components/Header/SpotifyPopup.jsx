import React, { useState, useEffect } from 'react';
import './SpotifyPopup.css';

const SpotifyPopup = ({ isOpen, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="spotify-modal-overlay" onClick={onClose}>
      <div className="spotify-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="spotify-close-btn" onClick={onClose}>✕</button>

        <div className="spotify-header">
          <div className="spotify-icon-container">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="#1DB954">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.306c-.215.353-.674.464-1.027.249-2.846-1.738-6.429-2.13-10.648-1.168-.404.093-.811-.157-.904-.561-.093-.404.157-.811.561-.904 4.635-1.06 8.589-.613 11.767 1.329.354.215.464.674.251 1.055zm1.467-3.258c-.27.441-.845.58-1.286.31-3.258-2.002-8.225-2.585-12.079-1.415-.494.15-1.02-.128-1.17-.622-.15-.494.128-1.02.622-1.17 4.407-1.338 9.89-.687 13.623 1.603.441.27.58.845.31 1.294zm.133-3.376c-3.906-2.321-10.347-2.535-14.114-1.391-.6.182-1.23-.162-1.412-.762-.182-.6.162-1.23.762-1.412 4.316-1.311 11.433-1.05 15.918 1.613.539.32.716 1.017.396 1.556-.32.539-1.017.716-1.55.401v-.009z"/>
            </svg>
          </div>
          <div className="spotify-title-group">
            <h3>Krishna's Coding Playlist</h3>
            <p className="spotify-subtitle">Fueling the deep dive into code</p>
          </div>
        </div>

        <div className="spotify-embed-container">
          {shouldRender && (
            <iframe
              src="https://open.spotify.com/embed/playlist/2TCiHgYtlR4QGikdLbWvXy?utm_source=generator&theme=0"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Playlist"
            ></iframe>
          )}
        </div>

        <div className="now-playing-visualizer">
          <div className="equalizer">
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
          </div>
          <span>NOW PLAYING VIBES</span>
        </div>

        <div className="spotify-footer">
          <a
            href="https://open.spotify.com/playlist/2TCiHgYtlR4QGikdLbWvXy"
            target="_blank"
            rel="noopener noreferrer"
            className="open-spotify-btn"
          >
            OPEN IN SPOTIFY
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPopup;