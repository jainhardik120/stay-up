import GoogleSlidesWidget from "./google-slides";
import NewsWidget from "./NewsWidget";
import SpotifyWidget from "./spotify";
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
  slides:GoogleSlidesWidget,
  spotify:SpotifyWidget
};