import './style/Core.scss';
import React, { useState, useRef, useEffect, useCallback }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection"
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"
let globalAudio = new Audio('your-audio-file.mp3');

function App() {
  const [floatingElement, setFloatingElement] = useState(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const floatingRef = useRef(null);
  const isDraggingElement = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTimestamp = useRef(0);

  const [canPlay, setCanPlay] = useState(false);
  const handleToggleChange = () => {
    setCanPlay(!canPlay);
  };

  // Create floating element
  const createFloatingElement = (e, name, id, sound) => {
    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;
    if (canPlay) {
      globalAudio = new Audio(sound);
      globalAudio.play();
    }

    positionRef.current = { x, y };
    lastPosition.current = { x: 0, y: 0 };
    lastTimestamp.current = performance.now();
    isDraggingElement.current = true;
    setFloatingElement({ id });

    requestAnimationFrame(updatePosition);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";  // Prevent scrolling
    document.body.style.touchAction = "none"; // Disable touch gestures
  };
  
  const enableScroll = () => {
    document.body.style.overflow = "";  // Restore scrolling
    document.body.style.touchAction = ""; // Restore touch gestures
  };

  const updatePosition = useCallback(() => {
    if (!floatingRef.current) return;

    floatingRef.current.style.left = `${positionRef.current.x}px`;
    floatingRef.current.style.top = `${positionRef.current.y}px`;

    if (isDraggingElement.current) {
      requestAnimationFrame(updatePosition);
    }
  }, [floatingRef, positionRef]);

  const handleMouseMove = useCallback((e) => {
    if (!isDraggingElement.current) return;

    const x = e.clientX || e.touches?.[0]?.clientX;
    const y = e.clientY || e.touches?.[0]?.clientY;
    const now = performance.now();
    const deltaTime = now - lastTimestamp.current;

    // Calculate velocity
    velocityRef.current = {
      x: (x - lastPosition.current.x) / deltaTime,
      y: (y - lastPosition.current.y) / deltaTime,
    };

    positionRef.current = { x, y };
    lastPosition.current = { x, y };
    lastTimestamp.current = now;

    requestAnimationFrame(updatePosition);
  }, [updatePosition]);
  
  const handleMouseUp = useCallback(() => {
    isDraggingElement.current = false;
    enableScroll(); // Re-enable scrolling when drag stops
    applyInertia();
  
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("touchmove", handleMouseMove);
    document.removeEventListener("touchend", handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback((e) => {
    isDraggingElement.current = true;
    disableScroll();
  
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  }, [handleMouseMove, handleMouseUp]);

  const applyInertia = () => {
    let { x, y } = positionRef.current;
    let { x: vx, y: vy } = velocityRef.current;
    const friction = 0.98; // Reduce speed slightly each frame
    const bounceDamping = 0.7; // Reduces speed on bounce (1 = full bounce, 0 = no bounce)
  
    const animate = () => {
      if (Math.abs(vx) < 0.01 && Math.abs(vy) < 0.01) return; // Stop when almost still
  
      vx *= friction;
      vy *= friction;
  
      x += vx * 16;
      y += vy * 16;
  
      // Get screen and element sizes
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const elementWidth = floatingRef.current?.offsetWidth || 50;
      const elementHeight = floatingRef.current?.offsetHeight || 50;
  
      // Check collisions with edges and bounce
      if (x <= 0) {
        x = 0;
        vx = Math.abs(vx) * bounceDamping; // Reverse and dampen velocity
      } else if (x >= screenWidth - elementWidth) {
        x = screenWidth - elementWidth;
        vx = -Math.abs(vx) * bounceDamping;
      }
  
      if (y <= 0) {
        y = 0;
        vy = Math.abs(vy) * bounceDamping;
      } else if (y >= screenHeight - elementHeight) {
        y = screenHeight - elementHeight;
        vy = -Math.abs(vy) * bounceDamping;
      }
  
      positionRef.current = { x, y };
  
      if (floatingRef.current) {
        floatingRef.current.style.left = `${x}px`;
        floatingRef.current.style.top = `${y}px`;
      }
  
      requestAnimationFrame(animate);
    };
  
    requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    const handleGlobalMouseDown = (e) => {
      if (!floatingElement) return;
      if (floatingRef.current && floatingRef.current.contains(e.target)) {
        handleMouseDown(e);
      }
    };

    const handleGlobalTouchStart = (e) => {
      if (!floatingElement) return;
      if (floatingRef.current && floatingRef.current.contains(e.target)) {
        handleMouseDown(e);
      }
    };

    document.addEventListener("mousedown", handleGlobalMouseDown);
    document.addEventListener("touchstart", handleGlobalTouchStart);

    return () => {
      document.removeEventListener("mousedown", handleGlobalMouseDown);
      document.removeEventListener("touchstart", handleGlobalTouchStart);
    };
  }, [floatingElement, handleMouseDown]);

  return (
    <Router>
      <Head />
          {floatingElement && (
            <div
              ref={floatingRef}
              className="floating-element"
              style={{
                left: `${positionRef.current.x}px`,
                top: `${positionRef.current.y}px`,
              }}
            >
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${floatingElement.id}.png`} alt={floatingElement.id} title={floatingElement.id} />
            </div>
          )}
        <Routes>
          <Route path="/" element={<Body data={fullPokemons} onLongDrag={createFloatingElement} />} />
          <Route path="/:name" element={<ViewPokemon />} />
        </Routes>
      <Foot canPlay={canPlay} handleToggleChange={handleToggleChange} />
    </Router>
  );
}

export default App;