import "./App.css";
import LoginForm from "./pages/auth/login";
import RegisterForm from "./pages/auth/register";
import HomePage from "./pages/private/home";
import ThemeProvider from "./providers/themeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
