import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./components/LoginPage";
import MemberRegister from "./pages/member/Register";
import MemberDashboard from "./pages/member/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import ApplicationView from "./pages/admin/ApplicationView";
import SuperAdminGenerate from "./pages/admin/SuperAdminGenerate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<MemberRegister />} />

          {/* Member Routes */}
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/application/:id" element={<ApplicationView />} />
          
          {/* Super Admin Routes */}
          <Route path="/admin/super/generate" element={<SuperAdminGenerate />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
