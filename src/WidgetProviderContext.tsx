import React, { useContext, useEffect, useState } from "react";
import { WidgetData, widgetTypes } from "./Widgets";

interface WidgetProviderValues {
  addWidget: (type: any) => void;
  removeWidget: (id: string) => void;
  onLayoutChange: (currentLayout: any, allLayouts: any) => void;
  widgets: WidgetData[];
  layouts: {};
  isEditMode: boolean;
  toggleEditMode: () => void;
}

const WidgetProviderContext = React.createContext<WidgetProviderValues | undefined>(undefined);

export const WidgetProvider = ({ children }: {
  children: React.ReactNode;
}) => {

  const [widgets, setWidgets] = useState<WidgetData[]>([]);
  const [layouts, setLayouts] = useState({});

  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    const savedWidgets = localStorage.getItem('dashboardWidgets');
    const savedLayouts = localStorage.getItem('dashboardLayouts');
    if (savedWidgets) {
      setWidgets(JSON.parse(savedWidgets));
    }
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
  }, []);


  useEffect(() => {
    if (widgets.length > 0) {
      localStorage.setItem('dashboardWidgets', JSON.stringify(widgets));
    }
  }, [widgets]);

  const onLayoutChange = (currentLayout: any, allLayouts: any) => {
    setLayouts(allLayouts);
    localStorage.setItem('dashboardLayouts', JSON.stringify(allLayouts));
  };


  const addWidget = (type: keyof typeof widgetTypes) => {
    const newWidget: WidgetData = {
      id: `widget-${Date.now()}`,
      type,
    };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };


  return (
    <WidgetProviderContext.Provider value={{
      addWidget: addWidget,
      removeWidget: removeWidget,
      onLayoutChange: onLayoutChange,
      layouts: layouts,
      widgets: widgets,
      isEditMode: isEditMode,
      toggleEditMode: toggleEditMode,
    }}>
      {children}
    </WidgetProviderContext.Provider>
  )
}


export const useWidgetContext = () => {
  const context = useContext(WidgetProviderContext);
  if (context === undefined) {
    throw new Error('useWidgetContext must be used within a WidgetProvider');
  }
  return context;
}