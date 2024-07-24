import React from 'react';

interface GoogleSlidesWidgetProps {
  presentationId: string;
}

const GoogleSlidesWidget: React.FC<GoogleSlidesWidgetProps> = ({ presentationId }) => {
  const embedUrl = `https://docs.google.com/presentation/d/${presentationId}/embed?start=false&loop=true&delayms=3000&rm=minimal`;

  return (
    <div className="google-slides-widget relative w-full h-full">
      <h2 className="absolute top-0 left-0 right-0 z-10 bg-blue-600 text-white text-2xl font-bold py-2 px-4 text-center">
        Today's Agenda
      </h2>
      <iframe
      title='Google Slides'
        src={embedUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        allowFullScreen={true}
        style={{ position: 'absolute', top: '48px', left: 0, right: 0, bottom: 0 }}
      />
    </div>
  );
};

export default GoogleSlidesWidget;