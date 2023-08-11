import styles from "./ui.module.css";
import { Clock, Comments } from "../../assets/icons";

const ArticleCard = (props) => {
  const { title, description, urlToImage, content, author } = props;
  return (
    <article className={styles.card}>
      <figure className={styles["card-img"]}>
        <img src={urlToImage} alt={title} />
      </figure>
      <div className={styles["card-content"]}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{content}</p>
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

export default ArticleCard;
