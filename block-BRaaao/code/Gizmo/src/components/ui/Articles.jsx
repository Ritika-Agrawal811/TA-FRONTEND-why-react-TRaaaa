import styles from "./ui.module.css";
import data from "../../data/data.json";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  console.log(data);
  return (
    <section className={styles.articles}>
      <h2>Articles</h2>
      <div className={styles["articles-content"]}>
        {data.map((article, index) => {
          return <ArticleCard key={index} {...article} />;
        })}
      </div>
    </section>
  );
};

export default Articles;
