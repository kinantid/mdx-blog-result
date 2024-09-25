import Link from "next/link";

function PostCard({ title, date, description, slug, image }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="card">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
        <div className="layout-card-content">
          <h2>{title}</h2>
          <time className="text-subtle">{date}</time>
          <p className="text-subtle">{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
