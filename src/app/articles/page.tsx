import ArticlesList from "@/src/components/ArticlesList";

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">
        Articles
      </h1>

      <ArticlesList />
    </div>
  );
}