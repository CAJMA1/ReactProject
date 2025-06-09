import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/Home"
import Settings from "./pages/Settings";
import Contact from "./pages/Contact";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Settings" element={<Settings />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
