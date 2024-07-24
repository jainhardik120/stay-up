import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useWidgetContext } from '../lib/WidgetProviderContext';
import { widgetTypes } from '../widgets';
import { WidgetStorageProvider } from '../lib/WidgetStorageContext';
import { XIcon } from 'lucide-react';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetBoard: React.FC = () => {

  const { widgets, layouts, onLayoutChange, removeWidget, isEditMode } = useWidgetContext();

  return (
    <div className="p-4">
      <ResponsiveGridLayout
        isDraggable={isEditMode}
        isResizable={isEditMode}
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        rowHeight={100}
        margin={[10, 10]}
        width={window.innerWidth - 32}
        onLayoutChange={onLayoutChange}
        compactType={null}
      >
        {widgets.map(widget => {
          const WidgetComponent = widgetTypes[widget.type];
          return (
            <div key={widget.id} className="relative">
              {isEditMode && (
                <button
                  onClick={() => removeWidget(widget.id)}
                  className="absolute top-[-16px] right-[-16px] backdrop-blur-[60px] border border-[#ffffff33] shadow-md  rounded-full w-8 h-8 flex items-center justify-center z-10"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
              <WidgetStorageProvider id={widget.id} >
                <div className={`flex h-full w-full max-h-full max-w-full hide-scrollbar transition duration-y scrollable rounded-lg backdrop-blur  border border-[#ffffff33] shadow-md`}>
                  <WidgetComponent />
                </div>
              </WidgetStorageProvider>
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
};
export default WidgetBoard