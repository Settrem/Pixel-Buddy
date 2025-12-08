import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { reactiveUserModel } from './model/reactiveUserModel.js'
import { reactiveInterfaceModel } from './model/ReactiveInterfaceModel.js'

createRoot(document.getElementById('root')).render(
    <App userModel={reactiveUserModel} interfaceModel={reactiveInterfaceModel} />
)
