import LogoImage from "../../assets/logo.png";

function Logo() {
  return (
    <div id="logo">
      <div>
        <img
          src={LogoImage} 
          title="YT2MP3"
        />
      </div>
      <h3>YT2MP3</h3>
    </div>
  );
}

export default Logo;