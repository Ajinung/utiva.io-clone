import React from "react";
import Value from "./Components/Value";
import Hero from "./Components/Hero";
import Numbers from "./Components/Numbers";
import Faq from "./Components/Faq";
import Holder from "./Components/Holder";
import Footer from "./Components/Footer";

import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Holder />
      <Numbers />
      <Value />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
