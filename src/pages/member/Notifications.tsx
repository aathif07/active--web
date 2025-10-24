import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Calendar, FileText, User } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "event",
      title: "Upcoming Workshop",
      message: "JavaScript Fundamentals workshop is scheduled for tomorrow at 2 PM",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      type: "document",
      title: "Document Approved",
      message: "Your ADF form has been approved by the administrator",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      type: "profile",
      title: "Profile Update",
      message: "Please complete your profile to unlock all features",
      time: "2 days ago",
      unread: false
    },
    {
      id: 4,
      type: "event",
      title: "New Event",
      message: "New networking event added in your area",
      time: "3 days ago",
      unread: false
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "event": return <Calendar className="h-5 w-5 text-blue-500" />;
      case "document": return <FileText className="h-5 w-5 text-green-500" />;
      case "profile": return <User className="h-5 w-5 text-purple-500" />;
      default: return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Notifications</h1>
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={notification.unread ? "border-l-4 border-l-blue-500" : ""}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {notification.unread && (
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;