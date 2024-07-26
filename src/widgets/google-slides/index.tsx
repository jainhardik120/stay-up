import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../lib/Constants';

interface Slide {
  title: string;
  googleSlideId: string;
}

const GoogleSlidesWidget: React.FC = () => {
  const [slide, setSlide] = useState<Slide | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestSlide = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/slide/getLatest`);
        setSlide(response.data.slide);
        setError(null);
      } catch (err) {
        setSlide(null);
        setError('Failed to fetch the latest slide. Please try again later.');
        console.error('Error fetching slide:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestSlide();
  }, []);

  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (!slide) {
    return <div className="text-center py-4">No slides available at the moment.</div>;
  }

  const embedUrl = `https://docs.google.com/presentation/d/${slide.googleSlideId}/embed?start=false&loop=true&delayms=3000`;

  return (
    <div className="flex flex-col w-full h-full">
      <h2 className="text-2xl py-2 px-4 text-center">
        {slide.title}
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