
import "./App.css";
import Banner from "./components/Banner";
import Downloader from "./components/Downloader";
import LatestDownloads from "./components/LatestDownloads";
import Logo from "./components/Logo";
import Popular from "./components/Popular";

function App() {
  return (
    <div id="app">
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
    </div>
  )
}

export default App