import { WidgetProvider } from "../lib/WidgetProviderContext";
import AddWidgetPanel from "./AddWidgetPanel";
import WidgetBoard from "./WidgetBoard";

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