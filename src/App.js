import './App.css';
import {Button, TextField} from "@mui/material";
import {useState} from "react";

function App() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("No Result")

    const getResults = () => {
        setOutput("Fetching Info...")
        if (input) {
            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}, body: input
            };
            fetch("/campaign", requestOptions)
                .then(response => response.json())
                .then(data => setOutput(data.text)).catch(() => {
                setOutput("We are facing issue in fetching the details")
            });
        } else {
            const requestOptions = {
                method: 'POST', headers: {'Content-Type': 'application/json'}
            };
            fetch("/campaign/generic", requestOptions)
                .then(response => response.json())
                .then(data => setOutput(data.text)).catch(() => {
                setOutput("We are facing issue in fetching the details")
            });
        }
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
