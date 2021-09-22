import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import NoMatch from "./components/NoMatch";
import { Bloqued, BloquedUser } from "./components/Bloqued";

export const App = () => (
  <Router>
    <nav>
      {/* Navegacion Declarativa */}
      <Link to="/" style={{ paddingRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ paddingRight: "10px" }}>
        About
      </Link>
      <Link to="/users" style={{ paddingRight: "10px" }}>
        Users
      </Link>
      <Link to="/sdfgfghdfgh" style={{ paddingRight: "10px" }}>
        Break
      </Link>
    </nav>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users" element={<Users />}>
        <Route path="bloqued" element={<Bloqued />}>
          <Route path=":name" element={<BloquedUser />} />
        </Route>
        <Route path=":id" element={<User />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </Router>
);
