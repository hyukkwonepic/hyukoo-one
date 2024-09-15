'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MediaProps {
  image: {
    url: string;
    alt: string;
  };
  video?: {
    url: string;
  };
}

const MediaPreview: React.FC<MediaProps> = ({ image, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isHovered) {
      videoRef.current?.play();
    } else {
      timeoutId = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }, 300); // Match this with the transition duration
    }
    return () => clearTimeout(timeoutId);
  }, [isHovered]);

  return (
    <div
      className="relative aspect-[4/3] rounded shadow overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="w-full h-full object-cover"
        src={image.url}
        alt={image.alt}
      />
      {video && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            muted
            loop
          >
            <source src={video.url} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default MediaPreview;
