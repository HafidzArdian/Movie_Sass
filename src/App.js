import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Catalog from "./pages/Catalog";
import Detail from "./pages/detail/Detail";
import ErorPage from "./components/ErorrPage/404";
import Footer from "./components/Footer/Footer";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetails from "./components/posts/PostDetails";
import Posts from "./components/posts/Posts";
import Protected from "./pages/Protected";
import { Provider } from "react-redux";
import React from "react";
import RedirectIfProtected from "./pages/RedirectIfProtected";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";

// import Routing from "./Config/Routing";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:category",
          element: (
            <Protected>
              {" "}
              <Catalog />{" "}
            </Protected>
          ),
        },
        {
          path: "/:category/search/:keyword",
          element: (
            <Protected>
              <Catalog />
            </Protected>
          ),
        },
        {
          path: "/:category/:id",
          element: (
            <Protected>
              <Detail />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "/posts",
      element: (
        <Protected>
          {" "}
          <Posts />
        </Protected>
      ),
      errorElement: <ErorPage />,
    },
    {
      path: "/posts/:id",
      element: (
        <Protected>
          <PostDetails />
        </Protected>
      ),
      errorElement: <ErorPage />,
    },
    {
      path: "/login",
      element: (
        <RedirectIfProtected>
          {" "}
          <Login />
        </RedirectIfProtected>
      ),
      errorElement: <ErorPage />,
    },
    {
      path: "/register",
      element: (
        <RedirectIfProtected>
          {" "}
          <Register />
        </RedirectIfProtected>
      ),
      errorElement: <ErorPage />,
    },
  ]);
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="440956278415-igq3caid3rl9kp3tv69qrdn3u7u45glj.apps.googleusercontent.com">
        <RouterProvider router={router} />
        <ToastContainer theme="colored" />
      </GoogleOAuthProvider>
    </Provider>
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       animate={true}
    //       element={
    //         <React.Fragment>
    //           <Header />

    //           <Footer />
    //           {/* <Routing /> */}
    //         </React.Fragment>
    //       }
    //     />

    //     <Route
    //       path="/Movie"
    //       element={
    //         <React.Fragment>
    //           <Catalog />
    //         </React.Fragment>
    //       }
    //     />
    //   </Routes>
    // </BrowserRouter>

    // <BrowserRouter>
    // <Header />
    // <Routes>
    //   <Route path="/" element={<Home />}/>
    //   <Route path="/Catalog" element={<Catalog />}/>
    //   <Route path="/Detail" element={<Detail />}/>
    // </Routes>
    // <Footer />

    // </BrowserRouter>
  );
}

export default App;
