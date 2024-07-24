import React, { useEffect, useState } from 'react';

const SpotifyWidget: React.FC = () => {
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const playlists = [
    'spotify:playlist:37i9dQZF1DX3rxVfibe1L0', // Mood Booster
    'spotify:playlist:37i9dQZF1DWVCuOatqCW5M', // Latest I-POP
    'spotify:playlist:37i9dQZF1DX5q67ZpWyRrZ'  // Indie India
  ];

  useEffect(() => {
    const onSpotifyIframeApiReady = (IFrameAPI: any) => {
      const element = document.getElementById('embed-iframe');
      const options = {
        width: '100%',
        height: '100%',
        uri: playlists[currentPlaylistIndex]
      };
      IFrameAPI.createController(element, options, () => {});
    };

    (window as any).onSpotifyIframeApiReady = onSpotifyIframeApiReady;
  }, [currentPlaylistIndex]);

  const nextPlaylist = () => {
    setCurrentPlaylistIndex((currentPlaylistIndex + 1) % playlists.length);
  };

  const prevPlaylist = () => {
    setCurrentPlaylistIndex((currentPlaylistIndex - 1 + playlists.length) % playlists.length);
  };

  return (
    <div className="relative w-full h-screen bg-black bg-opacity-50">
      <div id="embed-iframe" className="w-full h-full"></div>
      <div className="absolute inset-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={prevPlaylist}
          className="ml-2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextPlaylist}
          className="mr-2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SpotifyWidget;
