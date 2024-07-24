import GoogleSlidesWidget from "./google-slides";
import PomodoroTimer from "./pomodore-timer";

export interface WidgetData {
  id: string;
  type: keyof typeof widgetTypes;
}

export const widgetTypes = {
  slides: GoogleSlidesWidget,
  timer: PomodoroTimer
};