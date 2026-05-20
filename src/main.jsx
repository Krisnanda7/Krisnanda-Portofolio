import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";
import "animate.css";
import { inject } from "@vercel/analytics";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
inject();
AOS.init();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreLoader />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
);
