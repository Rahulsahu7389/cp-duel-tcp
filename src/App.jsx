import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/contest" element={<ContestPage />} />
        <Route path="/contest/:contestId" element={<ContestBracketPage />} />
        <Route
          path="/contest/:contestId/leaderboard"
          element={<ContestLeaderboardPage />}
        />
        <Route
          path="/contest/:contestId/start"
          element={<ContestStartPage />}
        />
        <Route path="/sheets" element={<SheetsPage />} />
        <Route path="/sheets/dp" element={<DPSheetPage />} />
        <Route path="/sheets/graph" element={<GraphSheetPage />} />
        <Route path="/sheets/tree" element={<TreeSheetPage />} />
        <Route path="/sheets/range-query" element={<RangeQuerySheetPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
