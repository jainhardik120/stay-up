import React from 'react';
import { useWidgetContext } from '../lib/WidgetProviderContext';
import { widgetTypes } from '../widgets';
import { PencilIcon, PlusIcon, XIcon } from 'lucide-react';
import DialogBox from './DialogBox';
import Button from './Button';
import AuthPage from './AuthPage';


const AddWidgetPanel = () => {
  const { addWidget, toggleEditMode, isEditMode } = useWidgetContext();
  const [dialogOpened, setDialogOpened] = React.useState(false);
  return (
    <div className="fixed top-4 right-4 z-10 flex flex-row items-center gap-2">
      {isEditMode &&
        <Button onClick={
          () => setDialogOpened(true)
        }>
          <PlusIcon className='w-5 h-5' /> Add Widget
        </Button>
      }
      <Button onClick={() => toggleEditMode()}>
        {isEditMode ? <>
          <XIcon className='w-5 h-5' /> Close
        </>
          : <>
            <PencilIcon className='w-5 h-5' /> Edit
          </>}
      </Button>
      {!isEditMode && <AuthPage />}
      <DialogBox dialogOpened={dialogOpened} closeModal={
        () => setDialogOpened(false)
      }>
        <div className='grid h-full gap-2'>
          {Object.keys(widgetTypes).map(type => (
            <Button
              key={type}
              onClick={() => {
                addWidget(type)
                setDialogOpened(false)
              }}
            >
              {type}
            </Button>
          ))}
        </div>
      </DialogBox>
    </div>
  )
}

export default AddWidgetPanel