import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";

const ApplicationView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [status, setStatus] = useState("pending");

  const handleApprove = () => {
    setStatus("approved");
    toast.success("Application approved successfully");
  };

  const handleReject = () => {
    setStatus("rejected");
    toast.error("Application rejected");
  };

  return (
    <div className="min-h-screen p-4 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold">User Details</h1>
        </div>

        {/* Action Card */}
        <Card className="shadow-medium border-0 gradient-card">
          <CardContent className="pt-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">ID: {id || "VJS2024001"}</p>
              </div>
              <Badge variant="outline" className={
                status === "approved" ? "bg-success text-success-foreground" : 
                status === "rejected" ? "bg-destructive text-destructive-foreground" : 
                "bg-amber-500 text-white"
              }>
                {status === "approved" ? "Approved" : status === "rejected" ? "Rejected" : "Holding"}
              </Badge>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleApprove} 
                className="flex-1 bg-success hover:bg-success/90"
                disabled={status === "approved"}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Approve
              </Button>
              <Button 
                onClick={handleReject} 
                variant="destructive" 
                className="flex-1"
                disabled={status === "rejected"}
              >
                <XCircle className="w-4 h-4 mr-2" />
                Reject
              </Button>
            </div>

            <Button variant="link" onClick={() => navigate(-1)} className="w-full">
              Back To List
            </Button>
          </CardContent>
        </Card>

        {/* Application Details - Accordion */}
        <Card className="shadow-medium border-0">
          <CardContent className="pt-6">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="personal">
                <AccordionTrigger className="text-lg font-semibold">
                  Personal & Demographic Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Full Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Date of Birth</p>
                        <p className="font-medium">15-Jan-1990</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Father's Name</p>
                        <p className="font-medium">James Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Mother's Name</p>
                        <p className="font-medium">Jane Doe</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Gender</p>
                        <p className="font-medium">Male</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Blood Group</p>
                        <p className="font-medium">O+</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Contact</p>
                        <p className="font-medium">+91 98765 43210</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">john.doe@email.com</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="address">
                <AccordionTrigger className="text-lg font-semibold">
                  Communication Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Permanent Address</p>
                      <p className="font-medium">123 Main Street, Block A</p>
                      <p className="font-medium">New Delhi, Delhi - 110001</p>
                      <p className="font-medium">India</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Correspondence Address</p>
                      <p className="font-medium text-primary">Same as Permanent Address</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="education">
                <AccordionTrigger className="text-lg font-semibold">
                  Education Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-lg bg-muted/50">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Qualification</p>
                          <p className="font-medium">Bachelor of Technology</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">University</p>
                          <p className="font-medium">Delhi University</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Year of Passing</p>
                          <p className="font-medium">2012</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Percentage</p>
                          <p className="font-medium">75%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="professional">
                <AccordionTrigger className="text-lg font-semibold">
                  Professional Details
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Current Designation</p>
                        <p className="font-medium">Senior Engineer</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Current Organisation</p>
                        <p className="font-medium">Tech Corp India</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Experience</p>
                        <p className="font-medium">12 years</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Current CTC</p>
                        <p className="font-medium">₹15,00,000</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents">
                <AccordionTrigger className="text-lg font-semibold">
                  Documents Upload
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Photo</p>
                        <p className="font-medium text-primary">✓ Uploaded</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Signature</p>
                        <p className="font-medium text-primary">✓ Uploaded</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">Aadhar Card</p>
                        <p className="font-medium text-primary">✓ Uploaded</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/50">
                        <p className="text-sm text-muted-foreground">PAN Card</p>
                        <p className="font-medium text-primary">✓ Uploaded</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationView;
