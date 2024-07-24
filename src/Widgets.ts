import NewsWidget from "./widgets/NewsWidget";
import StockWidget from "./widgets/StockWidget";
import WeatherWidget from "./widgets/WeatherWidget";

export interface WidgetData {
  id: string;
  type: keyof typeof widgetTypes;
}

export const widgetTypes = {
  weather: WeatherWidget,
  stock: StockWidget,
  news: NewsWidget,
};