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
  const [disability, setDisability] = useState([]);
  useEffect(() => {
    // Firebase configuration
    // Initialize Firebase
    const fetchData = async () => {
      // Create a reference to the specific formRef in the Realtime Database
      const db = getDatabase(app);
      const formRef = ref(db, `Disability/Handicap`);
      try {
        // Fetch data from the Realtime Database
        onValue(formRef, (snapshot) => {
          const data = snapshot.val();
          console.log(data);
          setDisability(data || []); // Ensure it's an array or an empty array if undefined
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => {
      // Unsubscribe from the Firebase listener if needed
    };
  }, []);

  return (
    <div>
      <Header />
      <Tabs position="relative" variant="unstyled">
        <TabList 
          display="flex"
          justifyContent="space-between"
          width="90%"
          padding="10"
          listStyleType="none">
          <Tab _selected={{ color: "#40a46c" }} >Hearing Products</Tab>
          <Tab _selected={{ color: "#40a46c" }}>Blind Products</Tab>
          <Tab _selected={{ color: "#40a46c" }}>Dumb Products</Tab>
        </TabList>
        <TabIndicator mt="-1.5px" height="2px" bg="#40a46c" borderRadius="1px" />
        <TabPanels>
          <TabPanel>
            <p>one!</p>
            {disability && disability.length > 0 ? (
              <CardLayouts data={disability} />
            ) : (
              <p>No data available.</p>
            )}
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
