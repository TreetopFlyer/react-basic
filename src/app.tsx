import React, {useState, useReducer} from "react";
import ReactDOM from "react-dom";

const App = props =>
{
    return <div>
        <h1>{props.title}</h1>
    </div>
};

let str:String = "it works!";
ReactDOM.render(<App title={str}/>, document.querySelector("#app"));