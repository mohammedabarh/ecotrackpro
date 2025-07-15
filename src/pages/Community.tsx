import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Search,
  Trophy,
  Leaf,
  Target,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  Plus,
  Filter,
  Globe,
  TreePine,
  Recycle,
  Zap
} from "lucide-react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("feed");

  const communityStats = [
    {
      icon: Users,
      label: "Active Members",
      value: "52,341",
      change: "+12% this month"
    },
    {
      icon: TreePine,
      label: "Trees Planted",
      value: "15,623",
      change: "+245 this week"
    },
    {
      icon: Recycle,
      label: "CO2 Prevented",
      value: "2.8M kg",
      change: "+5.2% this month"
    },
    {
      icon: Award,
      label: "Challenges Completed",
      value: "8,947",
      change: "+156 today"
    }
  ];

  const feedPosts = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/api/placeholder/40/40",
        level: "Eco Champion",
        score: 892
      },
      content: "Just completed my first month of zero-waste living! 🌱 Managed to reduce my household waste by 85%. The key was meal planning and bringing reusable containers everywhere.",
      image: "/api/placeholder/400/250",
      likes: 124,
      comments: 18,
      shares: 7,
      timestamp: "2 hours ago",
      category: "Zero Waste"
    },
    {
      id: 2,
      user: {
        name: "Mike Rodriguez",
        avatar: "/api/placeholder/40/40",
        level: "Green Warrior",
        score: 647
      },
      content: "Installed solar panels on my roof this weekend! The process was easier than expected. Happy to share my experience and tips with anyone considering the switch to renewable energy.",
      likes: 89,
      comments: 23,
      shares: 12,
      timestamp: "5 hours ago",
      category: "Renewable Energy"
    },
    {
      id: 3,
      user: {
        name: "Emma Thompson",
        avatar: "/api/placeholder/40/40",
        level: "Nature Lover",
        score: 523
      },
      content: "Organized a community cleanup event at the local beach today. We collected over 200kg of plastic waste! 🏖️ Thanks to all 30 volunteers who joined. Together we're making a real difference!",
      image: "/api/placeholder/400/250",
      likes: 256,
      comments: 45,
      shares: 28,
      timestamp: "1 day ago",
      category: "Community Action"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "30-Day Plastic Free Challenge",
      description: "Eliminate single-use plastics from your daily routine",
      participants: 1247,
      daysLeft: 23,
      difficulty: "Medium",
      reward: "100 eco points",
      category: "Waste Reduction"
    },
    {
      id: 2,
      title: "Bike to Work Week",
      description: "Commute by bicycle for 5 consecutive days",
      participants: 892,
      daysLeft: 5,
      difficulty: "Easy",
      reward: "50 eco points",
      category: "Transportation"
    },
    {
      id: 3,
      title: "Plant a Community Garden",
      description: "Start or contribute to a local community garden",
      participants: 234,
      daysLeft: 15,
      difficulty: "Hard",
      reward: "200 eco points",
      category: "Food & Agriculture"
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Alex Johnson",
      score: 1847,
      level: "Eco Master",
      activities: 156,
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 2,
      name: "Maya Patel",
      score: 1623,
      level: "Eco Champion",
      activities: 142,
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 3,
      name: "David Kim",
      score: 1456,
      level: "Eco Champion",
      activities: 128,
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 4,
      name: "Lisa Martinez",
      score: 1234,
      level: "Green Warrior",
      activities: 97,
      avatar: "/api/placeholder/40/40"
    },
    {
      rank: 5,
      name: "Tom Wilson",
      score: 1187,
      level: "Green Warrior",
      activities: 89,
      avatar: "/api/placeholder/40/40"
    }
  ];

  const groups = [
    {
      id: 1,
      name: "Zero Waste Lifestyle",
      members: 3245,
      category: "Lifestyle",
      description: "Tips and support for zero waste living",
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Urban Gardening",
      members: 1876,
      category: "Gardening",
      description: "Growing food in urban environments",
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Renewable Energy Enthusiasts",
      members: 2134,
      category: "Energy",
      description: "Solar, wind, and other renewable technologies",
      image: "/api/placeholder/100/100"
    },
    {
      id: 4,
      name: "Sustainable Fashion",
      members: 1567,
      category: "Fashion",
      description: "Ethical and sustainable clothing choices",
      image: "/api/placeholder/100/100"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Eco Community</h1>
            <p className="text-muted-foreground">Connect with fellow eco-warriors and make a bigger impact together</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search community..." className="pl-10 w-64" />
            </div>
            <Link to="/track">
              <Button variant="eco">
                <Plus className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </Link>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="border-0 eco-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-green-600">{stat.change}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Community Feed</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {feedPosts.map((post) => (
                  <Card key={post.id} className="border-0 eco-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Avatar>
                          <AvatarImage src={post.user.avatar} />
                          <AvatarFallback>{post.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold">{post.user.name}</span>
                            <Badge variant="secondary" className="text-xs">{post.user.level}</Badge>
                            <Badge variant="outline" className="text-xs">{post.user.score} pts</Badge>
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            {post.timestamp}
                            <Badge className="text-xs">{post.category}</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm mb-4">{post.content}</p>
                      
                      {post.image && (
                        <div className="mb-4">
                          <img 
                            src={post.image} 
                            alt="Post content" 
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Heart className="h-4 w-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground">
                            <Share2 className="h-4 w-4 mr-1" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-6">
                <Card className="border-0 eco-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Trending Topics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#ZeroWaste</span>
                      <Badge variant="secondary">2.1k posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#SolarPower</span>
                      <Badge variant="secondary">1.8k posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#PlasticFree</span>
                      <Badge variant="secondary">1.5k posts</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">#CommunityGarden</span>
                      <Badge variant="secondary">892 posts</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="border-0 eco-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{challenge.title}</CardTitle>
                        <CardDescription>{challenge.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{challenge.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Participants</span>
                      <span className="font-semibold">{challenge.participants.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Days Left</span>
                      <span className="font-semibold">{challenge.daysLeft}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Reward</span>
                      <Badge>{challenge.reward}</Badge>
                    </div>
                    <Button variant="eco" className="w-full">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="border-0 eco-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  Top Eco Warriors
                </CardTitle>
                <CardDescription>Community members making the biggest impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          user.rank === 1 ? 'bg-yellow-500 text-white' :
                          user.rank === 2 ? 'bg-gray-400 text-white' :
                          user.rank === 3 ? 'bg-orange-500 text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {user.rank}
                        </div>
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary">{user.score} pts</div>
                        <div className="text-sm text-muted-foreground">{user.activities} activities</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => (
                <Card key={group.id} className="border-0 eco-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{group.name}</h3>
                        <Badge variant="secondary" className="text-xs mb-2">{group.category}</Badge>
                        <div className="text-sm text-muted-foreground">
                          {group.members.toLocaleString()} members
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                    <Button variant="outline" className="w-full">
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;