import { useEffect, useState } from "react"
import "./App.css";
import Body from "./components/Body";
import DownloadBtn from "./components/DownloadBtn";
import Logo from "./components/Logo";
import { fetch } from "./services/ApiRequest";

interface MP3 {
  duration: number;
  link: string;
  msg: string;
  progress: number;
  status: string;
  title: string;
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
      <Logo />
    
      <Body
        textInput={textInput}
        setTextInput={setTextInput}
      />
      
      <DownloadBtn
        disabled={disabled}
        setId={setId}
        textInput={textInput}
      />
    </div>
  )
}

export default App