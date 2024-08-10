import { Link } from "react-router-dom"

interface BlogCardInput {
  authorName?: string,
  title: string,
  content: string,
  publishedDate: string,
  id: string,
}

const BlogCard = ({authorName, title, content, publishedDate, id}: BlogCardInput) => {
  const nameNull : string = "Anonymous"
  return (
    <Link to={`/blog/${id}`} className="mb-4">
      <article className="mb-2 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition duration-300 ease-in-out max-w-4xl mx-auto">
        <div className="p-6">
          <header className="flex items-center mb-4">
            <Avatar size="small" name={authorName ? authorName : nameNull}/>
            <div className="ml-3 flex items-center text-sm text-gray-500">
              <span className="font-medium text-gray-900">{authorName}</span>
              <span className="mx-1">·</span>
              <time dateTime={publishedDate}>{publishedDate.toString().split('T')[0]}</time>
            </div>
          </header>
          <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {content}
          </p>
          <footer className="flex items-center text-sm text-gray-500">
            <span>{Math.ceil(content.length/300)} min read</span>
          </footer>
        </div>
      </article>
    </Link>
  )
}

export function Avatar({name, size}: {name: string, size: string}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-8 h-8" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full border border-gray-200`}>
      <span className={`${size === "small" ? "text-sm" : "text-base"} font-medium text-gray-600`}>
        {name[0].toUpperCase()}
      </span>
    </div>
  )
}

export default BlogCard