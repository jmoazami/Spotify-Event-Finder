import { StyledLoginContainer, StyledLoginButton} from "../styles/StyledLoginContainer";
import { Carousel } from "react-responsive-carousel";
import SpotifyLogo from "../assets/image/spotifyLogo.png";
import TicketMasterLogo from "../assets/image/ticketMasterLogo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Login = () => (
  <StyledLoginContainer>
    <Carousel
      axis={"horizontal"}
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      centerMode={false}
      autoPlay={true}
      swipeable={false}
      width={"100%"}
      infiniteLoop={true}
    >
      <div className={"bannerContainer"}>
        <img
          className={"bannerBackground"}
          src={SpotifyLogo}
          alt="SpotifyLogo"
        />
      </div>
      <div className={"bannerContainer"}>
        <div className={"ticket"}>
          <img
            className={"bannerBackground"}
            src={TicketMasterLogo}
            alt="TicketMasterLogo"
          />
        </div>
      </div>
    </Carousel>
    <StyledLoginButton href="http://localhost:8888/login">
      Log in to Spotify
    </StyledLoginButton>
    <div className={"textBg"}>
      Log in to your Spotify account to find events near you based off your
      favorite artists! 
    </div>
    <div>Created by John-Shaw Moazami</div>
  </StyledLoginContainer>

);

export default Login;
