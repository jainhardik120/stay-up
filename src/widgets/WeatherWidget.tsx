import { WidgetProps } from ".";

const WeatherWidget: React.FC<WidgetProps> = () => (
  <div className="bg-blue-200 p-4 w-full h-full">
    <h2 className="text-xl font-bold">Weather</h2>
    <p>Sunny, 72°F</p>
  </div>
);

export default WeatherWidget;