import { useEffect, useState } from "react"
import "./App.css";
import Logo from "./assets/logo.png";
import Body from "./components/Body";
import { fetch } from "./services/ApiRequest";

interface MP3 {
  link: string
}

function App() {
  const [textInput, setTextInput] = useState<string>('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | MP3>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  
  useEffect(() => {
    if (id) {
      const fetchData = () => {
          let interval = setInterval(async function() {
            setDisabled(true);
            const res = await fetch(id);
            
            if (res.status === 200 && res.data.status === "ok") {
              setResponse(res.data);
              clearInterval(interval);
              setDisabled(false);
            } else if (res.status === 200 && res.data.status === "fail") {
              alert('Invalid video link');
              clearInterval(interval);
              setDisabled(false);
              setTextInput('');
            }
          }, 1000);
      }

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      window.location.href = response.link;
    }
  }, [response]);

  return (
    <div id="app">
      <div id="logo">
        <img src={Logo} />
        <h2>YT2MP3</h2>
      </div>

      <Body
        textInput={textInput}
        setTextInput={setTextInput}
      />
      
      <button
        onClick={() => {
          const text = textInput.split("=")[1];
          if (text) {
            setId(text);
          }
        }}
        className={disabled ? "disabled" : ""}
        disabled={disabled}
      >
          Download
        </button>
    </div>
  )
}

export default App