import "./LandingPage.scss";
import { Link } from "react-router-dom";
import checkLogo from '../../assets/images/chec-logo.jpeg'

const LandingPage = () => {
  return (
    <section className="scan-button-container">
      {/* <div className="title--wrapper">
        <h1 className="title">CHEC</h1>
        <img className="title--logo" src={checkLogo}/>
      </div> */}
      <Link to="/orderSummary">
        <button className="scan-button-container__button">Scan</button>
      </Link>
    </section>
  );
};

export default LandingPage;
