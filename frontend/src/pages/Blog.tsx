import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"
import FullBlog from "../components/FullBlog";
import SkeletonFullBlog from "../components/SkeletonLoad";

const Blog = () => {
  const { id } = useParams();
  const {blog,loading} = useBlog({
    id: id || ""
  })
  
  if(loading || !blog)
  {
    return(
      <SkeletonFullBlog />
  )
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog