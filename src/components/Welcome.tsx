import React from 'react';

interface WelcomeProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ 
  title = "Prueba Técnica Frontend", 
  subtitle = "Proyecto básico con Next.js, TypeScript y React",
  className = ""
}) => {
  return (
    <div className={`text-center space-y-4 ${className}`}>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {subtitle}
      </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Comenzar
        </button>
        <a 
          href="/about"
          className="px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
        >
          Acerca del proyecto
        </a>
      </div>
    </div>
  );
};

export default Welcome;