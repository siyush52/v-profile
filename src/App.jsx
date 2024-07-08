import React from "react";
import Home from "./Components/Home/Home";
import Text from "./Components/Text/Text";
import Service from "./Components/Services/Service";
import Appointment from "./Components/Appointment/Appointment";
import Testimonials from "./Components/Testimonials/Testimonials";
import Business from "./Components/Business/Business";
import Contact from "./Components/Contact-me/Contact";
import Footer from "./Components/Footer/Footer";
import Customer from "./Components/Customers/Customer";
const App = () => {
  return (
    <div style={{width : '450px',display:"flex",flexDirection:'column',justifyContent:"center"}}>
      <Home />
      <Text/>
      <Service/>
      <Appointment/>
      <Testimonials/>
      <Customer/>
      <Business/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
