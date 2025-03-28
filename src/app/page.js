
import Image from "next/image";

// src/pages/_app.js
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import Carousel from "@/componemts/carousel";
import NewFeature from "@/componemts/new-features";

import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS globally


export default function Home() {

  return (
    <>
    <Carousel/>
      <NewFeature/>
      
     
    </>
  );
}
