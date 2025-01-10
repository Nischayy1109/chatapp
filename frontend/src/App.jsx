import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Chat from "./components/Chat";
import ContactUs from "./components/ContactUs";
//import NotFound from "./components/NotFound"; // Add this component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="*" element={<NotFound />} /> This will handle 404 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
