import React from 'react';
import { ElementData } from '../types/element';
import { categoryColors } from '../constants/categoryColors';

interface ElementCardProps {
  element: ElementData;
  onClick: (element: ElementData) => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onClick }) => {
  const categoryClass = categoryColors[element.category] || 'bg-gray-700'; // Get only the background color

  return (
    <div
      className={`
        relative flex flex-col items-center justify-center p-2 // Added p-2 for 8px padding
        rounded-8px shadow-element-card cursor-pointer transition-all duration-200 ease-in-out
        transform hover:scale-[1.03] hover:ring-1 hover:ring-[rgba(255,255,255,0.1)] // Updated hover effect
        ${categoryClass}
        min-w-[30px] min-h-[30px] md:min-w-[40px] md:min-h-[40px] lg:min-w-[50px] lg:min-h-[50px]
        group // Add group for group-hover effects
        outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background // Accessibility focus
      `}
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
      }}
      onClick={() => onClick(element)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(element);
        }
      }}
      role="button" // Indicate it's a clickable element
      tabIndex={0} // Make it focusable
      aria-label={`Element ${element.name}, Atomic Number ${element.atomicNumber}`}
    >
      <span className="absolute top-0.5 left-0.5 text-[10px] font-normal text-[#f1f1f1] text-shadow-subtle">
        {element.atomicNumber}
      </span>
      <h3 className="font-bold text-[18px] text-white text-shadow-subtle font-sans group-hover:scale-105 transition-transform duration-200">
        {element.symbol}
      </h3>
      <p className="text-[11px] font-normal text-white text-center opacity-90 text-shadow-stronger font-sans mt-0.5 group-hover:opacity-100 transition-opacity duration-200">
        {element.name}
      </p>
    </div>
  );
};

export default ElementCard;
