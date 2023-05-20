// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HostPage from "./pages/HostPage"
import VotePage from "./pages/VotePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<VotePage />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="*" element={<VotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);