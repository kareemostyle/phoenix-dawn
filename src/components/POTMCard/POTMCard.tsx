import styles from "./POTMCard.module.css";

type Props = {
  player: string;
};

const POTMCard = ({ player }: Props) => {
  return (
    <>
      <div className="container py-4">
        <div className={`card text-center text-bg-dark`}>
          <div className={`card-header `}>Player of the Month</div>
          <div className={`card-body ${styles.cardsettings}`}>
            <h5 className={`card-title ${styles.playertext}`}>{player}</h5>
            <p className={`card-text ${styles.cardtext}`}>
              Congratulations to {player}, as they demonstrated incredible
              support to Phoenix Dawn members.
            </p>
            <a
              href="#previousWinners"
              className={`btn btn-dark btn-sm ${styles.shadow}`}
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="previousWinners"
            >
              Previous Winners
            </a>
          </div>
          <div className={`card-footer text-bg-dark`}>August</div>
          <div className="collapse" id="previousWinners">
            NLPier - July
          </div>
        </div>
      </div>
    </>
  );
};

export default POTMCard;
