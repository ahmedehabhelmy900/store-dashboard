import { Add } from "./components/add";
import Dash from "./components/dash";
import Edit from "./components/edit";
import Nav from "./components/nav";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/route";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dash />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <Add />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <PrivateRoute>
              <Edit />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
