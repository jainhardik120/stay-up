import React from 'react';
const presentationId = "1LhNAv_6WSfmu9_U33tVaskW8YuFj6UJelWdjdVWV1kk";

const GoogleSlidesWidget: React.FC = () => {
  const embedUrl = `https://docs.google.com/presentation/d/${presentationId}/embed?start=false&loop=true&delayms=3000`;

  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="text-2xl py-2 px-4 text-center">
        Today's Agenda
      </h2>
      <iframe
        title='Google Slides'
        src={embedUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen={true}
      />
    </div>
  );
};

export default GoogleSlidesWidget;