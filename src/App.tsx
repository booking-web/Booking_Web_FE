import { useContext } from "react";
import { StateContext } from "./contexts/StateContext";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import { Spin } from "antd";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DoctorsPage from "./pages/DoctorsPage";
import ClinicPage from "./pages/ClinicPage";
import DoctorAuthPage from "./pages/DoctorAuthPage";
import UserProfile from "./pages/UserProfile";
import DoctorDetailPage from "./pages/DoctorDetailPage";
import ClinicDetailPage from "./pages/ClinicDetailPage";
import SpecialtyInformation from "./components/AdminComponents/Create/SpecialtyInformation";
import MainLayout from "./components/AdminComponents/MainLayout";
import DoctorAccount from "./components/AdminComponents/Create/DoctorAccount";
import ManageDoctors from "./components/AdminComponents/Manage/ManageDoctors";
import ManageClinics from "./components/AdminComponents/Manage/ManageClinics";
import TopRated from "./components/AdminComponents/Statistical/TopRated";
import MostBooking from "./components/AdminComponents/Statistical/MostBooking";
import ManageUsers from "./components/AdminComponents/Manage/ManageUsers";

const mainRoutes = [
  // auth
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
    key: "doctors",
  },
  {
    path: "/doctors/detail",
    element: <DoctorDetailPage />,
    key: "doctor-detail",
  },

  // clinics
  {
    path: "/clinics",
    element: <ClinicPage />,
    key: "clinic",
  },
  {
    path: "/clinics/detail",
    element: <ClinicDetailPage />,
    key: "clinic-detail",
  },

  // doctor auth page
  {
    path: "/abc",
    element: <DoctorAuthPage />,
    key: "doctor-auth-page",
  },
];

const adminRoutes = [
  {
    path: "statistical/top-rated-doctor",
    element: <TopRated />,
    key: "top-rated-doctor",
  },
  {
    path: "statistical/most-booked-doctor",
    element: <MostBooking />,
    key: "most-booked-booking",
  },
  {
    path: "manage/doctors",
    element: <ManageDoctors />,
    key: "manage-doctors",
  },
  {
    path: "manage/clinics",
    element: <ManageClinics />,
    key: "manage-clinics",
  },
  {
    path: "manage/users",
    element: <ManageUsers />,
    key: "manage-users",
  },
  {
    path: "create/specialty-information",
    element: <SpecialtyInformation />,
    key: "create-specialty-information",
  },
  {
    path: "create/doctor-account",
    element: <DoctorAccount />,
    key: "create-doctor-account"
  },
];

function App() {
  const { loading } = useContext(StateContext);

  return (
    <div style={{ position: "relative" }}>
      <>
        <Routes>
          <Route key={"not-found"} path={"*"} element={<NotFoundPage />} />
          {mainRoutes.map((item) => (
            <Route key={item.key} path={item.path} element={item.element} />
          ))}
          <Route path="/admin/*" element={<MainLayout />}>
            <Route
              index
              element={<Navigate to="/admin/statistical/top-rated-doctor" replace />}
            />
            {adminRoutes.map((item) => (
              <Route key={item.key} path={item.path} element={item.element} />
            ))}
          </Route>
        </Routes>
        {loading && (
          <div>
            <Spin />
          </div>
        )}
      </>
    </div>
  );
}

export default App;
