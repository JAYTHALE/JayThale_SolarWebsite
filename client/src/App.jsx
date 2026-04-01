import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Login from "./authentication/Login";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Layout from "./components/User/Layout";
import AdminProtected from "./share/AdminProtected";
import Home from "./Pages/Home";
import HeroBackground from "./Pages/HeroBackground";
import Services from "./Pages/Services";
import SolarGallery from "./Pages/SolarGallery";
import AboutCompany from "./Pages/AboutCompany";
import ServicesSection from "./Pages/ServicesSection";
import ScrollingMarquee from "./Pages/ScrollingMarquee";
import ContactPage from "./Pages/ContactPage";
import AboutUs from "./Pages/AboutUs";
import NotFoundPage from "./Pages/NotFoundPage";
import SolarSavingsCalculator from "./Pages/SolarSavingsCalculator";
import ErrorFallback from "./share/ErrorFallback";
import LocationSelector from "./Pages/LocationSelector";



import SolarIrradianceMap from "./Pages/SolarIrradianceMap";
import ErrorFallback from "./share/ErrorFallback";

//  Function for Error Boundaries
const withBoundary = (Component) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.reload()}
  >
    <Component />
  </ErrorBoundary>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={withBoundary(Home)} />
          {/* <Route path="/HeroBackground" element={withBoundary(HeroBackground)} /> */}
          <Route path="/HeroBackground" element={withBoundary(HeroBackground)} />
          <Route path="/Services" element={withBoundary(Services)} />
          <Route path="/SolarGallery" element={withBoundary(SolarGallery)} />
          <Route path="/AboutCompany" element={withBoundary(AboutCompany)} />
          <Route path="/ServicesSection" element={withBoundary(ServicesSection)} />
          <Route path="/ScrollingMarquee" element={withBoundary(ScrollingMarquee)} />
          <Route path="/ContactPage" element={withBoundary(ContactPage)} />
          <Route path="/AboutUs" element={withBoundary(AboutUs)} />
          {/* <Route path="/SolarIrradianceMap" element={withBoundary(SolarIrradianceMap)} /> */}
          <Route path="/LocationSelector" element={withBoundary(LocationSelector)} />
          <Route path="/SolarIrradianceMap" element={withBoundary(SolarIrradianceMap)} />
          <Route path="/SolarSavingsCalculator" element={withBoundary(SolarSavingsCalculator)} />
          <Route path="*" element={withBoundary(NotFoundPage)} />
        </Route>

        {/*Admin Routes */}
        <Route path="/admin" element={withBoundary(Login)} />
        <Route
          path="/admindashboard"
          element={withBoundary(() => <AdminProtected compo={AdminDashboard} />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
