import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router';
import  MainLayout  from "./layout/MainLayout"

import { Home , Colections , Man, Wome, About, Contact } from './page'


function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element: <Home/>
        },
      {
        path:"/colections",
        element:<Colections/>
      },
      {
        path:"/man",
        element: <Man/>
      },
      {
        path:"/wome",
        element: <Wome/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      ]
    }
  ])
  return (
    <div className='align-content mb-10'>
     <RouterProvider router={routes}/>
    </div>
  )
}

export default App