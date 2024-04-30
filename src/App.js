import "./App.css";
import Post from "./Post";
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
        </Route>
      </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
