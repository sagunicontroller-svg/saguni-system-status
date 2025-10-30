import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock authentication - in real app, this would call /api/admin/login
      if (username === "admin" && password === "admin") {
        toast.success("Login successful!");
        navigate("/admin/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-secondary glow-red">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-black text-foreground text-glow-red">
            SAGUNI
          </h1>
          <p className="text-muted-foreground">Admin Portal</p>
        </div>

        {/* Login Form */}
        <Card className="p-8 bg-card border-border space-y-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-foreground font-semibold">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="bg-input border-border focus:border-primary focus:glow-red transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-semibold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="bg-input border-border focus:border-primary focus:glow-red transition-all"
              />
            </div>

            <Button
              type="submit"
              variant="glow"
              size="lg"
              disabled={isLoading}
              className="w-full font-bold uppercase tracking-wider"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Home
            </button>
          </div>
        </Card>

        {/* Demo Credentials */}
        <div className="text-center text-sm text-muted-foreground space-y-1">
          <p className="font-semibold">Demo Credentials:</p>
          <p>Username: admin</p>
          <p>Password: admin</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
