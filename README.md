# 🌦️ Weather MCP

Bienvenido a **Weather MCP**, un microservicio que te permite consultar el clima actual de cualquier ciudad usando el protocolo Model Context Protocol (MCP).

---

## 🚀 Características

- Consulta el clima actual de cualquier ciudad del mundo.
- Respuesta rápida y estructurada gracias a la integración con [Open-Meteo](https://open-meteo.com/).
- Implementado en **TypeScript** usando el SDK oficial de MCP.

---

## ⚙️ Uso

1. Compila el proyecto:
   ```bash
   npm run build
   ```
2. Ejecuta el servidor MCP:
   ```bash
   node build/index.js
   ```

---

## 🛠️ Endpoint principal

### `get-weather`
- **Descripción:** Obtiene el clima para una ciudad específica.
- **Parámetro:**
  - `city` (string): Nombre de la ciudad a consultar.
- **Respuesta:**
  - Información meteorológica actual (temperatura, lluvia, viento, etc.) en formato JSON.

---

## 📁 Estructura del proyecto

```
weather/
├── src/
│   └── index.ts         # Código fuente principal
├── package.json         # Configuración y dependencias
├── package-lock.json    # Versionado exacto de dependencias
└── build/               # Archivos compilados (tras build)
```

---

## 🧩 Dependencias principales

- [`@modelcontextprotocol/sdk`](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [`zod`](https://www.npmjs.com/package/zod)
- [`typescript`](https://www.typescriptlang.org/)

---

## 📝 Notas

- El archivo `package-lock.json` **debe** incluirse en el repositorio para asegurar la consistencia de dependencias.
- El directorio `node_modules` está excluido mediante `.gitignore`.

---
