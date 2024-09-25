import Link from "next/link";

function PostCard({ title, date, description, slug, image }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="card group">
        <div className="overflow-hidden">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="layout-card-content">
          <h2>{title}</h2>
          <time className="text-subtle">{date}</time>
          <p className="text-subtle">{description}</p>
        </div>
      </a>
    </Link >
  );
}

export default PostCard;
