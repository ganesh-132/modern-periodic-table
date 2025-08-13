import React from 'react';
import { ElementData } from '../types/element';
import { categoryColors, categoryBorderColors, categoryTextColors } from '../constants/categoryColors';
import BohrModel from './BohrModel';
import { X, ExternalLink, Droplet, Square, Thermometer } from 'lucide-react';

interface ElementModalProps {
  element: ElementData;
  onClose: () => void;
}

const ElementModal: React.FC<ElementModalProps> = ({ element, onClose }) => {
  const categoryBgClass = categoryColors[element.category]?.split(' ')[0] || 'bg-gray-700';
  const categoryBorderClass = categoryBorderColors[element.category] || 'border-gray-500';
  const categoryTextColor = categoryTextColors[element.category] || 'text-gray-500';

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case 'Gas':
        return <Thermometer className="w-4 h-4" />;
      case 'Liquid':
        return <Droplet className="w-4 h-4" />;
      case 'Solid':
        return <Square className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div
        className={`
          relative bg-surface rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto
          transform scale-95 opacity-0 animate-slideIn
          border-2 ${categoryBorderClass}
        `}
        style={{ animationFillMode: 'forwards', animationDelay: '0.1s' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-textSecondary hover:text-white transition-colors duration-200 p-2 rounded-full bg-surface hover:bg-border"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Section: Bohr Model & Basic Info */}
          <div className="flex flex-col items-center justify-center p-4 bg-background rounded-xl shadow-inner">
            <BohrModel
              electronConfiguration={element.electronConfiguration}
              atomicNumber={element.atomicNumber}
              colorClass={categoryBgClass}
            />
            <div className="text-center mt-6">
              <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-none">
                {element.symbol}
              </h2>
              <p className="text-2xl md:text-4xl font-semibold text-textSecondary mt-2">
                {element.name}
              </p>
              <p className={`text-lg md:text-xl font-medium ${categoryTextColor} mt-1`}>
                {element.category}
              </p>
            </div>
          </div>

          {/* Right Section: Detailed Properties */}
          <div className="flex flex-col justify-between">
            <div className="space-y-4 text-text">
              <h3 className="text-3xl font-bold text-white mb-4 border-b border-border pb-2">
                Element Details
              </h3>
              <p className="flex justify-between items-center">
                <span className="font-semibold text-textSecondary">Atomic Number:</span>
                <span className="text-lg font-mono">{element.atomicNumber}</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold text-textSecondary">Atomic Mass:</span>
                <span className="text-lg font-mono">{element.atomicMass?.toFixed(4)} u</span>
              </p>
              {element.density && (
                <p className="flex justify-between items-center">
                  <span className="font-semibold text-textSecondary">Density:</span>
                  <span className="text-lg font-mono">{element.density} g/cm³</span>
                </p>
              )}
              <p className="flex justify-between items-center">
                <span className="font-semibold text-textSecondary">Phase at STP:</span>
                <span className="text-lg font-mono flex items-center gap-2">
                  {getPhaseIcon(element.phase)} {element.phase}
                </span>
              </p>
              {element.meltingPoint && (
                <p className="flex justify-between items-center">
                  <span className="font-semibold text-textSecondary">Melting Point:</span>
                  <span className="text-lg font-mono">{element.meltingPoint} K</span>
                </p>
              )}
              {element.boilingPoint && (
                <p className="flex justify-between items-center">
                  <span className="font-semibold text-textSecondary">Boiling Point:</span>
                  <span className="text-lg font-mono">{element.boilingPoint} K</span>
                </p>
              )}
              {(element.discoveryYear || element.discoverer) && (
                <p className="flex justify-between items-center">
                  <span className="font-semibold text-textSecondary">Discovery:</span>
                  <span className="text-lg font-mono">
                    {element.discoveryYear} {element.discoverer && `(${element.discoverer})`}
                  </span>
                </p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <h4 className="text-xl font-bold text-white mb-2">Summary</h4>
              <p className="text-textSecondary leading-relaxed text-sm md:text-base">
                {element.summary}
              </p>
              {element.externalLink && (
                <a
                  href={element.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full
                    font-semibold text-sm md:text-base transition-all duration-300
                    ${categoryBgClass.replace('bg-', 'hover:bg-')} ${categoryTextColor}
                    border border-current hover:scale-105
                  `}
                >
                  <ExternalLink className="w-4 h-4" />
                  Learn More
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementModal;
