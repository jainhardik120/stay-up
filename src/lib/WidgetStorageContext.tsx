import React, { useContext } from "react";

interface WidgetStorageContextValues {
  getItem: (key: string) => any;
  setItem: (key: string, value: any) => void;
}

const WidgetStorageContext = React.createContext<WidgetStorageContextValues | undefined>(undefined);

export const WidgetStorageProvider = ({ children, id }: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <WidgetStorageContext.Provider value={{
      getItem: (key: string) => localStorage.getItem(id + key),
      setItem: (key: string, value: any) => localStorage.setItem(id + key, value),
    }}>
      {children}
    </WidgetStorageContext.Provider>
  )
}

export const useWidgetStorage = () => {
  const context = useContext(WidgetStorageContext);
  if (context === undefined) {
    throw new Error('useWidgetStorage must be used within a WidgetStorageProvider');
  }
  return context;
}