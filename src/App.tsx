import HeaderCovid from './components/HeaderCovid/HeaderCovid.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import SlickSlider from "./components/SlickSlider/SlickSlider.tsx"
import Child_BG1 from './components/HomeComponents/Background1/Background1.tsx'
import Background2 from "./components/HomeComponents/Background2/Background2.tsx"

const mainRoutes = [

  //auth
  {
    path: "/sign-in",
    // element: <SignIn />,
    key: "sign-in",
  },
  {
    path: "/sign-up",
    // element: <SignIn />,
    key: "sign-up",
  },
  {
    path: "/change-password",
    // element: <SignIn />,
    key: "change-password",
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
    path: "",
    // element: <Home />,
    key: "home",
  }
]

function App() {


  return (
    <>
      <HeaderCovid />
      <Navbar />
      <SlickSlider />
      <Child_BG1 />
      <Background2 />
    </>
  )
}

export default App
