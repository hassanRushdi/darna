import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Component from './constants/Component';
import FetchData from './context/FetchData';
import LangChange from './context/LangChange';
import './style/App.scss';
 

function App() {
  const root = createBrowserRouter([
    {
      path: `/`, element: <Component.Darna />, children: [
        { index: true, element: <Component.Home /> },
        { path: 'about-us', element: <Component.AboutPage /> },
        { path: 'contact-us', element: <Component.ContentPage /> },
        { path: 'facilities', element: <Component.ProductPage /> },
        { path: 'media', element: <Component.Media /> },
        {
          path: '/project-available', children: [
            { index: true, element: <Component.ProjectAvailable /> }, 
            { path: 'details/:id', element: <Component.Details1_1 /> },
            { path: 'architecture_details/:id', element: <Component.Details1_2 /> }
          ]
        },
        {
          path: '/previous-projects', children: [
            { index: true, element: <Component.PreviousProjects /> }, 
            { path: 'details/:id', element: <Component.Details2_1 /> },
            { path: 'architecture_details/:id', element: <Component.Details2_2 /> }
          ]
        },
        {
          path: '/under-construction-projects', children: [
            { index: true, element: <Component.UnderConstructionProjects /> }, 
            { path: 'details/:id', element: <Component.Details3_1 /> },
            { path: 'architecture_details/:id', element: <Component.Details3_2 /> }
          ]
        },

        {
          path: '/under-construction-projects', children: [
            { index: true, element: <Component.UnderConstructionProjects /> }, 
            { path: 'details/:id', element: <Component.Details3_1 /> },
            { path: 'architecture_details/:id', element: <Component.Details3_2 /> }
          ]
        },
        { path: '*', element: <h1>Page Notfound</h1> },
      ],
    },
  ])
  return (
    <div>
      <LangChange>
        <FetchData>
          <RouterProvider router={root} />
        </FetchData>
      </LangChange>
    </div>
  );
}

export default App;
