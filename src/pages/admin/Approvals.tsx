import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle, XCircle, Clock, Menu } from "lucide-react";
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminMobileMenu from "@/components/AdminMobileMenu";
import ApprovalCard from "@/components/ui/approval-card";
import { Toaster } from "@/components/ui/toaster";

// Define TypeScript interfaces
interface Application {
  id: string;
  name: string;
  email: string;
  role: string;
  gender: string;
  sector: string;
  phone: string;
  status: "approved" | "pending" | "rejected";
  date: string;
}

const Approvals = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Updated applications data with more detailed information
  const [applications, setApplications] = useState<Application[]>([
    { 
      id: "VJS2024001", 
      name: "John Doe", 
      email: "john.doe@example.com",
      role: "Volunteer",
      gender: "Male",
      sector: "Education",
      phone: "+1 (555) 123-4567",
      status: "approved", 
      date: "2024-01-15" 
    },
    { 
      id: "VJS2024002", 
      name: "Jane Smith", 
      email: "jane.smith@example.com",
      role: "Coordinator",
      gender: "Female",
      sector: "Healthcare",
      phone: "+1 (555) 987-6543",
      status: "pending", 
      date: "2024-01-14" 
    },
    { 
      id: "VJS2024003", 
      name: "Robert Brown", 
      email: "robert.brown@example.com",
      role: "Volunteer",
      gender: "Male",
      sector: "Environment",
      phone: "+1 (555) 456-7890",
      status: "rejected", 
      date: "2024-01-13" 
    },
    { 
      id: "VJS2024004", 
      name: "Emily Davis", 
      email: "emily.davis@example.com",
      role: "Manager",
      gender: "Female",
      sector: "Social Services",
      phone: "+1 (555) 234-5678",
      status: "pending", 
      date: "2024-01-12" 
    },
    { 
      id: "VJS2024005", 
      name: "Michael Wilson", 
      email: "michael.wilson@example.com",
      role: "Volunteer",
      gender: "Male",
      sector: "Education",
      phone: "+1 (555) 876-5432",
      status: "approved", 
      date: "2024-01-11" 
    },
  ]);

  // Handle approval action
  const handleApprove = (id: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: "approved" } : app
      )
    );
  };

  // Handle rejection action
  const handleReject = (id: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: "rejected" } : app
      )
    );
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:block w-16 lg:w-56">
        <AdminSidebar />
      </div>

      {/* Mobile menu */}
      <AdminMobileMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header with menu button */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white border-b">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(true)}
            className="p-2"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">Approvals</h1>
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-primary text-primary-foreground">AU</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-1 p-4 md:p-6 overflow-auto bg-background">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Approvals</h1>
            
            {/* Display pending applications with ApprovalCard */}
            <div className="space-y-6">
              {applications
                .filter(app => app.status === "pending")
                .map(app => (
                  <ApprovalCard 
                    key={app.id} 
                    member={app} 
                    onApprove={handleApprove} 
                    onReject={handleReject} 
                  />
                ))
              }
            </div>
            
            {/* Display approved/rejected applications in a list */}
            {applications.some(app => app.status !== "pending") && (
              <Card className="shadow-medium border-0 mt-6">
                <CardHeader>
                  <CardTitle>Application History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications
                      .filter(app => app.status !== "pending")
                      .map((app) => (
                        <div key={app.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback className="bg-primary text-primary-foreground">
                                {app.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{app.name}</p>
                              <p className="text-sm text-muted-foreground">{app.id}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant={app.status === "approved" ? "default" : app.status === "rejected" ? "destructive" : "outline"}
                              className={app.status === "approved" ? "bg-success" : app.status === "rejected" ? "bg-destructive" : ""}
                            >
                              {app.status === "approved" && <CheckCircle className="w-4 h-4 mr-1" />}
                              {app.status === "rejected" && <XCircle className="w-4 h-4 mr-1" />}
                              {app.status === "pending" && <Clock className="w-4 h-4 mr-1" />}
                              {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                            </Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        {/* Add Toaster for notifications */}
        <Toaster />
      </div>
    </div>
  );
};

export default Approvals;