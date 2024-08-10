import { Blog } from "../hooks"
import { Avatar } from "./BlogCard"
import NavBar from "./NavBar"

const FullBlog = ({blog}:{blog:Blog}) => {
  const nameNull:string = "Anonymous"
  const userName:string = localStorage.getItem("name") || ""
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar name={userName} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:items-start lg:space-x-8">
          <article className="bg-white shadow-sm rounded-lg overflow-hidden lg:flex-grow">
            <div className="px-6 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500 mb-6">
                {blog.publishedDate.toString().split('T')[0]}
              </p>
              <div className="prose prose-sm sm:prose lg:prose-lg mx-auto">
                {blog.content}
              </div>
            </div>
          </article>
          <aside className="mt-8 lg:mt-0 lg:w-64 lg:flex-shrink-0">
            <div className="bg-white shadow-sm rounded-lg p-6 lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Author</h2>
              <div className="flex items-start">
                <div className="flex-shrink-0 cursor-pointer">
                  <Avatar size="big" name={blog.author.name ?blog.author.name : nameNull } />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {blog.author.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Master of mirth, purveyor of puns, and the funniest person in the kingdom
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default FullBlog