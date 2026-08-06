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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
          <g className="arrow-path" transform="translate(-5.5, -3.5)">
            <path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z" fill="var(--accent-color)" fillOpacity="0.15" />
          </g>
        </svg>
      </div>
      {/* Main pointer arrow */}
      <div ref={cursorRef} className="cursor-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" overflow="visible" xmlns="http://www.w3.org/2000/svg">
          <g className="arrow-path" transform="translate(-5.5, -3.5)">
            <path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z" fill="var(--accent-color)" />
          </g>
        </svg>
      </div>
    </>
  );
}

export default CustomCursor;
