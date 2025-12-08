import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App  from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <div>
      <h1 className='heading'>Mian Heading</h1>
    </div>
    <App  />
  </StrictMode>,
)
