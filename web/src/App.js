import './App.css';
import {useState} from "react";

function App() {
    const [username, setUsername] = useState("Brian")
    return (
        <div className="App">
            <Greeting username={username}></Greeting>
            <button onClick={ (e) => { setUsername("Johnnay") } }>
                Skift navn
            </button>
        </div>
    );
}

const Greeting = ({username}) => {
    return (<h1>Hello, {username}</h1>)
}

export default App;
