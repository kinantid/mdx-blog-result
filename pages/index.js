import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>

      <h1 className="layout-section-title">Latest Posts</h1>
      <div className="layout-grid">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
            image={post.data.image}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
