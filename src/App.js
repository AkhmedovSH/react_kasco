import React from 'react';
import Index from "./router/index"
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/js/bootstrap.bundle';


import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/index.css';
// import './assets/css/app.css';
import './assets/css/base.css'
import './assets/css/component.css'
// import './assets/css/font.css'
import './assets/css/footer.css'
import './assets/css/icon.css'
import './assets/css/index.css'
import './assets/css/main.css'
import './assets/css/sub.css'
import './assets/css/main.css.map'
import './assets/css/sub.css.map'
import './assets/css/header.css'

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
