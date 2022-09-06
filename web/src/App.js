import './App.css';

function App() {
    return (
        <div className="App">
            <Greeting username={"Johnnay"}/>
            <Greeting username={"Johnny boy"}/>
            <Greeting username={"Johnson"}/>
        </div>
    );
}

const Greeting = ({username}) => {
    return (<h1>Hello, {username}</h1>)
}

export default App;
