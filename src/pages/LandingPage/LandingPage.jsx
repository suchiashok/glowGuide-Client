import "./LandingPage.scss";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="landing">
      <div className="landing__bg">
      </div>
      <div className="landing__bg2">
      <h3 className="landing__logo">glow Guide</h3>
        <Link to='/home'>
        <Button
          className="landing__button"
          variant="outlined"
          sx={{
            color: "#020852",
            border: "2px solid #020852",
            position: "absolute",
            right: "2rem",
            bottom: "4rem",
            fontSize: "1rem",
          }}
        >
          Get Started!
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
