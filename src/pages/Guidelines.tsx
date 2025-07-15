import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Leaf, 
  TreePine, 
  Droplets, 
  Zap, 
  Recycle, 
  Car,
  Home,
  ShoppingBag,
  Utensils,
  Shirt,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Users,
  Award,
  BookOpen
} from "lucide-react";

const Guidelines = () => {
  const [activeCategory, setActiveCategory] = useState("overview");

  const categories = [
    { id: "overview", label: "Overview", icon: BookOpen },
    { id: "energy", label: "Energy", icon: Zap },
    { id: "water", label: "Water", icon: Droplets },
    { id: "transportation", label: "Transport", icon: Car },
    { id: "waste", label: "Waste", icon: Recycle },
    { id: "consumption", label: "Consumption", icon: ShoppingBag },
    { id: "food", label: "Food", icon: Utensils },
    { id: "community", label: "Community", icon: Users }
  ];

  const impactStats = [
    {
      category: "Energy Savings",
      percentage: 25,
      impact: "Reduce CO2 by 1.2 tons/year",
      color: "text-yellow-600"
    },
    {
      category: "Water Conservation",
      percentage: 30,
      impact: "Save 15,000 liters/year",
      color: "text-blue-600"
    },
    {
      category: "Waste Reduction",
      percentage: 40,
      impact: "Prevent 500kg waste/year",
      color: "text-green-600"
    },
    {
      category: "Transport",
      percentage: 35,
      impact: "Reduce emissions by 0.8 tons/year",
      color: "text-purple-600"
    }
  ];

  const energyGuidelines = [
    {
      title: "Switch to LED Lighting",
      difficulty: "Easy",
      impact: "High",
      description: "Replace incandescent bulbs with LED bulbs to reduce energy consumption by up to 80%.",
      tips: [
        "Start with most-used rooms first",
        "Look for ENERGY STAR certified LEDs",
        "Consider smart bulbs for automation",
        "Properly dispose of old bulbs"
      ],
      co2Reduction: "200kg/year"
    },
    {
      title: "Unplug Electronics When Not in Use",
      difficulty: "Easy",
      impact: "Medium",
      description: "Phantom loads can account for 5-10% of your electricity usage.",
      tips: [
        "Use power strips for easy unplugging",
        "Identify biggest energy vampires",
        "Set reminders until it becomes habit",
        "Consider smart power strips"
      ],
      co2Reduction: "150kg/year"
    },
    {
      title: "Install a Programmable Thermostat",
      difficulty: "Medium",
      impact: "High",
      description: "Automatically adjust temperature when you're away or sleeping.",
      tips: [
        "Program for your schedule",
        "Adjust gradually for comfort",
        "Use eco-mode settings",
        "Regular maintenance needed"
      ],
      co2Reduction: "500kg/year"
    },
    {
      title: "Upgrade to Energy-Efficient Appliances",
      difficulty: "Hard",
      impact: "High",
      description: "Modern appliances use significantly less energy than older models.",
      tips: [
        "Look for ENERGY STAR ratings",
        "Compare annual energy costs",
        "Consider size vs. efficiency",
        "Proper installation matters"
      ],
      co2Reduction: "800kg/year"
    }
  ];

  const waterGuidelines = [
    {
      title: "Fix Leaks Promptly",
      difficulty: "Easy",
      impact: "High",
      description: "A single dripping faucet can waste over 3,000 gallons per year.",
      tips: [
        "Check faucets, toilets, and pipes regularly",
        "Look for water stains or damage",
        "Learn basic repair skills",
        "Call professionals for major leaks"
      ],
      waterSaved: "3,000L/year"
    },
    {
      title: "Install Low-Flow Fixtures",
      difficulty: "Medium",
      impact: "High",
      description: "Low-flow showerheads and faucets can reduce water usage by 30-50%.",
      tips: [
        "Choose WaterSense labeled products",
        "Consider adjustable flow rates",
        "Professional installation recommended",
        "Test water pressure after installation"
      ],
      waterSaved: "5,000L/year"
    },
    {
      title: "Collect Rainwater",
      difficulty: "Medium",
      impact: "Medium",
      description: "Use rainwater for gardening and outdoor cleaning.",
      tips: [
        "Start with simple barrel collection",
        "Ensure proper filtration",
        "Check local regulations",
        "Use within a few days"
      ],
      waterSaved: "2,000L/year"
    },
    {
      title: "Take Shorter Showers",
      difficulty: "Easy",
      impact: "Medium",
      description: "Reducing shower time by just 2 minutes can save 150 gallons per month.",
      tips: [
        "Use a timer or music playlist",
        "Turn off water while soaping",
        "Install a low-flow showerhead",
        "Make it a family challenge"
      ],
      waterSaved: "1,800L/year"
    }
  ];

  const transportationGuidelines = [
    {
      title: "Use Public Transportation",
      difficulty: "Easy",
      impact: "High",
      description: "Public transit produces 95% fewer CO2 emissions per mile than driving alone.",
      tips: [
        "Plan routes and schedules",
        "Get monthly/annual passes",
        "Combine with walking/cycling",
        "Use transit apps for real-time info"
      ],
      co2Reduction: "2,400kg/year"
    },
    {
      title: "Bike or Walk for Short Trips",
      difficulty: "Easy",
      impact: "High",
      description: "40% of car trips are less than 2 miles - perfect for cycling or walking.",
      tips: [
        "Start with familiar routes",
        "Invest in proper safety gear",
        "Check weather conditions",
        "Plan for secure bike parking"
      ],
      co2Reduction: "1,000kg/year"
    },
    {
      title: "Carpool or Rideshare",
      difficulty: "Easy",
      impact: "Medium",
      description: "Sharing rides can reduce individual transportation emissions by 50%.",
      tips: [
        "Coordinate with coworkers",
        "Use rideshare apps",
        "Start neighborhood groups",
        "Take turns driving"
      ],
      co2Reduction: "1,200kg/year"
    },
    {
      title: "Drive Efficiently",
      difficulty: "Easy",
      impact: "Medium",
      description: "Smooth driving and proper maintenance can improve fuel efficiency by 25%.",
      tips: [
        "Avoid rapid acceleration/braking",
        "Maintain steady speeds",
        "Keep tires properly inflated",
        "Remove excess weight"
      ],
      co2Reduction: "600kg/year"
    }
  ];

  const wasteGuidelines = [
    {
      title: "Reduce Single-Use Plastics",
      difficulty: "Easy",
      impact: "High",
      description: "Eliminate disposable items like plastic bags, water bottles, and straws.",
      tips: [
        "Carry reusable bags and bottles",
        "Use glass or metal containers",
        "Say no to plastic utensils",
        "Choose products with less packaging"
      ],
      wasteReduced: "50kg/year"
    },
    {
      title: "Compost Organic Waste",
      difficulty: "Medium",
      impact: "High",
      description: "Food waste in landfills produces methane, a potent greenhouse gas.",
      tips: [
        "Start with fruit and vegetable scraps",
        "Learn what can/cannot be composted",
        "Maintain proper moisture and air",
        "Use finished compost in garden"
      ],
      wasteReduced: "200kg/year"
    },
    {
      title: "Recycle Properly",
      difficulty: "Easy",
      impact: "Medium",
      description: "Proper recycling ensures materials are actually processed and reused.",
      tips: [
        "Learn local recycling rules",
        "Clean containers before recycling",
        "Separate materials correctly",
        "Find special recycling for electronics"
      ],
      wasteReduced: "100kg/year"
    },
    {
      title: "Repair Instead of Replace",
      difficulty: "Medium",
      impact: "Medium",
      description: "Extending product lifespans reduces waste and saves money.",
      tips: [
        "Learn basic repair skills",
        "Find local repair services",
        "Buy quality items that last",
        "Join repair cafes or groups"
      ],
      wasteReduced: "75kg/year"
    }
  ];

  const renderGuidelineCard = (guideline: any, metric: string) => (
    <Card key={guideline.title} className="border-0 eco-shadow hover:shadow-lg transition-smooth">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{guideline.title}</CardTitle>
            <CardDescription>{guideline.description}</CardDescription>
          </div>
          <div className="flex gap-2">
            <Badge variant={guideline.difficulty === 'Easy' ? 'default' : guideline.difficulty === 'Medium' ? 'secondary' : 'outline'}>
              {guideline.difficulty}
            </Badge>
            <Badge variant={guideline.impact === 'High' ? 'default' : 'secondary'}>
              {guideline.impact} Impact
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-primary/5 p-4 rounded-lg">
          <div className="font-semibold text-primary mb-2">Annual Impact:</div>
          <div className="text-sm">
            {guideline.co2Reduction && `🌱 ${guideline.co2Reduction} CO₂ reduction`}
            {guideline.waterSaved && `💧 ${guideline.waterSaved} water saved`}
            {guideline.wasteReduced && `♻️ ${guideline.wasteReduced} waste reduced`}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2 flex items-center">
            <Lightbulb className="h-4 w-4 mr-2 text-primary" />
            Tips to Get Started:
          </h4>
          <ul className="space-y-1">
            {guideline.tips.map((tip: string, index: number) => (
              <li key={index} className="text-sm flex items-start">
                <CheckCircle className="h-3 w-3 mr-2 mt-1 text-green-600 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
        
        <Link to="/track">
          <Button variant="outline" className="w-full">
            <Target className="h-4 w-4 mr-2" />
            Set as Goal
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Environmental Guidelines</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Practical tips and actionable steps to reduce your environmental impact. 
            Start with small changes that make a big difference.
          </p>
        </div>

        {/* Impact Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="border-0 eco-shadow">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">{stat.category}</h3>
                    <span className={`text-2xl font-bold ${stat.color}`}>
                      {stat.percentage}%
                    </span>
                  </div>
                  <Progress value={stat.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">{stat.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidelines Navigation */}
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-4 lg:grid-cols-8 w-full">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="h-6 w-6 text-primary mr-3" />
                  Start Your Eco Journey
                </CardTitle>
                <CardDescription className="text-base">
                  Every small action contributes to a larger impact. Choose the areas where you'd like to make a difference.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.slice(1).map((category) => {
                  const Icon = category.icon;
                  return (
                    <div 
                      key={category.id}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 transition-smooth cursor-pointer"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold">{category.label}</h3>
                        <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.id === 'energy' && 'Reduce your energy consumption with simple changes'}
                        {category.id === 'water' && 'Conserve water with efficient practices and fixtures'}
                        {category.id === 'transportation' && 'Lower emissions through smart transportation choices'}
                        {category.id === 'waste' && 'Minimize waste through the 3 Rs: Reduce, Reuse, Recycle'}
                        {category.id === 'consumption' && 'Make conscious purchasing decisions'}
                        {category.id === 'food' && 'Adopt sustainable eating habits'}
                        {category.id === 'community' && 'Join collective environmental efforts'}
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="energy" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {energyGuidelines.map((guideline) => renderGuidelineCard(guideline, 'co2'))}
            </div>
          </TabsContent>

          <TabsContent value="water" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {waterGuidelines.map((guideline) => renderGuidelineCard(guideline, 'water'))}
            </div>
          </TabsContent>

          <TabsContent value="transportation" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {transportationGuidelines.map((guideline) => renderGuidelineCard(guideline, 'co2'))}
            </div>
          </TabsContent>

          <TabsContent value="waste" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {wasteGuidelines.map((guideline) => renderGuidelineCard(guideline, 'waste'))}
            </div>
          </TabsContent>

          <TabsContent value="consumption" className="space-y-6">
            <Card className="border-0 eco-shadow">
              <CardContent className="p-8 text-center">
                <ShoppingBag className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Consumption Guidelines</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive consumption guidelines coming soon. Learn how to make sustainable purchasing decisions.
                </p>
                <Button variant="eco">
                  Get Notified When Available
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="food" className="space-y-6">
            <Card className="border-0 eco-shadow">
              <CardContent className="p-8 text-center">
                <Utensils className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Food & Nutrition Guidelines</h3>
                <p className="text-muted-foreground mb-6">
                  Sustainable food guidelines coming soon. Discover how your food choices impact the environment.
                </p>
                <Button variant="eco">
                  Get Notified When Available
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-6">
            <Card className="border-0 eco-shadow">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Community Action Guidelines</h3>
                <p className="text-muted-foreground mb-6">
                  Community engagement guidelines coming soon. Learn how to make a collective impact.
                </p>
                <Button variant="eco">
                  Get Notified When Available
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Guidelines;