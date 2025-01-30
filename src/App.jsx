import './style/Core.scss';
import React, { useState, useRef, useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection"
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"

function App() {
  const [floatingElement, setFloatingElement] = useState(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const floatingRef = useRef(null);
  const isDraggingElement = useRef(false); // Global dragging state

  // Create floating element with position setup
  const createFloatingElement = (e, name) => {
    console.log(window);
    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;

    positionRef.current = { x, y };
    isDraggingElement.current = true;
    setFloatingElement({ name });

    requestAnimationFrame(updatePosition);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection during drag
    isDraggingElement.current = true;
    console.log("Drag started2");

    // Track mouse/touch movement
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDraggingElement.current) return;
    // console.log("Dragging");

    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;

    positionRef.current = { x, y };

    requestAnimationFrame(updatePosition);
  };

  const handleMouseUp = () => {
    isDraggingElement.current = false;
    console.log("Drag ended2", isDraggingElement.current);

    // Remove event listeners when dragging stops
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleMouseMove);
    document.removeEventListener("touchend", handleMouseUp);
  };

  const updatePosition = () => {
    if (!floatingRef.current) return;

    floatingRef.current.style.left = `${positionRef.current.x}px`;
    floatingRef.current.style.top = `${positionRef.current.y}px`;

    if (isDraggingElement.current) {
      requestAnimationFrame(updatePosition);
    }
  };

  // Attach event listeners once, globally, at the root level
  useEffect(() => {
    const handleGlobalMouseDown = (e) => {
      if (!floatingElement) return;
      // Only trigger drag logic when clicking on the floating element
      if (floatingRef.current && floatingRef.current.contains(e.target)) {
        handleMouseDown(e);
      }
    };

    const handleGlobalTouchStart = (e) => {
      if (!floatingElement) return;
      // Only trigger drag logic when touching the floating element
      if (floatingRef.current && floatingRef.current.contains(e.target)) {
        handleMouseDown(e);
      }
    };

    // Attach the global listeners once
    document.addEventListener("mousedown", handleGlobalMouseDown);
    document.addEventListener("touchstart", handleGlobalTouchStart);

    // Cleanup event listeners when component is unmounted or floatingElement changes
    return () => {
      document.removeEventListener("mousedown", handleGlobalMouseDown);
      document.removeEventListener("touchstart", handleGlobalTouchStart);
    };
  }, [floatingElement]); // Only reattach listeners when floating element changes

  return (
    <Router>
      <Head />
          {floatingElement && (
            <div
              ref={floatingRef}
              className="floating-element"
              style={{
                position: "fixed",
                left: `${positionRef.current.x}px`,
                top: `${positionRef.current.y}px`,
                background: "rgba(255, 255, 255, 0.9)",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                color: "black",
                userSelect: "none",
                fontWeight: "bold",
                fontSize: "16px",
                zIndex: 1000,
                transform: "translate(-50%, -50%)",
              }}
            >
              {floatingElement.name}
            </div>
          )}
        <Routes>
          <Route path="/" element={<Body data={fullPokemons} onLongDrag={createFloatingElement} />} />
          <Route path="/:name" element={<ViewPokemon />} />
        </Routes>
      <Foot />
    </Router>
  );
}

export default App;