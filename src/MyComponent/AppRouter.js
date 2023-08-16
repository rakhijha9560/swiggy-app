import React from "react"
import  ReactDOM from 'react-dom/client';
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import About from './MyComponent/About';
import Error from './MyComponent/Error';


 const appRouter = createBrowserRouter([
   {
     path: "/",
     errorElement: <Error />,
   },
   {
     path: "/about",
     element: <About />,
   },
 ]);
 const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(<appRouter RouterProvider/>);