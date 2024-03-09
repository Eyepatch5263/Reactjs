import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//that's how we create a react element
// const reactElement=React.createElement(
//   "a",
//   {href:"https://google.com",target:"_blank"},
//   "click me to visit google"
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
