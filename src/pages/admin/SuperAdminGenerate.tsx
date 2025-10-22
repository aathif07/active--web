import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserPlus, Shield } from "lucide-react";
import { toast } from "sonner";

const SuperAdminGenerate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`New ${role} account created successfully!`);
    // Reset form
    setUsername("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Shield className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Super Admin Panel</h1>
            <p className="text-muted-foreground">Create new administrator accounts</p>
          </div>
        </div>

        <Card className="shadow-strong gradient-card border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-primary" />
              Generate Admin User
            </CardTitle>
            <CardDescription>
              Create new accounts for Block, District, or State administrators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username / ID *</Label>
                <Input
                  id="username"
                  placeholder="Enter admin username or ID"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  This will be used as the login ID for the new administrator
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a secure password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Use a strong password with at least 8 characters
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Designation / Role *</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select administrator role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="state">State Admin</SelectItem>
                    <SelectItem value="district">District Admin</SelectItem>
                    <SelectItem value="block">Block Admin</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Choose the appropriate administrative level
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <UserPlus className="w-4 h-4 mr-2" />
                Generate User
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recent Admins */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="text-lg">Recently Created Admins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { username: "block_admin_001", role: "Block Admin", date: "2024-01-15" },
                { username: "district_admin_002", role: "District Admin", date: "2024-01-14" },
                { username: "state_admin_001", role: "State Admin", date: "2024-01-13" },
              ].map((admin, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="font-medium">{admin.username}</p>
                    <p className="text-sm text-muted-foreground">{admin.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{admin.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminGenerate;
