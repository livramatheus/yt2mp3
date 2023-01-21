import { useEffect, useState } from "react"
import axios from "axios";
import fileDownload from "js-file-download";
import "./App.css";
import Logo from "./assets/logo.png";

const requestOptions = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {},
  headers: {
    'X-RapidAPI-Key': 'fafea167f6msh4ab2ecc90e79ae2p1db2b0jsn5f6687582230',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

function App() {
  const [textInput, setTextInput] = useState('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState(null);
  const [disabled, setDisabled] = useState(false);
  
  useEffect(() => {
    if (id) {
      const fetchData = () => {
        requestOptions.params = { id };
          let interval = setInterval(async function() {
            setDisabled(true);
            const res = await axios.request(requestOptions);
            
            if (res.status === 200 && res.data.status === "ok") {
              setResponse(res.data);
              clearInterval(interval);
              setDisabled(false);
              fileDownload(res.data.link, `${res.data.title}.mp3`);
            }
          }, 1000);
      }

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      console.log(response);
    }
  }, [response]);

  return (
    <div id="app">
      <div id="logo">
        <img src={Logo} />
        <h2>YT2MP3</h2>
      </div>

      <div id="body">
        <h2>Hey There!</h2>
        <input
          type="text"
          value={textInput}
          placeholder="YouTube link here..."
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />

        <span>It might take a moment to convert your video :)</span>  
      </div>
      
      <button
        onClick={() => {
          const text = textInput.split("=")[1];
          if (text) {
            setId(text);
          }
        }}
        className="disabled"
        disabled={disabled}
      >
          Download
        </button>
    </div>
  )
}

export default App