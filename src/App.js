import React, { useState } from "react";
import HeaderComponent from "./MyComponent/HeaderComponent";
import BodyComponent from "./MyComponent/BodyComponent";
import FooterComponent from "./MyComponent/FooterComponent";
import ReactDOM from "react-dom/client";
import About from "./MyComponent/About";
import Error from "./MyComponent/Error";
import Contact from "./MyComponent/Contact";
import ProfileClass from "./MyComponent/ProfileClass";
// import Profile from "./MyComponent/ProfileClass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestrauntMenu from "./MyComponent/RestrauntMenu";
import { lazy, Suspense } from "react";
import Shimmer from "./MyComponent/Shimmer";
import UserContext from "./Utils/UserContext";

const Instamart = lazy(() => import("./MyComponent/Instamart"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rakhijha",
    email: "rakhijha9560@gmail.com"
  })
  return (
    <>
    <UserContext.Provider value={{
      user:  user,
      setUser: setUser,
    }}>
      <Router>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<BodyComponent />} />

          <Route path="/about" element={<About />}>
            <Route path="profileClass" element={<ProfileClass />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/restaurant/:id" element={<RestrauntMenu />} />
          <Route path="/error" element={<Error />} />
          <Route
            path="/instamart"
            element={
              <Suspense fallback={<Shimmer />}>
                <Instamart />
              </Suspense>
            }
          />
        </Routes>

        <FooterComponent />
      </Router>
      </UserContext.Provider>
    </>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

//  const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<appRouter />);

export default AppLayout;
