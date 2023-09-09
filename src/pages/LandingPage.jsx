import React, {useState, useEffect} from "react";
import HeroSection from "./LandingPage/HeroSection";
import AboutSection from "./LandingPage/AboutSection";

import { getDatabase, ref, onValue } from "firebase/database";


import database, { app } from "../firebase";

const LandingPage = () => {

  const [disability, setDisability] = useState();
  useEffect(() => {
    // Firebase configuration
    // Initialize Firebase
    const fetchData = async () => {
      // Create a reference to the specific formRef in the Realtime Database
      const db = getDatabase(app);
      const formRef = ref(db, `Disability`);
      try {
        // Fetch data from the Realtime Database
        onValue(formRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          setDisability(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      // Unsubscribe from the Firebase listener
    };
  }, []);

  const handleChange = () => {};

  return (
    <>

      <HeroSection />
      <AboutSection />
    </>
  );
};

export default LandingPage;
