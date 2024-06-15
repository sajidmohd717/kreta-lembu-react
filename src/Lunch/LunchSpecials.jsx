import styles from "./LunchSpecials.module.css";

import NasiMinyakImg from "../assets/lunch/Nasi_Minyak.jpg";
import NasiAyam from "../assets/lunch/Nasi_Ayam.jpeg";
import NasiDalca from "../assets/lunch/Nasi_Dalca.jpg";
import ButterRice from "../assets/lunch/Butter_Rice.jpg"
import NasiBriyani from "../assets/lunch/Nasi_Briyani.jpg"

function LunchSpecials() {
  const lunchSpecialsList = [
    {
      day: "Monday",
      name: "Nasi Minyak",
      img: NasiMinyakImg,
    },
    {
      day: "Tuesday",
      name: "Nasi Ayam",
      img: NasiAyam,
    },
    {
      day: "Wednesday",
      name: "Nasi Dalca",
      img: NasiDalca,
    },
    {
      day: "Thursday",
      name: "Spaghetti / Butter Rice",
      img: ButterRice,
    },
    {
      day: "Friday",
      name: "Nasi Briyani",
      img: NasiBriyani,
    },
  ];
  return (
    <>
      <h2>Daily Lunch Specials</h2>
      <div className={styles["lunch-special-container"]}>
        {lunchSpecialsList.map((lunch, index) => (
          <div className="lunch-special">
            <img src={lunch.img} alt="" />
            <p className={styles['lunch-name']}>{lunch.name}</p>
            <p className={styles['lunch-name']}>Price: $7</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default LunchSpecials;
