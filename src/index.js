import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Container from './components/Container'
import Flags from "./components/Flags"
import * as serviceWorker from './serviceWorker'
import './style/tailwind.generated.css'
import flagList from "./data/flags"

export default function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <main role="main">
        <Container add="p-4">
          <Flags flags={ flagList } />
        </Container>
      </main>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
