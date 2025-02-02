import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection";
import Head from "./layouts/Header";
import Foot from "./layouts/Footer";
import Body from "./layouts/Body";
import ViewPokemon from "./layouts/ViewPokemon";

function App() {
  const [floatingElements, setFloatingElements] = useState([]);
  const elementsRef = useRef([]); // Store positions outside state to avoid excessive re-renders.

  const createFloatingElement = (e, name) => {
    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;

    const newElement = {
      id: Date.now(),
      name,
      x,
      y,
      vx: 0,
      vy: 0,
      isDragging: true,
      lastX: x,
      lastY: y,
      lastTimestamp: performance.now(),
    };

    setFloatingElements(prev => [...prev, newElement]);
    elementsRef.current.push(newElement);
  };

  const handleMouseMove = useCallback((e) => {
    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;
    const now = performance.now();

    setFloatingElements(prevElements =>
      prevElements.map(el => {
        if (!el.isDragging) return el;

        const deltaTime = now - el.lastTimestamp || 1;
        return {
          ...el,
          x,
          y,
          vx: (x - el.lastX) / deltaTime,
          vy: (y - el.lastY) / deltaTime,
          lastX: x,
          lastY: y,
          lastTimestamp: now
        };
      })
    );

    elementsRef.current.forEach(el => {
      if (el.isDragging) {
        el.x = x;
        el.y = y;
        el.vx = (x - el.lastX) / (now - el.lastTimestamp || 1);
        el.vy = (y - el.lastY) / (now - el.lastTimestamp || 1);
        el.lastX = x;
        el.lastY = y;
        el.lastTimestamp = now;
      }
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    setFloatingElements(prevElements =>
      prevElements.map(el => ({ ...el, isDragging: false }))
    );

    elementsRef.current.forEach(el => {
      el.isDragging = false;
    });
  }, []);

  const handleMouseDown = useCallback((e, id) => {
    e.preventDefault();
    setFloatingElements(prevElements =>
      prevElements.map(el =>
        el.id === id ? { ...el, isDragging: true } : el
      )
    );

    elementsRef.current.forEach(el => {
      if (el.id === id) el.isDragging = true;
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const friction = 0.98;
    const bounceDamping = 0.7;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const elementSize = 50;

    const animate = () => {
      let needsUpdate = false;

      elementsRef.current.forEach(el => {
        if (el.isDragging) return;

        el.vx *= friction;
        el.vy *= friction;

        el.x += el.vx * 16;
        el.y += el.vy * 16;

        if (el.x <= 0 || el.x >= screenWidth - elementSize) el.vx *= -bounceDamping;
        if (el.y <= 0 || el.y >= screenHeight - elementSize) el.vy *= -bounceDamping;

        if (Math.abs(el.vx) > 0.01 || Math.abs(el.vy) > 0.01) {
          needsUpdate = true;
        }
      });

      if (needsUpdate) {
        setFloatingElements([...elementsRef.current]); // Only update state when necessary.
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Router>
      <Head />
      {floatingElements.map(el => (
        <div
          key={el.id}
          className="floating-element"
          style={{
            position: "fixed",
            left: `${el.x}px`,
            top: `${el.y}px`,
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
          onMouseDown={(e) => handleMouseDown(e, el.id)}
        >
          {el.name}
        </div>
      ))}
      <Routes>
        <Route path="/" element={<Body data={fullPokemons} onLongDrag={createFloatingElement} />} />
        <Route path="/:name" element={<ViewPokemon />} />
      </Routes>
      <Foot />
    </Router>
  );
}

export default App;
