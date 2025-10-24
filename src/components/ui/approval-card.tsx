import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Mail, Phone, User, VenetianMask } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Define TypeScript interfaces
interface MemberDetails {
  id: string;
  name: string;
  email: string;
  role: string;
  gender: string;
  sector: string;
  phone: string;
}

interface ApprovalCardProps {
  member: MemberDetails;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

const ApprovalCard = ({ member, onApprove, onReject }: ApprovalCardProps) => {
  const { toast } = useToast();

  const handleApprove = () => {
    onApprove(member.id);
    toast({
      title: "Member Approved",
      description: `${member.name} has been approved successfully.`,
    });
  };

  const handleReject = () => {
    onReject(member.id);
    toast({
      title: "Member Rejected",
      description: `${member.name} has been rejected.`,
      variant: "destructive",
    });
  };

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="w-16 h-16">
          <AvatarFallback className="bg-primary text-primary-foreground text-xl">
            {member.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{member.email}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium">Role:</span>
          <Badge variant="secondary">{member.role}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <VenetianMask className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium">Gender:</span>
          <span>{member.gender}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="font-medium">Sector:</span>
          <Badge variant="outline">{member.sector}</Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium">Phone:</span>
          <span>{member.phone}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="destructive" 
          onClick={handleReject}
          className="flex items-center gap-2"
        >
          <XCircle className="w-4 h-4" />
          Reject
        </Button>
        <Button 
          variant="default" 
          onClick={handleApprove}
          className="flex items-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Approve
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApprovalCard;