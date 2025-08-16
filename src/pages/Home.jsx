import { blogPosts } from "../data/blogposts";

const sortedPosts = blogPosts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function Home() {
  return (
    <div>
      <h1>Latest Blog Posts</h1>
      {sortedPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
