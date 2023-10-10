import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "pages/ListingPage";
import ListingDetailsPage from "pages/ListingDetailsPage";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ListingPage />} />
        <Route path="/details" element={<ListingDetailsPage />} />
        <Route path="*" element={<ListingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
