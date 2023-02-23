import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import Banner from "./components/Banner";
import Downloader from "./components/Downloader";
import LatestDownloads from "./components/LatestDownloads";
import Logo from "./components/Logo";
import Popular from "./components/Popular";
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from "react";
import LatestDownloadSong from "./interfaces/LatestDownloads/LatestDownloadSong";

function App() {
  const [latestList, setLatestList] = useState<LatestDownloadSong[] | null>(null);

  useEffect(() => {
    const locStor = localStorage.getItem('latest');

    if (locStor) {
      setLatestList(JSON.parse(locStor).songs);
    }
  }, []);

  return (
    <div id="app">
      <SkeletonTheme baseColor="#393939" highlightColor="#4B4B4B">
        <div id="app-content">
          <div id="left-content">
            <Logo />

            <Downloader setLatestList={setLatestList} />
          </div>

          <Banner />
        </div>

        <hr />

        <div id="bottom">
          <LatestDownloads
            latestList={latestList}
            setLatestList={setLatestList}
          />

          <Popular setLatestList={setLatestList}/>
        </div>
      </SkeletonTheme>

      <ToastContainer
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}

export default App