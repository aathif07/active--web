import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus, ArrowRight, Upload } from "lucide-react";
import { toast } from "sonner";

const MemberRegister = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [profilePicture, setProfilePicture] = useState<string>("");
  
  // Step 1 fields
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  // Step 2 fields
  const [memberId, setMemberId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    toast.success("Registration successful!");
    navigate("/member/login");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[url('/assets/gradient-bg.png')] bg-cover bg-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left column - Title and progress (visible on all sizes but styled differently) */}
          <div className="w-full lg:w-auto">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <div className="mx-auto lg:mx-0 w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center mb-4 lg:mb-6">
                <UserPlus className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold mb-1">Member Registration</h2>
              <p className="text-muted-foreground mb-3 text-sm lg:text-base">Step {step} of 2</p>

              <div className="w-full max-w-md mx-auto lg:mx-0 bg-white/30 rounded-full h-2 mb-3">
                <div className={`h-2 rounded-full bg-blue-600`} style={{ width: step === 1 ? '45%' : '100%' }} />
              </div>

              <div className="flex gap-4 justify-center lg:justify-start text-sm lg:text-sm text-blue-600">
                <div className={`flex items-center gap-2 ${step === 1 ? 'font-semibold' : 'text-gray-500'}`}>
                  <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">•</span>
                  <span>Personal Info</span>
                </div>
                <div className={`flex items-center gap-2 ${step === 2 ? 'font-semibold' : 'text-gray-500'}`}>
                  <span className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">•</span>
                  <span>Location</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Card with form */}
          <div>
            <Card className="w-full shadow-strong border-0">
              <CardHeader className="space-y-2 text-left">
                <CardTitle className="text-2xl font-bold">Registration Form</CardTitle>
                <CardDescription className="text-sm text-gray-500">Please provide accurate information</CardDescription>
              </CardHeader>
              <CardContent>
                {step === 1 ? (
                  <form onSubmit={handleStep1Submit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Full Name*</Label>
                        <Input id="firstName" placeholder="Enter your full name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Phone Number*</Label>
                        <Input id="mobile" placeholder="+91 XXXXXX XXXXX" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth*</Label>
                        <Input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender*</Label>
                        <Select value={gender} onValueChange={setGender} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" className="bg-blue-600 text-white">Next</Button>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleStep2Submit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="state">State*</Label>
                      <Select value={memberId} onValueChange={setMemberId}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="state1">State 1</SelectItem>
                          <SelectItem value="state2">State 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District*</Label>
                      <Select value={memberId} onValueChange={setMemberId}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="district1">District 1</SelectItem>
                          <SelectItem value="district2">District 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="block">Block*</Label>
                      <Input id="block" placeholder="Block" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Complete Address*</Label>
                      <Input id="address" placeholder="Complete address" />
                    </div>

                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setStep(1)}>Previous</Button>
                      <Button type="submit" className="bg-blue-600 text-white">Submit</Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberRegister;
