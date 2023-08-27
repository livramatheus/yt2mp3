import { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import Mp3Response from "../../services/Mp3Request/Mp3Response";
import { fetchPopularRequest } from "../../services/PopularRequest";
import PopularResponse from "../../services/PopularRequest/PopularResponse";
import PopularItm from "./PopularItm";
import PopularProps from "../../interfaces/Popular/PopularProps";
import startDownload from "../../Utils/StartDownload";
import manageDownloadRequest from "../../Utils/ManageDownloadRequest";

function Popular(props: PopularProps) {

  const { setLatestList } = props;

  const [popularSongs, setPopularSongs] = useState<Array<PopularResponse> | null>(null);
  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);

  useEffect(() => {
    manageDownloadRequest({
      id, setId, setResponse
    });
  }, [id]);

  useEffect(() => {
    startDownload({ response, setLatestList });
  }, [response]);

  useEffect(() => {
    if (!popularSongs) {
      fetchPopularRequest().then((response) => {
        setPopularSongs(response.data.songs);
      });
    }
  }, []);

  return (
    <div id="popular">
      <h3 className="bottom-section-title">
        <BsStars />
        Popular
      </h3>

      <div id="popular-song-list">
      {
        popularSongs
        ? (
          popularSongs.map((song) => {
            return (
              <PopularItm
                image={song.image}
                title={song.title}
                artist={song.artist}
                id={song.id}
                setId={setId}
                key={song.id}
              />
            )
          })
        )
        : Array(4).fill(true).map((e, key) => <PopularItm key={key} />)
      }
      </div>
    </div>
  );
}

export default Popular;