import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Acerca de este proyecto
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              Este es un proyecto básico de Next.js configurado con las mejores prácticas
              y tecnologías modernas para desarrollo frontend.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Tecnologías utilizadas:
            </h2>
            
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Next.js 16</strong> - Framework de React con App Router</li>
              <li><strong>React 19</strong> - Biblioteca de interfaz de usuario</li>
              <li><strong>TypeScript</strong> - Superset de JavaScript con tipado estático</li>
              <li><strong>Tailwind CSS</strong> - Framework de CSS utilitario</li>
              <li><strong>ESLint</strong> - Linter para mantener calidad de código</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Características:
            </h2>
            
            <ul className="list-disc list-inside space-y-2">
              <li>Configuración completa de TypeScript</li>
              <li>Componentes reutilizables con tipado</li>
              <li>Utilidades y tipos comunes</li>
              <li>Diseño responsivo con modo oscuro</li>
              <li>Estructura de proyecto organizada</li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}