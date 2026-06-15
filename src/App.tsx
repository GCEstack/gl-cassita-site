import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Memories from './pages/Memories'
import Playlist from './pages/Playlist'
import About from './pages/About'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'memories', element: <Memories /> },
      { path: 'playlist', element: <Playlist /> },
      { path: 'about', element: <About /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
