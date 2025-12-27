import ArticlesListClient from "./ArticlesListClient";
import { getArticles } from "../utils/article.util";

export default async function ArticlesList() {
  const articles = await getArticles();

  return <ArticlesListClient articles={articles} />;
}