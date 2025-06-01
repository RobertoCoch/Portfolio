import { useEffect, useState } from "react";

export const ProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula una animación progresiva hacia el valor deseado
    const timeout = setTimeout(() => setProgress(value), 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#60abe9] to-[#1d79c5] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;