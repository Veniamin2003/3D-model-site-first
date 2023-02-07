import './App.css';
import React from "react";
import SplineComponent from "./components/Spline";
import s from "./components/Spline.css"

class App extends React.Component {
    render() {
        return (
            <div className={s.spanLayer}>
                <SplineComponent />
            </div>

        );
    }
}

export default App;
