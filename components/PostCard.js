import Link from "next/link";

function PostCard({ title, date, description, slug, image }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="block my-4 py-4 border-b hover:bg-gray-100">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t" />
        <div className="p-4">
          <h2 className="font-bold text-2xl my-4">{title}</h2>
          <time className="text-gray-400">{date}</time>
          <p className="mt-4 italic">{description}</p>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
