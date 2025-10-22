import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = (provider: string) => {
    // Implement social login logic here
    console.log(`Logging in with ${provider}`);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email login logic here
    console.log("Logging in with email", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white/95 backdrop-blur shadow-xl rounded-2xl">
        <div className="text-center space-y-2">
          <div className="inline-block p-2 rounded-full bg-blue-100 mb-2">
            <img
              src="/placeholder.svg"
              alt="Logo"
              className="w-12 h-12"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">ACTIV Portal</h1>
          <p className="text-gray-500">Sign in to your account or create a new one</p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="w-full hover:bg-transparent"
              onClick={() => handleSocialLogin("Google")}
            >
              <FaGoogle className="w-5 h-5 text-red-500" />
            </Button>
            <Button
              variant="outline"
              className="w-full hover:bg-transparent"
              onClick={() => handleSocialLogin("Facebook")}
            >
              <FaFacebook className="w-5 h-5 text-blue-600" />
            </Button>
            <Button
              variant="outline"
              className="w-full hover:bg-transparent"
              onClick={() => handleSocialLogin("LinkedIn")}
            >
              <FaLinkedin className="w-5 h-5 text-blue-700" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forget Password?
              </a>
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white">
              Sign In
            </Button>
          </form>
        </div>

        <div className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:text-blue-500">
            Register as member
          </a>
        </div>
      </Card>
    </div>
  );
}