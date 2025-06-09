import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home"
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="settings" element={<Settings />}/>
          </Route>
        </Routes>
  )
}

export default App;
