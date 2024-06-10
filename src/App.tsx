import HeaderCovid from './components/HeaderCovid/HeaderCovid.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import SlickSlider from "./components/SlickSlider/SlickSlider.tsx"
import Child_BG1 from './components/HomeComponents/Background1/Background1.tsx'
import Background2 from "./components/HomeComponents/Background2/Background2.tsx"
import Background3 from './components/HomeComponents/Background3/Background3.tsx'
import Background4 from './components/HomeComponents/Background4/Background4.tsx'
import Background5 from './components/HomeComponents/Background5/Background5.tsx'
import Background6 from './components/HomeComponents/Background6/Background6.tsx'
import Background7 from './components/HomeComponents/Background7/Background7.tsx'
import Background8 from './components/HomeComponents/Background8/Background8.tsx'
import Background9 from './components/HomeComponents/Background9/Background9.tsx'
import Background10 from './components/HomeComponents/Background10/Background10.tsx'

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
      <Background3 />
      <Background4 />
      <Background5 />
      <Background6 />
      <Background7 />
      <Background8 />
      <Background9 />
      <Background10 />
    </>
  )
}

export default App
