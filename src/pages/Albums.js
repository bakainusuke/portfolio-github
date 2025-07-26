import React, { useEffect, useRef, useState } from "react";
import "./Albums.css";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [albumIdx, setAlbumIdx] = useState(0);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/albumData.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load album data.");
        return res.json();
      })
      .then((data) => setAlbums(data))
      .catch((err) => console.error("Error loading albums:", err));
  }, []);

  if (!albums.length) return null;

  const album = albums[albumIdx];
  const total = album.photos.length;
  const prev = album.photos[(photoIdx - 1 + total) % total];
  const curr = album.photos[photoIdx];
  const next = album.photos[(photoIdx + 1) % total];

  const imgPath = (filename) => `${process.env.PUBLIC_URL}/data/${filename}`;

  return (
    <>
      <div
        className="carousel-wrapper"
        ref={containerRef}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/data/${isMobile ? album.bgMobile : album.bgDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-overlay" />
        <div className="carousel-track">
          <div className="photo-card prev">
            <img src={imgPath(prev)} alt="Previous" />
          </div>
          <div className="photo-card current">
            <img src={imgPath(curr)} alt="Current" />
            <div className="carousel-controls">
              <button className="nav-btn left" onClick={() => setPhotoIdx((prev) => (prev - 1 + total) % total)}>
                &lsaquo;
              </button>
              <button className="nav-btn right" onClick={() => setPhotoIdx((prev) => (prev + 1) % total)}>
                &rsaquo;
              </button>
              <button className={`zoom-btn ${curr.includes('landscape') ? 'hint' : ''}`} onClick={() => setIsZoomed(true)}>
                ⤢
              </button>
            </div>
          </div>
          <div className="photo-card next">
            <img src={imgPath(next)} alt="Next" />
          </div>
        </div>
      </div>
      <div className="photo-counter">
        {photoIdx + 1} / {total}
      </div>

      <div className="album-bar">
        <button onClick={() => setAlbumIdx((albumIdx - 1 + albums.length) % albums.length)}>
          &lsaquo;
        </button>
        <span>{albums[albumIdx].name}</span>
        <button onClick={() => setAlbumIdx((albumIdx + 1) % albums.length)}>
          &rsaquo;
        </button>
      </div>

      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <div className="zoom-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsZoomed(false)}>×</button>
            <img src={imgPath(curr)} alt="Zoomed" />
          </div>
        </div>
      )}
    </>
  );
}

export default Albums;