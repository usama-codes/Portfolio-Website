import { useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = -100, mouseY = -100;
    let trailX = -100, trailY = -100;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onMouseOver = (e) => {
      const t = e.target;
      if (
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.closest('[role="button"]') ||
        getComputedStyle(t).cursor === 'pointer'
      ) {
        cursor.classList.add('hovering');
        trail.classList.add('hovering');
      }
    };

    const onMouseOut = (e) => {
      const t = e.target;
      if (
        t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.closest('[role="button"]') ||
        getComputedStyle(t).cursor === 'pointer'
      ) {
        cursor.classList.remove('hovering');
        trail.classList.remove('hovering');
      }
    };

    const onMouseDown = () => cursor.classList.add('clicking');
    const onMouseUp = () => cursor.classList.remove('clicking');
    const onMouseLeave = () => {
      cursor.style.opacity = '0';
      trail.style.opacity = '0';
    };
    const onMouseEnter = () => {
      cursor.style.opacity = '1';
      trail.style.opacity = '1';
    };

    // Trail follows with smooth delay
    let frameId;
    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.transform = `translate(${trailX}px, ${trailY}px)`;
      frameId = requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    frameId = requestAnimationFrame(animateTrail);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Ghost trail — a faded, delayed copy of the arrow */}
      <div ref={trailRef} className="cursor-trail">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L1 19.5L5.5 15L10 22.5L13 21L8.5 13.5L14.5 12.5L1 1Z"
                fill="var(--accent-color)" fillOpacity="0.15" stroke="var(--accent-color)" strokeOpacity="0.2" strokeWidth="1"/>
        </svg>
      </div>
      {/* Main pointer arrow */}
      <div ref={cursorRef} className="cursor-arrow">
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L1 19.5L5.5 15L10 22.5L13 21L8.5 13.5L14.5 12.5L1 1Z"
                fill="var(--accent-color)" stroke="var(--accent-color)" strokeWidth="1.2" strokeLinejoin="round"/>
        </svg>
      </div>
    </>
  );
}

export default CustomCursor;
