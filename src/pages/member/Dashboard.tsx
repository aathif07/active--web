import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, User, Award, HelpCircle, 
  Calendar, LogOut, CheckCircle, Clock 
} from "lucide-react";

const MemberDashboard = () => {
  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card className="shadow-medium gradient-card border-0">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src="" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Welcome, John Doe</h1>
                <p className="text-muted-foreground">Member ID: VJS2024001</p>
              </div>
              <Button variant="outline" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* ADF Status Card */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Applicant Details Form (ADF) Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Status</p>
                <Badge variant="outline" className="mt-1">
                  <Clock className="w-3 h-3 mr-1" />
                  Pending Review
                </Badge>
              </div>
              <Link to="/member/adf">
                <Button>
                  {/* TODO: Change to "Continue" if draft exists */}
                  Start ADF Form
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-4 border-t">
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <CheckCircle className="w-5 h-5 text-success mb-1" />
                <span className="text-xs text-center">Personal</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-muted-foreground mb-1" />
                <span className="text-xs text-center">Address</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-muted-foreground mb-1" />
                <span className="text-xs text-center">Professional</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-muted-foreground mb-1" />
                <span className="text-xs text-center">Documents</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/member/adf">
            <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer border-0 h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">ADF Form</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/member/profile">
            <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer border-0 h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold">My Profile</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/member/certificate">
            <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer border-0 h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Certificate</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/member/help">
            <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer border-0 h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                  <HelpCircle className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold">Help</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/member/events">
            <Card className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer border-0 h-full md:col-span-2">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Upcoming Events</h3>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
