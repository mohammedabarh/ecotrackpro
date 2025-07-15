import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  TrendingUp, 
  Droplets, 
  Zap, 
  Recycle, 
  Target,
  Calendar,
  Award,
  Plus,
  Activity,
  BarChart3,
  PieChart,
  Users,
  TreePine,
  Car,
  Home
} from "lucide-react";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const ecoMetrics = [
    {
      icon: Leaf,
      title: "Eco Score",
      value: 78,
      maxValue: 100,
      change: "+5",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Recycle,
      title: "Carbon Footprint",
      value: 1.2,
      unit: "tons CO2/month",
      change: "-8%",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "Energy Usage",
      value: 285,
      unit: "kWh/month",
      change: "-12%",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Droplets,
      title: "Water Usage",
      value: 3200,
      unit: "liters/month",
      change: "-15%",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      icon: Car,
      category: "Transportation",
      action: "Used electric scooter for commute",
      impact: "+15 eco points",
      date: "2 hours ago",
      co2Saved: "2.5 kg"
    },
    {
      id: 2,
      icon: Home,
      category: "Energy",
      action: "Switched to LED lighting",
      impact: "+20 eco points",
      date: "1 day ago",
      co2Saved: "5.2 kg"
    },
    {
      id: 3,
      icon: Recycle,
      category: "Waste",
      action: "Recycled electronics",
      impact: "+12 eco points",
      date: "2 days ago",
      co2Saved: "3.8 kg"
    },
    {
      id: 4,
      icon: TreePine,
      category: "Conservation",
      action: "Planted trees in community",
      impact: "+30 eco points",
      date: "3 days ago",
      co2Saved: "8.5 kg"
    },
    {
      id: 5,
      icon: Droplets,
      category: "Water",
      action: "Installed water-saving fixtures",
      impact: "+18 eco points",
      date: "5 days ago",
      co2Saved: "4.2 kg"
    }
  ];

  const weeklyGoals = [
    {
      name: "Reduce car usage",
      progress: 80,
      current: 4,
      target: 5,
      unit: "days",
      icon: Car
    },
    {
      name: "Recycle items",
      progress: 60,
      current: 12,
      target: 20,
      unit: "items",
      icon: Recycle
    },
    {
      name: "Save energy",
      progress: 90,
      current: 45,
      target: 50,
      unit: "kWh",
      icon: Zap
    },
    {
      name: "Water conservation",
      progress: 75,
      current: 150,
      target: 200,
      unit: "liters",
      icon: Droplets
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Eco Warrior",
      description: "Maintained 70+ eco score for 30 days",
      level: "Gold",
      earned: true
    },
    {
      icon: TreePine,
      title: "Tree Hugger",
      description: "Planted 10 trees",
      level: "Silver",
      earned: true
    },
    {
      icon: Recycle,
      title: "Recycling Champion",
      description: "Recycled 100+ items",
      level: "Bronze",
      earned: true
    },
    {
      icon: Zap,
      title: "Energy Saver",
      description: "Reduced energy usage by 25%",
      level: "Silver",
      earned: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Eco Dashboard</h1>
            <p className="text-muted-foreground">Track your environmental impact and progress</p>
          </div>
          <div className="flex items-center gap-3">
            <Tabs value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
            </Tabs>
            <Link to="/track">
              <Button variant="eco">
                <Plus className="h-4 w-4 mr-2" />
                Log Activity
              </Button>
            </Link>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecoMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="border-0 eco-shadow hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                      <Icon className={`h-5 w-5 ${metric.color}`} />
                    </div>
                    {metric.change && (
                      <Badge variant={metric.change.startsWith('+') ? "default" : "secondary"} className="text-xs">
                        {metric.change}
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold text-muted-foreground mb-2">
                    {metric.title}
                  </h3>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                      {metric.unit && <span className="text-sm font-normal text-muted-foreground ml-1">{metric.unit}</span>}
                    </div>
                    {metric.maxValue && (
                      <Progress value={(metric.value / metric.maxValue) * 100} className="h-2" />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="border-0 eco-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 text-primary mr-2" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>Your latest eco-friendly actions</CardDescription>
                </div>
                <Link to="/track">
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{activity.action}</span>
                          <Badge variant="secondary" className="text-xs">{activity.category}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.date} • {activity.co2Saved} CO2 saved</div>
                      </div>
                    </div>
                    <Badge className="text-xs">
                      {activity.impact}
                    </Badge>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Weekly Goals */}
          <Card className="border-0 eco-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 text-primary mr-2" />
                Weekly Goals
              </CardTitle>
              <CardDescription>Track your sustainable targets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {weeklyGoals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">{goal.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {goal.current} / {goal.target} {goal.unit}
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {goal.progress}% complete
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="border-0 eco-shadow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              Achievements
            </CardTitle>
            <CardDescription>Your eco milestones and badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-2 transition-smooth ${
                      achievement.earned 
                        ? 'border-primary/20 bg-primary/5' 
                        : 'border-dashed border-muted-foreground/30 bg-muted/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.earned ? 'bg-primary/10' : 'bg-muted'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          achievement.earned ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <Badge 
                        variant={achievement.earned ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {achievement.level}
                      </Badge>
                    </div>
                    <h4 className={`font-semibold text-sm mb-1 ${
                      achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-xs ${
                      achievement.earned ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;