// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import Header from './components/Header';
// // import AppRouter from './Router';

// const App: React.FC = () => {
//     return (
//           <Router>
//             <Header />
//           </Router>
//     );
// };

// export default App;

import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Flourish Tortilla Chips</h1>
                <h2>They're flour-ish</h2>
            </header>
            <section className="app-content-section">
                <h3>
                    <p>
                        When we think tortillas, we often picture corn. But, what about flour? Everyone loves flour tortillas. So, why not create tortilla chips out of them?
                    </p>
                </h3>
            </section>
            <footer className="app-footer">
                <p>
                    Copyright 2023 Flourish Chips
                </p>
            </footer>
        </div>
    );
}

export default App;
