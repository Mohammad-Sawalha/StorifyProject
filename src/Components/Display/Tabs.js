import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const DefaultTabs = ({ item1, item2, item3 }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            wrapped="true"
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab label="Traffic Source" value="1" />
            <Tab label="Order Statistics" value="2" />
            <Tab label="Most Sold" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{item1}</TabPanel>
        <TabPanel value="2">{item2}</TabPanel>
        <TabPanel value="3">{item3}</TabPanel>
      </TabContext>
    </Box>
  );
};

export default DefaultTabs;
