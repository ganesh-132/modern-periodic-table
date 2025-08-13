import React from 'react';

interface BohrModelProps {
  electronConfiguration: number[];
  atomicNumber: number;
  colorClass: string;
}

const BohrModel: React.FC<BohrModelProps> = ({ electronConfiguration, atomicNumber, colorClass }) => {
  const maxElectrons = Math.max(...electronConfiguration);
  const maxShells = electronConfiguration.length;

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[200px] min-w-[200px] md:min-h-[300px] md:min-w-[300px] overflow-hidden">
      {/* Nucleus */}
      <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg ${colorClass}`}>
        {atomicNumber}
        <span className="absolute text-xs md:text-sm -bottom-4">Nucleus</span>
      </div>

      {/* Electron Shells */}
      {electronConfiguration.map((electronsInShell, shellIndex) => {
        const shellRadius = (shellIndex + 1) * 30 + 20; // Adjust for visual spacing
        const orbitDuration = 10 + shellIndex * 2; // Slower for outer shells

        return (
          <div
            key={shellIndex}
            className="absolute rounded-full border-2 border-dashed border-gray-500/50 flex items-center justify-center"
            style={{
              width: `${shellRadius * 2}px`,
              height: `${shellRadius * 2}px`,
              animation: `orbit ${orbitDuration}s linear infinite`,
            }}
          >
            {/* Electrons */}
            {Array.from({ length: electronsInShell }).map((_, electronIndex) => {
              const angle = (360 / electronsInShell) * electronIndex;
              const electronSize = 8; // Size of electron dot
              const electronOffset = shellRadius - electronSize / 2;

              return (
                <div
                  key={electronIndex}
                  className={`absolute w-2 h-2 md:w-3 md:h-3 rounded-full ${colorClass} shadow-md`}
                  style={{
                    transform: `rotate(${angle}deg) translateX(${electronOffset}px) rotate(-${angle}deg)`,
                    transformOrigin: 'center center',
                    animation: `orbit ${orbitDuration}s linear infinite reverse`, // Counter-rotate electrons
                    animationDelay: `${(orbitDuration / electronsInShell) * electronIndex}s`,
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BohrModel;
