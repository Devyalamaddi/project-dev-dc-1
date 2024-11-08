"use client";

import { useRef } from "react";

interface LoginButtonProps {
  text: string;
}

const LoginButton = ({ text }: LoginButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    const circle = circleRef.current;

    if (button && circle) {
      const { left, top } = button.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Set the position of the circle to follow mouse movement
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
      circle.style.opacity = "0.5"; // Make the circle visible on hover

      // Reset opacity after a delay to create fade-out effect
      requestAnimationFrame(() => {
        setTimeout(() => {
          circle.style.opacity = "0"; // Fade out effect
        }, 300);
      });
    }
  };

  return (
    <button
      type="submit"
      className="relative w-56 py-4 px-4 text-white bg-black rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transform transition-all duration-200 ease-in-out hover:scale-[1.02] font-medium overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={buttonRef}
    >
      {/* Circle element for hover effect */}
      <div
        ref={circleRef}
        className="absolute w-12 h-12 bg-white rounded-full transform transition-all duration-200 pointer-events-none"
        style={{ opacity: 0, transition: "opacity 0.2s ease-in-out" }}
      ></div>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default LoginButton;
