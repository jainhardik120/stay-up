import AddWidgetPanel from "./AddWidgetPanel";
import WidgetBoard from "./WidgetBoard";
import { WidgetProvider } from "./WidgetProviderContext";

export default function App() {
  return (
    <WidgetProvider>
      <div className="flex flex-col h-screen">
        <AddWidgetPanel />
        <WidgetBoard />
      </div>
    </WidgetProvider>
  )
}