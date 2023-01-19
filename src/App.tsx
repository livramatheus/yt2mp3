import { useEffect, useState } from "react"
import axios from "axios";
import "./App.css";

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
  
  useEffect(() => {
    if (id) {
      const fetchData = () => {
        requestOptions.params = { id };
          let interval = setInterval(async function() {
            const res = await axios.request(requestOptions);
            
            if (res.status === 200 && res.data.status === "ok") {
              setResponse(res.data);
              clearInterval(interval);
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
      <h1>YouTube to MP3 Downloader</h1>

      <input
        type="text"
        value={textInput}
        placeholder="YouTube link here..."
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />

      <button onClick={() => {
        const text = textInput.split("=")[1];
        if (text) {
          setId(text);
        }
      }}>Download</button>
    </div>
  )
}

export default App