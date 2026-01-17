import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import SnowFall from 'react-snowfall'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <SnowFall color='white' snowflakeCount={500}/> */}
    <App />
  </StrictMode>,
)
