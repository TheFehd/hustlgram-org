import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        {({ colors, dark }) => (
          <Routes>
            <Route path="/" element={<Home colors={colors} dark={dark} />} />
            <Route
              path="/services"
              element={<ServicesPage colors={colors} dark={dark} />}
            />
            <Route
              path="/work"
              element={<WorkPage colors={colors} dark={dark} />}
            />
            <Route
              path="/about"
              element={<AboutPage colors={colors} dark={dark} />}
            />
          </Routes>
        )}
      </Layout>
    </BrowserRouter>
  );
}
