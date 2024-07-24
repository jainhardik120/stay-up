import React from 'react';
import { useWidgetContext } from '../lib/WidgetProviderContext';

const EditBackgroundButton: React.FC = () => {
  const { handleImageChange } = useWidgetContext();

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <label
        htmlFor="backgroundImageInput"
        className="py-2 px-4 rounded-lg cursor-pointer shadow-lg"
      >
        Change Background
      </label>
      <input
        id="backgroundImageInput"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default EditBackgroundButton;
