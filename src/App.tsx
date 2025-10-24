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
import SidebarPage from "./pages/member/SidebarPage";
import Explore from "./pages/member/Explore";
import Notifications from "./pages/member/Notifications";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSidebarPage from "./pages/admin/SidebarPage";
import Approvals from "./pages/admin/Approvals";
import Members from "./pages/admin/Members";
import Settings from "./pages/admin/Settings";
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
          <Route path="/member/sidebar" element={<SidebarPage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/sidebar" element={<AdminSidebarPage />} />
          <Route path="/admin/approvals" element={<Approvals />} />
          <Route path="/admin/members" element={<Members />} />
          <Route path="/admin/settings" element={<Settings />} />
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