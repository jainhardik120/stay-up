import GoogleSlidesWidget from "./google-slides";
import NotificationList from "./notifications";
import PomodoroTimer from "./pomodore-timer";
import SpotifyWidget from "./spotify";

export interface WidgetData {
  id: string;
  type: keyof typeof widgetTypes;
}

export const widgetTypes = {
  pomodoro:PomodoroTimer,
  slides:GoogleSlidesWidget,
  spotify: SpotifyWidget,
  notifications : NotificationList
};