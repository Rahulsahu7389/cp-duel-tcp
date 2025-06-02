import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import LeaderboardPage from "./LeaderboardPage";
import ContestPage from "./ContestPage";
import ContestBracketPage from "./ContestBracketPage";
import ContestLeaderboardPage from "./ContestLeaderboardPage";
import ContestStartPage from "./ContestStartPage";
import SheetsPage from "./SheetsPage";
import DPSheetPage from "./DPSheetPage";
import GraphSheetPage from "./GraphSheetPage";
import TreeSheetPage from "./TreeSheetPage";
import RangeQuerySheetPage from "./RangeQuerySheetPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import About from "./About";

function App() {
  const location = useLocation();
  // List of routes where Navbar should be hidden
  const hideNavbarRoutes = ['/signup','/'];
  return (
    // <Router>
      <>
      {/* <Navbar /> */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Login/>}/>
        {/* <Route element={<ProtectedRoute children={<div>you need to login</div> */}
        {/* }></ProtectedRoute>}> */}
        
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />

        <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
        <Route path="/contest" element={<ProtectedRoute><ContestPage /></ProtectedRoute>} />
        <Route path="/contest/:contestId" element={<ContestBracketPage />} />
        <Route
          path="/contest/:contestId/leaderboard"
          element={<ProtectedRoute><ContestLeaderboardPage /></ProtectedRoute>}
          />
        <Route
          path="/contest/:contestId/start"
          element={<ContestStartPage />}
          />
        <Route path="/sheets" element={<ProtectedRoute><SheetsPage /></ProtectedRoute>} />
        <Route path="/sheets/dp" element={<DPSheetPage />} />
        <Route path="/sheets/graph" element={<GraphSheetPage />} />
        <Route path="/sheets/tree" element={<TreeSheetPage />} />
        <Route path="/sheets/range-query" element={<RangeQuerySheetPage />} />
          
          
          {/* </Route> */}
      </Routes>
      <Footer />
    
    </>
  );
}

export default App;
