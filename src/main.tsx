import React from 'react'
import ReactDOM from 'react-dom'
import { App, AppNoAllotment } from './App'

if (new URL(document.location.href).searchParams.get('no-allotment')) {
  ReactDOM.render(
    <React.StrictMode>
      <AppNoAllotment />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
  )
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root') as HTMLElement
  )
}
