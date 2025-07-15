import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Plus, 
  Car, 
  Home, 
  Recycle, 
  Droplets, 
  Zap, 
  TreePine, 
  Utensils,
  ShoppingBag,
  Calendar,
  Clock,
  Target,
  Award,
  TrendingUp,
  Save
} from "lucide-react";

const TrackActivity = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activityData, setActivityData] = useState({
    category: "",
    activity: "",
    amount: "",
    unit: "",
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    notes: ""
  });
  const { toast } = useToast();

  const categories = [
    {
      id: "transportation",
      name: "Transportation",
      icon: Car,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      activities: [
        { name: "Walked instead of driving", unit: "km", ecoPoints: 5, co2Saved: "0.2kg per km" },
        { name: "Biked to work", unit: "km", ecoPoints: 8, co2Saved: "0.2kg per km" },
        { name: "Used public transport", unit: "trips", ecoPoints: 10, co2Saved: "2kg per trip" },
        { name: "Carpooled", unit: "trips", ecoPoints: 12, co2Saved: "3kg per trip" },
        { name: "Electric vehicle usage", unit: "km", ecoPoints: 6, co2Saved: "0.1kg per km" }
      ]
    },
    {
      id: "energy",
      name: "Energy",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      activities: [
        { name: "Used LED lighting", unit: "hours", ecoPoints: 3, co2Saved: "0.05kg per hour" },
        { name: "Unplugged devices", unit: "devices", ecoPoints: 2, co2Saved: "0.1kg per device" },
        { name: "Used renewable energy", unit: "kWh", ecoPoints: 15, co2Saved: "0.5kg per kWh" },
        { name: "Adjusted thermostat", unit: "degrees", ecoPoints: 8, co2Saved: "2kg per degree" },
        { name: "Air-dried clothes", unit: "loads", ecoPoints: 5, co2Saved: "2.5kg per load" }
      ]
    },
    {
      id: "water",
      name: "Water",
      icon: Droplets,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      activities: [
        { name: "Took shorter shower", unit: "minutes saved", ecoPoints: 3, co2Saved: "0.3kg per min" },
        { name: "Fixed water leak", unit: "leaks", ecoPoints: 20, co2Saved: "5kg per leak" },
        { name: "Collected rainwater", unit: "liters", ecoPoints: 2, co2Saved: "0.01kg per liter" },
        { name: "Used water-efficient appliances", unit: "hours", ecoPoints: 5, co2Saved: "1kg per hour" },
        { name: "Watered garden efficiently", unit: "sessions", ecoPoints: 4, co2Saved: "0.5kg per session" }
      ]
    },
    {
      id: "waste",
      name: "Waste & Recycling",
      icon: Recycle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      activities: [
        { name: "Recycled plastic", unit: "items", ecoPoints: 3, co2Saved: "0.5kg per item" },
        { name: "Composted food waste", unit: "kg", ecoPoints: 8, co2Saved: "1kg per kg" },
        { name: "Avoided single-use plastic", unit: "items", ecoPoints: 5, co2Saved: "0.2kg per item" },
        { name: "Donated old items", unit: "items", ecoPoints: 10, co2Saved: "2kg per item" },
        { name: "Repaired instead of replacing", unit: "items", ecoPoints: 15, co2Saved: "5kg per item" }
      ]
    },
    {
      id: "consumption",
      name: "Consumption",
      icon: ShoppingBag,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      activities: [
        { name: "Bought local products", unit: "items", ecoPoints: 8, co2Saved: "1kg per item" },
        { name: "Chose eco-friendly products", unit: "items", ecoPoints: 10, co2Saved: "2kg per item" },
        { name: "Bought second-hand", unit: "items", ecoPoints: 12, co2Saved: "3kg per item" },
        { name: "Avoided unnecessary purchase", unit: "items", ecoPoints: 15, co2Saved: "5kg per item" },
        { name: "Used reusable bags", unit: "trips", ecoPoints: 2, co2Saved: "0.1kg per trip" }
      ]
    },
    {
      id: "food",
      name: "Food",
      icon: Utensils,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      activities: [
        { name: "Ate vegetarian meal", unit: "meals", ecoPoints: 8, co2Saved: "2kg per meal" },
        { name: "Grew own vegetables", unit: "kg", ecoPoints: 15, co2Saved: "3kg per kg" },
        { name: "Reduced food waste", unit: "kg", ecoPoints: 10, co2Saved: "2kg per kg" },
        { name: "Bought organic food", unit: "items", ecoPoints: 6, co2Saved: "1kg per item" },
        { name: "Cooked at home", unit: "meals", ecoPoints: 4, co2Saved: "1kg per meal" }
      ]
    },
    {
      id: "nature",
      name: "Nature & Conservation",
      icon: TreePine,
      color: "text-green-700",
      bgColor: "bg-green-50",
      activities: [
        { name: "Planted tree", unit: "trees", ecoPoints: 50, co2Saved: "20kg per tree" },
        { name: "Participated in cleanup", unit: "hours", ecoPoints: 25, co2Saved: "5kg per hour" },
        { name: "Created wildlife habitat", unit: "sq meters", ecoPoints: 20, co2Saved: "2kg per sq meter" },
        { name: "Educated others", unit: "people", ecoPoints: 15, co2Saved: "1kg per person" },
        { name: "Volunteered for environmental cause", unit: "hours", ecoPoints: 30, co2Saved: "3kg per hour" }
      ]
    }
  ];

  const recentActivities = [
    {
      category: "Transportation",
      activity: "Biked to work",
      amount: "15 km",
      ecoPoints: 120,
      co2Saved: "3kg",
      date: "Today",
      icon: Car
    },
    {
      category: "Energy",
      activity: "Used renewable energy",
      amount: "8 kWh",
      ecoPoints: 120,
      co2Saved: "4kg",
      date: "Yesterday",
      icon: Zap
    },
    {
      category: "Waste",
      activity: "Composted food waste",
      amount: "2 kg",
      ecoPoints: 16,
      co2Saved: "2kg",
      date: "2 days ago",
      icon: Recycle
    }
  ];

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setActivityData({ ...activityData, category: categoryId, activity: "" });
  };

  const handleActivitySelect = (activityName: string) => {
    const category = categories.find(c => c.id === selectedCategory);
    const activity = category?.activities.find(a => a.name === activityName);
    setActivityData({ 
      ...activityData, 
      activity: activityName,
      unit: activity?.unit || ""
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!activityData.category || !activityData.activity || !activityData.amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const category = categories.find(c => c.id === activityData.category);
    const activity = category?.activities.find(a => a.name === activityData.activity);
    const points = activity ? activity.ecoPoints * parseFloat(activityData.amount) : 0;

    toast({
      title: "Activity Logged Successfully!",
      description: `You earned ${points} eco points for this activity.`,
    });

    // Reset form
    setActivityData({
      category: "",
      activity: "",
      amount: "",
      unit: "",
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      notes: ""
    });
    setSelectedCategory("");
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Track Your Eco Activities</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Log your environmental actions and see your positive impact. Every action counts towards a better planet!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 text-primary mr-2" />
                  Log New Activity
                </CardTitle>
                <CardDescription>
                  Track your eco-friendly actions and see your environmental impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Selection */}
                  <div className="space-y-3">
                    <Label>Category</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={category.id}
                            className={`p-3 rounded-lg border-2 cursor-pointer transition-smooth ${
                              selectedCategory === category.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => handleCategorySelect(category.id)}
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`p-1 rounded ${category.bgColor}`}>
                                <Icon className={`h-4 w-4 ${category.color}`} />
                              </div>
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Activity Selection */}
                  {selectedCategoryData && (
                    <div className="space-y-3">
                      <Label>Activity</Label>
                      <Select value={activityData.activity} onValueChange={handleActivitySelect}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an activity" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedCategoryData.activities.map((activity) => (
                            <SelectItem key={activity.name} value={activity.name}>
                              <div className="flex items-center justify-between w-full">
                                <span>{activity.name}</span>
                                <Badge variant="secondary" className="ml-2">
                                  {activity.ecoPoints} pts/{activity.unit}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Amount and Unit */}
                  {activityData.activity && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Amount</Label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={activityData.amount}
                          onChange={(e) => setActivityData({ ...activityData, amount: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Unit</Label>
                        <Input
                          value={activityData.unit}
                          readOnly
                          className="bg-muted"
                        />
                      </div>
                    </div>
                  )}

                  {/* Date and Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date</Label>
                      <Input
                        type="date"
                        value={activityData.date}
                        onChange={(e) => setActivityData({ ...activityData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Time</Label>
                      <Input
                        type="time"
                        value={activityData.time}
                        onChange={(e) => setActivityData({ ...activityData, time: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label>Notes (Optional)</Label>
                    <Textarea
                      placeholder="Add any additional details about this activity..."
                      value={activityData.notes}
                      onChange={(e) => setActivityData({ ...activityData, notes: e.target.value })}
                      rows={3}
                    />
                  </div>

                  {/* Impact Preview */}
                  {activityData.activity && activityData.amount && (
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Estimated Impact:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Eco Points:</span>
                          <div className="font-bold text-primary">
                            +{(selectedCategoryData?.activities.find(a => a.name === activityData.activity)?.ecoPoints || 0) * parseFloat(activityData.amount || "0")}
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">CO₂ Impact:</span>
                          <div className="font-bold text-green-600">
                            {selectedCategoryData?.activities.find(a => a.name === activityData.activity)?.co2Saved}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button type="submit" variant="eco" className="w-full">
                    <Save className="h-4 w-4 mr-2" />
                    Log Activity
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities & Stats */}
          <div className="space-y-6">
            {/* Today's Impact */}
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="h-5 w-5 text-primary mr-2" />
                  Today's Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">246</div>
                  <div className="text-sm text-muted-foreground">Eco Points Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">9.5kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Prevented</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-muted-foreground">Activities Logged</div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="p-1 bg-primary/10 rounded">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{activity.activity}</div>
                          <div className="text-xs text-muted-foreground">
                            {activity.amount} • {activity.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">+{activity.ecoPoints}</div>
                        <div className="text-xs text-green-600">{activity.co2Saved}</div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    handleCategorySelect("nature");
                    handleActivitySelect("Planted tree");
                  }}
                >
                  <TreePine className="h-4 w-4 mr-2" />
                  Plant a Tree
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    handleCategorySelect("waste");
                    handleActivitySelect("Recycled plastic");
                  }}
                >
                  <Recycle className="h-4 w-4 mr-2" />
                  Recycle Item
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    handleCategorySelect("transportation");
                    handleActivitySelect("Used public transport");
                  }}
                >
                  <Car className="h-4 w-4 mr-2" />
                  Log Transport
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start"
                  onClick={() => {
                    handleCategorySelect("energy");
                    handleActivitySelect("Used LED lighting");
                  }}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Save Energy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackActivity;