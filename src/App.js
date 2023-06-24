import './App.css';
import {Button, TextField} from "@mui/material";
import {useState} from "react";

function App() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("No Result")

    const getResults = () => {
        const requestOptions = {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: input
        };
        fetch("/", requestOptions)
            .then(response => response.json())
            .then(data => setOutput(data.text));
    }

    return (<div style={{
        display: "flex", flexDirection: "column", margin: "15px", gap: "15px",
    }}>
        <TextField
            label="JSON Input"
            placeholder="Placeholder"
            multiline
            rows={20}
            variant="filled"
            value={input}
            onChange={e => {
                setInput(e.target.value)
            }}
        />
        <Button variant="outlined" onClick={getResults}>Get Results</Button>
        <div>{output}</div>
    </div>);
}

export default App;
