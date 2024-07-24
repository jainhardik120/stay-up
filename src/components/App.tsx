import { useWidgetContext } from "../lib/WidgetProviderContext";
import AddWidgetPanel from "./AddWidgetPanel";
import GoogleSearcher from "./GoogleSearcher";
import WidgetBoard from "./WidgetBoard";
import DateTimeDisplay from "./DateTimeDisplay";
import EditBackgroundButton from "./EditBackgroundButton";

export default function App() {
  const { backgroundImage } = useWidgetContext();
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col max-h-screen hide-scrollbar scrollable">
        <EditBackgroundButton />
        <DateTimeDisplay />
        <GoogleSearcher />
        <AddWidgetPanel />
        <WidgetBoard />
      </div>
    </div>
  )
}