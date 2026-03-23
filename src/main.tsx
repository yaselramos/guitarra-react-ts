import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

const rootElement = document.getElementById('app')

if (!rootElement) {
  throw new Error('No se encontro el elemento #app para montar la aplicacion')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
