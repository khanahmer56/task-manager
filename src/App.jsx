import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import { useAuthStore } from "./store/authStore";

function App() {
  const user = useAuthStore((state) => state.user);
  console.log("user", user);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/tasks" /> : <LoginPage />}
        />
        <Route
          path="/tasks"
          element={user ? <TaskPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
