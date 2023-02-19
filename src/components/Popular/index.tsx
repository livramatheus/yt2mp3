import { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { fetchMp3Request } from "../../services/Mp3Request";
import Mp3Response from "../../services/Mp3Request/Mp3Response";
import { fetchPopularRequest } from "../../services/PopularRequest";
import PopularResponse from "../../services/PopularRequest/PopularResponse";
import PopularItm from "./PopularItm";
import { ToastContainer, toast } from 'react-toastify';

function Popular() {

  const [popularSongs, setPopularSongs] = useState<Array<PopularResponse> | null>(null);
  const [id, setId] = useState('');
  const [response, setResponse] = useState<null | Mp3Response>(null);

  const notify = (message: string) => toast.error(message);

  useEffect(() => {
    if (id) {
      const fetchData = () => {
        let interval = setInterval(async function() {
          try {
            const res = await fetchMp3Request(id);
            
            if (res.status === 200 && res.data.status === "ok") {
              setResponse(res.data);
              clearInterval(interval);
            } else if (res.status === 200 && res.data.status === "fail") {
              notify('Invalid video link');
              clearInterval(interval);
            }
          } catch (error: any) {
            notify(error.message + ". Try again later");
            clearInterval(interval);
          }
        }, 2000);
      }

      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (response) {
      window.location.href = response.link;
    }
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
                image={song.bestThumbnail.url}
                title={song.title}
                artist={song.author.name}
                id={song.id}
                setId={setId}
              />
            )
          })
        )
        : Array(4).fill(true).map(e => <PopularItm />)
      }
      </div>

      <ToastContainer
        autoClose={3000}
        theme="dark"
      />
    </div>
  );
}

export default Popular;