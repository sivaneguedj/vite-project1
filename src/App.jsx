import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";
import GetTo100App from "./getTo100/GetToo100App";
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('app1');

  useEffect(() => {
    // Update the body class based on the active tab
    if (activeTab === 'app1') {
      document.body.classList.add('game-background');
      document.body.classList.remove('default-background');
    } else {
      document.body.classList.add('default-background');
      document.body.classList.remove('game-background');
    }
  }, [activeTab]);

  return (
    <div className="app">
      <nav className="tabs">
        <button onClick={() => setActiveTab('app1')}>GetTo100App</button>
        <button onClick={() => setActiveTab('app2')}>Editor</button>
      </nav>
      <div className="tab-content active">
        {activeTab === 'app1' && <GetTo100App />}
        {activeTab === 'app2' && <Editor />}
      </div>
    </div>
  );
}

export default App;

