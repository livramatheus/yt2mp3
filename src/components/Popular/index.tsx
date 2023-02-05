import { BsStars } from "react-icons/bs";

import Placeholder1 from "../../assets/popular/placeholder1.jpeg";
import Placeholder2 from "../../assets/popular/placeholder2.jpeg";
import Placeholder3 from "../../assets/popular/placeholder3.jpeg";
import Placeholder4 from "../../assets/popular/placeholder4.jpeg";
import PopularItm from "./PopularItm";
import PopularSong from "./PopularSong";

let songs: PopularSong[];

songs = [
  { image: Placeholder1, title: "Lorem Sit  ", artist: "50 Cent" },
  { image: Placeholder2, title: "Ipsum Lorem", artist: "Pop Smoke" },
  { image: Placeholder3, title: "Dolor Ipsum", artist: "Rah Swish" },
  { image: Placeholder4, title: "Sit Amet", artist: "Fetty Wap" }
];

function Popular() {
  return (
    <div id="popular">
      <h3>
        <BsStars />
        Popular
      </h3>

      <div>
        {
          songs.map((s) => {
            return (
              <PopularItm
                image={s.image}
                title={s.title}
                artist={s.artist}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Popular;