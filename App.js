// import "./App.css";
import "./output.css";
import {BroeserRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import LoginComponent from './routes/login';
import SignupComponent from './routes/signup';
import HomeComponent from './routes/home';
import LoggedInHomeComponent from './routes/loggedInHome';
import UploadSongComponent from './routes/uploadSong';
import MyMusicComponent from './routes/myMusic';

function App() {
  const [cookie, setCookie] = useCookies(["token"]);
  console.log(cookie.token);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
      {cookie.token ? (
          <Routes>
              // logged in routes
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadSong" element={<UploadSongComponent />} />
              <Route path="/myMusic" element={<MyMusicComponent />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <></>
          </Routes>
            ) : (
              <Routes>
                // logged out routes
                <Route path="/home" element={<HomeComponent />} />
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
                <Route path="*" element={<Navigate to="/login" />} />
                <></>
              </Routes>
            )}
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return <div className="w-full h-full">
    <h1 className="text-4xl font-bold text-center">Welcome to Spotify</h1>
  </div>
}

export default App;
