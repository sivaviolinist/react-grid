import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

import "./App.css";

const GridLayout = WidthProvider(Responsive);

export default function MyFirstGrid() {
  const [width, setWidth] = useState(window.innerWidth);
  const [showLayoutOne, setShowLayoutOne] = useState(true);
  const [showLayoutTwo, setShowLayoutTwo] = useState(false);
  const [showLayoutThree, setShowLayoutThree] = useState(false);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const layoutOne = () => {
    let layoutLG = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 1,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 1,
        y: 2,
        w: 1,
        h: 4,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "f",
        x: 2,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "g",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "h",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "i",
        x: 2,
        y: 2,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutMD = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 1,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 0,
        y: 2,
        w: 1,
        h: 4,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "f",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "g",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "h",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "i",
        x: 1,
        y: 2,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutSM = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 0,
        y: 2,
        w: 1,
        h: 4,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "f",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "g",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "h",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "i",
        x: 0,
        y: 2,
        w: 1,
        h: 3,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    const layouts = {
      lg: layoutLG,
      sm: layoutMD,
      xs: layoutSM,
    };

    return (
      <GridLayout
        breakpoints={{ lg: 1280, sm: 767, xs: 468 }}
        cols={{ lg: 3, sm: 2, xs: 1 }}
        className="layout"
        layouts={layouts}
        rowHeight={100}
        draggableHandle=".widget-drag-handle"
      >
        <div key="a">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">1</div>
        </div>
        <div key="b">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">2</div>
        </div>
        <div key="c">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">3</div>
        </div>
        <div key="d">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">4</div>
        </div>
        <div key="e">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">5</div>
        </div>
        <div key="f">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">6</div>
        </div>
        <div key="g">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">7</div>
        </div>
        <div key="h">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">8</div>
        </div>
        <div key="i">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">9</div>
        </div>
      </GridLayout>
    );
  };

  const layoutTwo = () => {
    let layoutLG = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 2,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutMD = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutSM = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    const layouts = {
      lg: layoutLG,
      sm: layoutMD,
      xs: layoutSM,
    };

    return (
      <GridLayout
        breakpoints={{ lg: 1280, sm: 767, xs: 468 }}
        cols={{ lg: 3, sm: 2, xs: 1 }}
        className="layout"
        layouts={layouts}
        rowHeight={100}
        draggableHandle=".widget-drag-handle"
      >
        <div key="a">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">1</div>
        </div>
        <div key="b">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">2</div>
        </div>
        <div key="c">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">3</div>
        </div>
        <div key="d">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">4</div>
        </div>
        <div key="e">
          <span className="widget-drag-handle">Drag Here</span>
          <div className="content">5</div>
        </div>
      </GridLayout>
    );
  };

  const layoutThree = () => {
    let layoutOneLG = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 2,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutTwoLG = [
      {
        i: "c",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 2,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutOneMD = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutTwoMD = [
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 1,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutOneSM = [
      {
        i: "a",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "b",
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    let layoutTwoSM = [
      {
        i: "c",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "d",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
      {
        i: "e",
        x: 0,
        y: 2,
        w: 1,
        h: 2,
        isDraggable: true,
        isResizable: false,
        static: false,
      },
    ];

    const layoutsOne = {
      lg: layoutOneLG,
      sm: layoutOneMD,
      xs: layoutOneSM,
    };

    const layoutsTwo = {
      lg: layoutTwoLG,
      sm: layoutTwoMD,
      xs: layoutTwoSM,
    };

    return (
      <>
        <GridLayout
          breakpoints={{ lg: 1280, sm: 767, xs: 468 }}
          cols={{ lg: 3, sm: 2, xs: 1 }}
          className="layout"
          layouts={layoutsOne}
          rowHeight={100}
          draggableHandle=".widget-drag-handle"
        >
          <div key="a">
            <span className="widget-drag-handle">Drag Here</span>
            <div className="content">1</div>
          </div>
          <div key="b">
            <span className="widget-drag-handle">Drag Here</span>
            <div className="content">2</div>
          </div>
        </GridLayout>
        <div style={{ display: "block", marginBottom: "30px" }}></div>
        <GridLayout
          breakpoints={{ lg: 1280, sm: 767, xs: 468 }}
          cols={{ lg: 3, sm: 2, xs: 1 }}
          className="layout"
          layouts={layoutsTwo}
          rowHeight={100}
          draggableHandle=".widget-drag-handle"
        >
          <div key="c">
            <span className="widget-drag-handle">Drag Here</span>
            <div className="content">1</div>
          </div>
          <div key="d">
            <span className="widget-drag-handle">Drag Here</span>
            <div className="content">2</div>
          </div>
          <div key="e">
            <span className="widget-drag-handle">Drag Here</span>
            <div className="content">3</div>
          </div>
        </GridLayout>
      </>
    );
  };

  const setLayoutOne = () => {
    setShowLayoutOne(true);
    setShowLayoutTwo(false);
    setShowLayoutThree(false);
  };

  const setLayoutTwo = () => {
    setShowLayoutOne(false);
    setShowLayoutTwo(true);
    setShowLayoutThree(false);
  };

  const setLayoutThree = () => {
    setShowLayoutOne(false);
    setShowLayoutTwo(false);
    setShowLayoutThree(true);
  };

  return (
    <>
      <div
        style={{
          height: "50px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Width: {width}
        {!showLayoutOne && (
          <button onClick={setLayoutOne} style={{ marginLeft: "10px" }}>
            Layout One
          </button>
        )}
        {!showLayoutTwo && (
          <button onClick={setLayoutTwo} style={{ marginLeft: "10px" }}>
            Layout Two
          </button>
        )}
        {!showLayoutThree && (
          <button onClick={setLayoutThree} style={{ marginLeft: "10px" }}>
            Layout Three
          </button>
        )}
      </div>
      {showLayoutOne && layoutOne()}
      {showLayoutTwo && layoutTwo()}
      {showLayoutThree && layoutThree()}
    </>
  );
}
