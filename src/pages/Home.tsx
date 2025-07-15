import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  TrendingUp, 
  Droplets, 
  Zap, 
  Recycle, 
  Target,
  Users,
  Award,
  BarChart3,
  Calendar,
  ChevronRight,
  Play
} from "lucide-react";

const Home = () => {
  const ecoStats = [
    {
      icon: Leaf,
      title: "Eco Score",
      value: "78",
      subtitle: "Great progress!",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Recycle,
      title: "Carbon Saved",
      value: "156",
      unit: "kg CO2 this month",
      change: "+12% vs last month",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Energy Saved",
      value: "342",
      unit: "kWh this month",
      change: "+8% vs last month",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Droplets,
      title: "Water Saved",
      value: "1250",
      unit: "liters this month",
      change: "+15% vs last month",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    }
  ];

  const recentActivities = [
    {
      icon: Users,
      action: "Used public transport",
      time: "Today",
      points: "+12 eco points"
    },
    {
      icon: Recycle,
      action: "Recycled plastic bottles",
      time: "Yesterday",
      points: "+8 eco points"
    },
    {
      icon: Zap,
      action: "Used renewable energy",
      time: "2 days ago",
      points: "+15 eco points"
    },
    {
      icon: Droplets,
      action: "Water conservation",
      time: "3 days ago",
      points: "+10 eco points"
    }
  ];

  const weeklyGoals = [
    {
      name: "Reduce car usage",
      progress: 80,
      current: 4,
      target: 5,
      unit: "days"
    },
    {
      name: "Recycle items",
      progress: 60,
      current: 12,
      target: 20,
      unit: "items"
    },
    {
      name: "Save energy",
      progress: 90,
      current: 45,
      target: 50,
      unit: "kWh"
    }
  ];

  const communityStats = [
    {
      value: "50,000+",
      label: "Active eco warriors"
    },
    {
      value: "2.5M kg",
      label: "CO2 prevented collectively"
    },
    {
      value: "100+",
      label: "Environmental challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              🌱 Join the Green Movement
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Track Your{" "}
              <span className="text-primary">Environmental Impact</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of eco-conscious individuals making a real difference. 
              Monitor your carbon footprint, set sustainable goals, and build a greener future.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="eco" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Start Tracking Now
              </Button>
            </Link>
            <Link to="/guidelines">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Your Eco Dashboard
            </h2>
            <p className="text-muted-foreground text-lg">
              Track your environmental impact with beautiful visualizations
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ecoStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-smooth border-0 eco-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                        <Icon className={`h-5 w-5 ${stat.color}`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change && stat.change}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-muted-foreground mb-2">
                      {stat.title}
                    </h3>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      {stat.unit && (
                        <div className="text-sm text-muted-foreground">
                          {stat.unit}
                        </div>
                      )}
                      {stat.subtitle && (
                        <div className="text-sm text-primary font-medium">
                          {stat.subtitle}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Activities and Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <Card className="border-0 eco-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Recent Activities</h3>
                </div>
                <p className="text-muted-foreground mb-4">Your latest eco-friendly actions</p>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">{activity.action}</div>
                            <div className="text-xs text-muted-foreground">{activity.time}</div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {activity.points}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goals */}
            <Card className="border-0 eco-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-semibold">Weekly Goals</h3>
                </div>
                <p className="text-muted-foreground mb-4">Track your sustainable targets</p>
                
                <div className="space-y-6">
                  {weeklyGoals.map((goal, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{goal.name}</span>
                        <span className="text-muted-foreground">
                          {goal.current} {goal.unit} / {goal.target} {goal.unit}
                        </span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Eco Community
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Connect with like-minded individuals and make a bigger impact together
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your sustainable journey today and see the impact you can make on our planet.
          </p>
          <Link to="/auth">
            <Button variant="eco" size="lg" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" />
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;