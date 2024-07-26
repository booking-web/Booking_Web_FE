import { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { Spin } from "antd";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DoctorsPage from "./pages/DoctorsPage";
import AdminPage from "./pages/AdminPage";
import ClinicPage from "./pages/ClinicPage";
import DoctorAuthPage from "./pages/DoctorAuthPage";
import UserProfile from "./pages/UserProfile";
import DoctorDetailPage from "./pages/DoctorDetailPage";

const mainRoutes = [

  //auth
  {
    path: "/auth-page",
    element: <LoginPage />,
    key: "auth",
  },

  // profile
  {
    path: "/user-profile",
    element: <UserProfile />,
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
  },

  // doctors
  {
    path: "/doctors",
    element: <DoctorsPage />,
    key: "doctors"
  },

  {
    path: "/doctors/:id/detail",
    element: <DoctorDetailPage />,
    key: "doctor-detail"
  },

  // clinics
  {
    path: "/clinics",
    element: <ClinicPage />,
    key: "clinic"
  },

  // admin
  {
    path: "/admin",
    element: <AdminPage />,
    key: "admin"
  },

  // doctor auth page
  {
    path: "/abc",
    element: <DoctorAuthPage />,
    key: "doctor-auth-page"
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
