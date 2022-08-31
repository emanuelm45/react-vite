import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ToDoList from './components/ToDoList/ToDoList'
import Header from './components/Header/Header'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  /* </React.StrictMode> */
)
