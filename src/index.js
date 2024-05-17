import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { RouterProvider , createBrowserRouter} from 'react-router-dom';
import HomePage from './Home';
import AboutPage from './About';
import BlogPage from './Layout/Blog';
import ProductPage from './Product';
import Contact from './Layout/contact/contact';
import Privacy from './Layout/privacy/privacy';
import BlogDescriptionBanner from './Layout/blogdescription/blogDescriptionBanner';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router  = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }, 
      {
        path: "/product",
        element: <ProductPage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },{
        path: "/contact",
        element: <Contact />
      }
      ,{
        path: "/privacy",
        element: <Privacy />
      },
      {
        path: "/blogdec",
        element: <BlogDescriptionBanner />
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
