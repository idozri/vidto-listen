import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Play, Clock, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const mockProjects = [
    {
      id: 1,
      title: "Marketing Video 2024",
      duration: "02:45",
      subtitleCount: 127,
      createdAt: "2024-01-15",
      thumbnail: "/placeholder.svg",
      languages: ["Portuguese", "English"]
    },
    {
      id: 2,
      title: "Product Demo Recording",
      duration: "05:32",
      subtitleCount: 248,
      createdAt: "2024-01-12", 
      thumbnail: "/placeholder.svg",
      languages: ["English"]
    },
    {
      id: 3,
      title: "Conference Presentation",
      duration: "18:20",
      subtitleCount: 892,
      createdAt: "2024-01-10",
      thumbnail: "/placeholder.svg",
      languages: ["Portuguese", "English", "Spanish"]
    },
    {
      id: 4,
      title: "Tutorial Video Series",
      duration: "12:15",
      subtitleCount: 567,
      createdAt: "2024-01-08",
      thumbnail: "/placeholder.svg",
      languages: ["English"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <Button
            onClick={() => navigate("/upload")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Project
          </Button>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="bg-card hover:bg-card/80 transition-colors cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 hover:bg-primary/20"
                    onClick={() => navigate("/upload")}
                  >
                    <Play className="h-4 w-4 text-primary" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-3 w-3" />
                    {project.subtitleCount} lines
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Created on {new Date(project.createdAt).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;