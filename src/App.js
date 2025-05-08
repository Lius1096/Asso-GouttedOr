import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Navbar from "./components/SearchBar";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import ArticlePage from "./pages/ArticlePage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRegisterForm from "./components/AdminRegisterForm";
import  Login  from "./components/Login";
import Register from "./components/Register";
import AdminHeader from "./components/AdminHeader";
import ProjectIdeaForm from "./components/ProjectIdeaForm";
import ArticleCard from "./components/ArticleCard";

const App = () => {
  return (
    <>
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/articleform" element={<ArticleCard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegisterForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/header" element={<AdminHeader/>} />
        <Route path="/projectidea" element={<ProjectIdeaForm/>} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
