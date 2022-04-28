import styles from './style.module.scss';

function CardItem({ cardData }) {
  return (
    <div className={styles.CardItem}>
        <h2 className={styles.CardItem__h2}>{cardData.title && cardData.title}</h2>
      
      <p className={styles.CardItem__p}>{cardData.year && cardData.year }</p>
      <img src={cardData.poster && cardData.poster} alt={cardData.title && cardData.title} />
      <p className={styles.CardItem__p}>{cardData.description && cardData.description}</p>
      <div className={styles.genre}>
        <ul className={styles.CardItem__ul}>
        {cardData && Array.isArray(cardData.genres && cardData.genres) ? cardData.genres.map((genre, index) => 
        <li key={index}>{genre}</li>):<li>{cardData.genres}</li>}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;