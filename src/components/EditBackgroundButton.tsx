import React from 'react';
import { useWidgetContext } from '../lib/WidgetProviderContext';

const EditBackgroundButton: React.FC = () => {
  const { handleImageChange, isEditMode } = useWidgetContext();

  return (
    <>
      {
        isEditMode &&
        <div className="fixed bottom-4 right-4 z-10  backdrop-blur-[60px] border border-[#ffffff33] shadow-md p-2 rounded-lg ">
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
      }
    </>
  );
};

export default EditBackgroundButton;
