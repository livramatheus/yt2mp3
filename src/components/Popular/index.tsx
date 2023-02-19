import { useEffect, useState } from "react";
import { BsStars } from "react-icons/bs";
import { fetchPopularRequest } from "../../services/PopularRequest";
import PopularResponse from "../../services/PopularRequest/PopularResponse";
import PopularItm from "./PopularItm";

function Popular() {

  const [popularSongs, setPopularSongs] = useState<Array<PopularResponse> | null>(null);

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

      <div>
      {
        popularSongs
        ? (
          popularSongs.map((song) => {
            return (
              <PopularItm
                image={song.bestThumbnail.url}
                title={song.title}
                artist={song.author.name}
              />
            )
          })
        )
        : Array(4).fill(true).map(e => <PopularItm />)
      }
      </div>
    </div>
  );
}

export default Popular;