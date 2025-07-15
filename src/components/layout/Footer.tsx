import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Mail, 
  MessageSquare, 
  Shield,
  Settings,
  User,
  Github,
  Twitter,
  Facebook,
  Heart,
  Trophy,
  Target,
  TrendingUp
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Dashboard", href: "/dashboard", icon: TrendingUp },
    { name: "Track Activity", href: "/track", icon: Target },
    { name: "Community", href: "/community", icon: MessageSquare },
    { name: "Guidelines", href: "/guidelines", icon: Shield },
  ];

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Mock user data - in real app this would come from context/state
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: "",
    ecoScore: 78,
    level: "Green Warrior",
    joinDate: "March 2024"
  };

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EcoTrack</span>
            </div>
            
            {/* User Profile */}
            <div className="p-4 bg-muted/30 rounded-lg space-y-3">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm">{user.name}</div>
                  <div className="text-xs text-muted-foreground">{user.email}</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  <Trophy className="h-3 w-3 mr-1" />
                  {user.level}
                </Badge>
                <div className="text-sm font-semibold text-primary">
                  Score: {user.ecoScore}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="h-8 px-3">
                    <Settings className="h-3 w-3 mr-1" />
                    Profile
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" size="sm" className="h-8 px-3">
                    Sign Out
                  </Button>
                </Link>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Tracking environmental impact since {user.joinDate}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@ecotrack.com</span>
              </div>
              
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      to={social.href}
                      className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                    >
                      <Icon className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="p-3 bg-primary/10 rounded-lg">
              <div className="flex items-center space-x-2 text-primary text-sm">
                <Heart className="h-4 w-4" />
                <span>Made with love for our planet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 EcoTrack. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/guidelines" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Environmental Guidelines
              </Link>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Community
              </Link>
              <Badge variant="outline" className="text-xs">
                <Leaf className="h-3 w-3 mr-1" />
                Carbon Neutral
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;