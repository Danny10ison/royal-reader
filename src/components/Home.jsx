import React from "react";
import { Stack, Box } from "@mui/material";
import TopNavigBar from "./TopNavigBar";
import BottomNavigBar from "./BottomNavigBar"
import StoryList from "./StoryList";
import NotificationSection from "./NotificationSection";


const Home = () => {

    return (
        <Box >
            <TopNavigBar/>
            <Stack direction="column" spacing={2} justifyContent="space-between">
            <NotificationSection/>
            <StoryList/>
                
            </Stack>
            <BottomNavigBar />
        </Box>
    )
}

export default Home;