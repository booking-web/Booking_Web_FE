import { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { Spin } from "antd";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"

const mainRoutes = [

  //auth
  {
    path: "/login-page",
    element: <LoginPage />,
    key: "login",
  },

  // profile
  {
    path: "/user-profiles",
    // element: <Profile />,
    key: "user-profile",
    authenticated: true,
  },
  {
    path: "/doctor-profiles",
    // element: <Profile />,
    key: "doctor-profile",
    authenticated: true,
  },

  // home
  {
    path: "/",
    element: <HomePage />,
    key: "home",
  }
]

function App() {

  const { loading } = useContext(StateContext);

  return (
    <div style={{ position: "relative" }}>
      <>
        <Routes>
          <Route key={"not-found"} path={"*"} element={<NotFoundPage />} />
          {mainRoutes.map((item) => (
            <Route
              key={item.key}
              path={item.path}
              element={item.element}
            />
          ))}
        </Routes>
        {loading && (
          <div>
            <Spin />
          </div>

        )}
      </>
    </div>
  )
}

export default App
