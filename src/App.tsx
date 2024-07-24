import React from "react";
import GridLayout from "react-grid-layout";
import PomodoroTimer from "./widgets/pomodore-timer";

class MyFirstGrid extends React.Component {
  render() {
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" className="bg-green-500">a</div>
        <div key="b" className="bg-blue-500">b</div>
        <div key="c" className="bg-red-500">
          <PomodoroTimer/>
        </div>
      </GridLayout>
    );
  }
}

export default function App() {
  return (
    <div>
      <MyFirstGrid />
    </div>
  )
}