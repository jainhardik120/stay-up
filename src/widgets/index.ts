import NewsWidget from "./NewsWidget";
import StockWidget from "./StockWidget";
import WeatherWidget from "./WeatherWidget";

export interface WidgetData {
  id: string;
  type: keyof typeof widgetTypes;
}

export const widgetTypes = {
  weather: WeatherWidget,
  stock: StockWidget,
  news: NewsWidget,
};