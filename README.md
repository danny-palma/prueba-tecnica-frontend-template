# Prueba Técnica Frontend - Excalibur

Proyecto básico de Next.js con TypeScript y React para prueba técnica.

## 🚀 Tecnologías utilizadas

- **Next.js 16** - Framework de React con App Router
- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **ESLint** - Linter para mantener calidad de código

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd pruebatecnica-frontend-excalibur
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Estructura del proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── about/             # Página "Acerca de"
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes reutilizables
│   └── Welcome.tsx        # Componente de bienvenida
├── lib/                   # Utilidades y configuración
│   └── utils.ts           # Funciones de utilidad
└── types/                 # Definiciones de tipos TypeScript
    └── index.ts           # Tipos principales
```

## 🎯 Características implementadas

- ✅ Configuración completa de TypeScript
- ✅ Componentes React con tipado fuerte
- ✅ Utilidades y tipos comunes
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Soporte para modo oscuro
- ✅ Estructura de proyecto organizada
- ✅ Routing con App Router de Next.js

## 🛠️ Scripts disponibles

```bash
npm run dev      # Ejecuta el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm start        # Ejecuta la aplicación en modo producción
npm run lint     # Ejecuta ESLint para revisar el código
```

## 📝 Desarrollo

Para agregar nuevas funcionalidades:

1. Crea componentes en `src/components/`
2. Define tipos en `src/types/`
3. Agrega utilidades en `src/lib/`
4. Crea nuevas páginas en `src/app/`

## 🔧 Configuración

El proyecto incluye configuración para:

- TypeScript (`tsconfig.json`)
- Tailwind CSS (`postcss.config.mjs`, `tailwind.config.ts`)
- ESLint (`eslint.config.mjs`)
- Next.js (`next.config.ts`)

## 📱 Despliegue

Para desplegar en Vercel:

```bash
npm run build
```

El proyecto está listo para desplegarse en cualquier plataforma que soporte Next.js.
