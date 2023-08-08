import { AppProps } from "next/app";
import Image from "next/image";
import phoenix from "../../../public/imgs/phoenix.png";

const POTMCard = ({ player }) => {
  return (
    <>
      <div className="container py-4">
        <div className="card text-bg-dark">
          {/* <Image src={phoenix} alt="Player of the Month Background" /> */}
          <div className="card-img-overlay">
            <h5 className="card-title">Player of the Month</h5>
            <p className="card-text">
              The Phoenix Dawn Player of the Month is: {player}!
            </p>
            <p className="card-text">
              <small>Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default POTMCard;
