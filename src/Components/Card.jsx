import styles from "./modules/Card.module.css";

export default function Card({ specialMeals }) {
  const specialMeal = specialMeals.map(
    ({ id, image, name, price, description }) => {
      return (
        <div key={id} className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img src="" alt="" />
            </div>
            <div className={styles.content}>
              <div className={styles.text}>
                <h2>{name}</h2>
                <p>{description}</p>
                <tag href="#">Read More</tag>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
  return <div className={styles.cardList}>{specialMeal}</div>;
}
