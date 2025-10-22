import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Member Routes
import MemberLogin from "./pages/member/Login";
import MemberRegister from "./pages/member/Register";
import MemberDashboard from "./pages/member/Dashboard";

// Admin Routes
import BlockLogin from "./pages/admin/BlockLogin";
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
          <Route path="/" element={<Index />} />
          
          {/* Member Routes */}
          <Route path="/member/login" element={<MemberLogin />} />
          <Route path="/member/register" element={<MemberRegister />} />
          <Route path="/member/dashboard" element={<MemberDashboard />} />
          
          {/* Admin Routes */}
          <Route path="/admin/block/login" element={<BlockLogin />} />
          <Route path="/admin/block/dashboard" element={<AdminDashboard />} />
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
