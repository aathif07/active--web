import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";

const MobileDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header with menu button */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" className="p-2">
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Avatar className="w-10 h-10">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback className="bg-primary text-primary-foreground">SD</AvatarFallback>
        </Avatar>
      </div>

      {/* Welcome section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Welcome back, Sarah</h2>
        <p className="text-muted-foreground">TechCorp Solution</p>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <input
          aria-label="Search by location"
          placeholder="Search by location..."
          className="w-full border border-gray-200 rounded-full px-4 py-2 shadow-sm bg-white"
        />
      </div>

      {/* Profile completion card */}
      <Card className="shadow-medium border-0 w-full mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Complete Your Profile</h3>
              <p className="text-sm text-blue-600 mt-1">25% completed</p>
              <p className="text-sm text-muted-foreground mt-2">Unlock all features by completing your profile.</p>

              <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                <div className="h-2 rounded-full bg-blue-600" style={{ width: '25%' }} />
              </div>

              <div className="mt-4">
                <Button className="bg-blue-600 text-white w-full">Complete Profile</Button>
              </div>
            </div>

            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
              <img src="/assets/placeholder.svg" alt="illustration" className="w-20 h-20" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <span className="text-blue-600 font-bold">ADF</span>
          </div>
          <h4 className="font-medium">ADF Form</h4>
        </Card>
        <Card className="p-4 text-center">
          <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
            <span className="text-green-600 font-bold">CERT</span>
          </div>
          <h4 className="font-medium">Certificate</h4>
        </Card>
      </div>
    </div>
  );
};

export default MobileDashboard;