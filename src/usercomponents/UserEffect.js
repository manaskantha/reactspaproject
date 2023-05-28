import "../styles.css";
import React, { useState, useEffect } from "react";

function Child() {
  console.log("%c    Child: render start", "color: MediumSpringGreen");

  const [count, setCount] = React.useState(() => {
    console.log("%c    Child: useState callback", "color: tomato");
    return 0;
  });

  React.useEffect(() => {
    console.log("%c    Child: useEffect no deps", "color: LightCoral");
    return () => {
      console.log(
        "%c    Child: useEffect no deps cleanup",
        "color: LightCoral"
      );
    };
  });

  React.useEffect(() => {
    console.log("%c    Child: useEffect empty deps", "color: MediumTurquoise");
    return () => {
      console.log(
        "%c    Child: useEffect empty deps cleanup",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%c    Child: useEffect with dep", "color: HotPink");
    //Clean up will only be called if there are no dependecies or the state has changed for dependecies
    return () => {
      console.log("%c    Child: useEffect with dep cleanup", "color: HotPink");
    };
  }, [count]);

  const element = (
    <>
      <label>Click to refresh </label>
      <button
        onClick={() => setCount((previousCount) => previousCount + 1)}
        className="Count"
      >
        {count}
      </button>
    </>
  );

  console.log("%c    Child: render end", "color: MediumSpringGreen");

  return element;
}

export default function MainApp() {
  console.log("%cApp: render start", "color: MediumSpringGreen");

  const [showChild, setShowChild] = React.useState(() => {
    console.log("%cApp: useState callback", "color: tomato");
    return false;
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect no deps", "color: LightCoral");
    //Clean up will be called since there are no dependecies
    return () => {
      console.log("%cApp: useEffect no deps cleanup", "color: LightCoral");
    };
  });

  React.useEffect(() => {
    console.log("%cApp: useEffect empty deps", "color: MediumTurquoise");
    //Clean up will not be called since there are dependecies but it's empty
    return () => {
      console.log(
        "%cApp: useEffect empty deps cleanup",
        "color: MediumTurquoise"
      );
    };
  }, []);

  React.useEffect(() => {
    console.log("%cApp: useEffect with dep", "color: HotPink");
    return () => {
      console.log("%cApp: useEffect with dep cleanup", "color: HotPink");
    };
  }, [showChild]);

  const element = (
    <>
      <label>
        <input
          type="checkbox"
          checked={showChild}
          onChange={(e) => setShowChild(e.target.checked)}
        />{" "}
        Want to count ?
      </label>
      <div>{showChild ? <Child /> : null}</div>
    </>
  );

  console.log("%cApp: render end", "color: MediumSpringGreen");

  return element;
}
