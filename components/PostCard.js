import Link from "next/link";

function PostCard({ title, date, description, slug, image }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="block my-4 hover:bg-gray-100">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
        <div className="p-4">
          <h2>{title}</h2>
          <time className="text-subtle">{date}</time>
          <p className="text-subtle">{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
