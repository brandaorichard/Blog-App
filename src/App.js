import "./App.css";
import Post from "./Post";
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Post />}/>
          <Route path="/login" element={<LoginPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
