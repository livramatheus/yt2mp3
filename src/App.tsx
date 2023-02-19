import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import 'react-toastify/dist/ReactToastify.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import Banner from "./components/Banner";
import Downloader from "./components/Downloader";
import LatestDownloads from "./components/LatestDownloads";
import Logo from "./components/Logo";
import Popular from "./components/Popular";

function App() {
  return (
    <div id="app">
      <SkeletonTheme baseColor="#393939" highlightColor="#4B4B4B">
        <div id="app-content">
          <div id="left-content">
            <Logo />

            <Downloader />
          </div>

          <Banner />
        </div>

        <hr />

        <div id="bottom">
          <LatestDownloads />

          <Popular />
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default App