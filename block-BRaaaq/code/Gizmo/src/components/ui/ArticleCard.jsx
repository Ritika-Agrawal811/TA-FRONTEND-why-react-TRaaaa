import PropTypes from "prop-types";
import styles from "./ui.module.css";
import { Clock, Comments } from "../../assets/icons";

const ArticleCard = (props) => {
  const { title, urlToImage, content, author } = props;

  const displayPlaceholderImage = (e) => {
    e.target.src = "https://placehold.co/600x400";
    e.onerror = null;
  };

  return (
    <article className={styles.card}>
      <figure className={styles["card-img"]}>
        <img src={urlToImage} alt={title} onError={displayPlaceholderImage} />
      </figure>
      <div className={styles["card-content"]}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{content.slice(0, 150)}</p>
        <p className={styles["content-details"]}>
          <span>
            <Clock /> 6 mins ago
          </span>
          <span>
            <Comments /> 39 comments
          </span>
        </p>
      </div>
    </article>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ArticleCard;
