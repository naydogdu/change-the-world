import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Container from './components/Container';
import Flags from "./components/Flags";
import * as serviceWorker from './serviceWorker';
import './tailwind.generated.css';
//import flag from "./data/flags/ad.svg";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main role="main">
        <Container add="py-4">
          <Flags flags={ [] } />
        </Container>
      </main>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
