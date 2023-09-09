import React, { useState, useEffect } from "react";
import Header from "../components/sections/Header";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { getDatabase, ref, onValue } from "firebase/database";
import database, { app } from "../firebase";

import CardLayouts from "../components/CardLayouts";

function Home() {
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
    <div>
      <Header />
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Hearing Products</Tab>
          <Tab>Blind Products</Tab>
          <Tab>Dumb Products</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
            <CardLayouts />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;
