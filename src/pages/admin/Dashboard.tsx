import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, Users, CheckCircle, XCircle, 
  Clock, Home, List, User 
} from "lucide-react";

const AdminDashboard = () => {
  const recentApplications = [
    { id: "VJS2024001", name: "John Doe", status: "approved", date: "2024-01-15" },
    { id: "VJS2024002", name: "Jane Smith", status: "pending", date: "2024-01-14" },
    { id: "VJS2024003", name: "Robert Brown", status: "approved", date: "2024-01-13" },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-card shadow-soft p-4 mb-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarFallback className="bg-secondary text-secondary-foreground">
                BA
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">Hello, Block Admin</h1>
              <p className="text-sm text-muted-foreground">Block: North Zone</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total ADF</p>
                  <p className="text-3xl font-bold">248</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Approved</p>
                  <p className="text-3xl font-bold text-success">187</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                  <p className="text-3xl font-bold text-destructive">23</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold text-amber-600">38</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent ADF Approvals</CardTitle>
                <CardDescription>Latest application submissions</CardDescription>
              </div>
              <Link to="/admin/applications">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentApplications.map((app) => (
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
                    <Badge variant={app.status === "approved" ? "default" : "outline"} className={app.status === "approved" ? "bg-success" : ""}>
                      {app.status === "approved" ? "Approved" : "Pending"}
                    </Badge>
                    <Link to={`/admin/application/${app.id}`}>
                      <Button size="sm" variant="outline">View</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-strong">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <Link to="/admin/block/dashboard" className="flex flex-col items-center gap-1 text-primary">
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </Link>
            <Link to="/admin/applications" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <List className="w-6 h-6" />
              <span className="text-xs">List</span>
            </Link>
            <Link to="/admin/profile" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <User className="w-6 h-6" />
              <span className="text-xs">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
