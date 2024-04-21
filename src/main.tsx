import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SetData from "./context/Auth/SetData.js"
import SetInfo from './context/Data/SetInfo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SetData>
      <SetInfo>
        <App />
      </SetInfo>
    </SetData>
  </React.StrictMode>,
)
