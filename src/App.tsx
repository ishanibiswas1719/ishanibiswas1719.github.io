import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/CreativeExperiencePage";
import HomePage from "./pages/CreativeHomePage";
import PlaybookPage from "./pages/PlaybookPage";
import ResumePage from "./pages/ResumePage";
import WorkDetailPage from "./pages/WorkDetailPage";
import WorkPage from "./pages/WorkPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetailPage />} />
        <Route path="/playbook" element={<PlaybookPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
