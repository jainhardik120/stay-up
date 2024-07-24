import React from 'react';
import { useWidgetContext } from '../lib/WidgetProviderContext';
import { widgetTypes } from '../widgets';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const AddWidgetPanel = () => {
  const { addWidget, toggleEditMode, isEditMode } = useWidgetContext();
  const [dialogOpened, setDialogOpened] = React.useState(false);
  function closeModal() {
    setDialogOpened(false)
  }

  function openModal() {
    setDialogOpened(true)
  }

  return (
    <div className="mb-4">

      <button onClick={() => toggleEditMode()} className="bg-yellow-500 text-white px-4 py-2 rounded">Toggle Edit Mode</button>
      {isEditMode && <button onClick={openModal} className="bg-red-500 text-white px-4 py-2 rounded">Add Widget</button>}
      <Transition appear show={dialogOpened} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {Object.keys(widgetTypes).map(type => (
                    <button
                      key={type}
                      onClick={() => {
                        addWidget(type)
                        closeModal()
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      {type}
                    </button>
                  ))}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default AddWidgetPanel