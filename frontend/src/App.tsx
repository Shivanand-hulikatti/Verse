import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/publish' element={<Publish />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
