import "./App.css";
import { AuthProvider } from "./components/auth/Auth";
import Home from "./pages/home/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
