import React, { useState } from 'react';
import { elements } from './constants/elementData';
import { ElementData } from './types/element';
import ElementCard from './components/ElementCard';
import ElementModal from './components/ElementModal';
import { categoryColors } from './constants/categoryColors';
import Footer from './components/Footer';

function App() {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  const handleElementClick = (element: ElementData) => {
    setSelectedElement(element);
  };

  const handleCloseModal = () => {
    setSelectedElement(null);
  };

  // Group elements by category for the legend
  const categories = Array.from(new Set(elements.map(e => e.category))).sort();

  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center">
      {/* Modern, Minimal, Professional Header Section */}
      <header className="w-full bg-headerBg py-6 flex flex-col items-center justify-center">
        <h1 className="text-[32px] font-semibold text-white text-center">
          Modern Visual Periodic Table
        </h1>
        <p className="text-lg font-normal text-subheaderText text-center tracking-[0.5px]">
          Click an element title to see details
        </p>
        <p className="text-sm text-authorText text-center mt-[10px]">
          Created by Ganesh Upadhyay
        </p>
      </header>

      {/* Main Content Wrapper - Applies horizontal padding to content below header */}
      <div className="flex flex-col items-center w-full px-1 md:px-2">
        {/* Periodic Table Grid */}
        <div className="grid grid-cols-periodic-table gap-0.5 md:gap-1 max-w-full overflow-x-auto p-1 md:p-2 rounded-xl bg-surface shadow-2xl mt-4">
          {elements.map((element) => (
            <ElementCard key={element.atomicNumber} element={element} onClick={handleElementClick} />
          ))}

          {/* Placeholder for Lanthanides and Actinides labels */}
          <div className="col-start-3 row-start-6 text-textSecondary text-[0.4rem] md:text-[0.5rem] flex items-center justify-center">
            <span className="opacity-70">57-71</span>
          </div>
          <div className="col-start-3 row-start-7 text-textSecondary text-[0.4rem] md:text-[0.5rem] flex items-center justify-center">
            <span className="opacity-70">89-103</span>
          </div>

          {/* Lanthanide Series Placeholder */}
          <div className="col-start-3 col-span-15 row-start-8 h-3 md:h-4 flex items-center justify-center text-textSecondary text-[0.4rem] md:text-[0.5rem]">
            <span className="opacity-70">Lanthanides (57-71)</span>
          </div>
          {/* Actinide Series Placeholder */}
          <div className="col-start-3 col-span-15 row-start-9 h-3 md:h-4 flex items-center justify-center text-textSecondary text-[0.4rem] md:text-[0.5rem]">
            <span className="opacity-70">Actinides (89-103)</span>
          </div>
        </div>

        {/* Category Legend */}
        <div className="mt-4 p-3 md:p-4 bg-surface rounded-xl shadow-xl max-w-full md:max-w-3xl">
          <h2 className="text-lg md:text-xl font-bold text-white mb-3 text-center">Element Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-1">
                <span
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${categoryColors[category] || 'bg-gray-700'}`}
                ></span>
                <span className="text-textSecondary text-xs md:text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div> {/* End of Main Content Wrapper */}

      {selectedElement && (
        <ElementModal element={selectedElement} onClose={handleCloseModal} />
      )}

      {/* New Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
