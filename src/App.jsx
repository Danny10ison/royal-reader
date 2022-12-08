import { Box, Stack } from '@mui/material';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavigBar from './components/BottomNavigBar';
// import Home from "./components/Home";
import NotificationSection from './components/NotificationSection';
import StoryList from './components/StoryList';
import TopNavigBar from './components/TopNavigBar';
import importScript from './util/importScript';


const App = props => {
  importScript('./lib/microapp.js');
  return (
    // <Router>
    //   <Routes>
    //     <Route  path="/" element={<Home />} />
    //   </Routes>
    // </Router>
    
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

// function App() {

//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route  path="/" element={<Home />} />
//     //   </Routes>
//     // </Router>
    
//     <Box >
      
//             <TopNavigBar/>
//             <Stack direction="column" spacing={2} justifyContent="space-between">
//             <NotificationSection/>
//             <StoryList/>
                
//             </Stack>
//             <BottomNavigBar />
//         </Box>

//   )
// }
export default App;

