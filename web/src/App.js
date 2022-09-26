import './App.css';
import {useState} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {Link, Route, Routes, useParams, useNavigate} from "react-router-dom";
import {giraffeStore} from "./stores/GiraffeStore";
import {observer} from "mobx-react-lite";

function App() {
    let navigate = useNavigate()
    const [username, setUsername] = useState("Brian")
    return (
        <Routes>
            <Route exact path={"/"} element={
                <div className="App">
                    <ul>
                        {giraffeStore.giraffes.map((giraffeName, key) =>
                            <li key={key}>{giraffeName}</li>
                        )}
                    </ul>
                    <Button onClick={() => giraffeStore.addGiraffe("Elmer")}>Tilføj giraf</Button>

                    <Link to={"about/link"}>Go to about link</Link>
                    <Button onClick={(e) => navigate("about/button")}>Go to about button</Button>
                </div>
            }>
            </Route>
            <Route path={"/about/:text"} element={<About></About>}></Route>
            <Route path={"*"} element={<h1>Error 404</h1>}></Route>
        </Routes>
    );
}

const Greeting = ({username}) => {
    return (<h1>Hello, {username}</h1>)
}

const About = () => {
    let {text} = useParams()
    return <div><h1>About {text}</h1></div>
}

export default observer(App);
