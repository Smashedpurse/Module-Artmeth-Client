import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import { getLoggedIn, logout } from "./services/auth";
// import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import HomePage from "./pages/HomePage";
// import { LOGINPAGE } from "./utils/paths";
import LogIn from "./pages/LogIn";
import Signup from "./components/SignUp";
import UserView from "./pages/UserProfile"
import GalleryView from "./pages/Gallery"
import ArtistsView from "./pages/Artists";
import UserFormArtView from "./pages/UserFormArt";
import MyGallery from "./pages/MyGallery";
import AddMovie from "./pages/AddMovie";
import GalleryDetail from "./pages/GalleryDetails";
import MyGalleries from "./pages/MyGalleries";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {//REGISTRO DE RUTAS
//REGISTRO DE RUTAS
setUser(user)
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>}/>
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>}/>
        <Route path="/user/profile" element={<UserView user={user}/>}/>
        <Route path="/gallery" element={<GalleryView/>}/>
        <Route path="/artists" element={<ArtistsView/>}/>
        <Route path="/user/create-gallery" element={<UserFormArtView user={user}/>}/>
        <Route path="gallery/Details/:id" element={<GalleryDetail/>}/>
        <Route path="/user/gallery" element={<MyGalleries user={user}/>}/>
      </Routes>
    </div>
  );
}
