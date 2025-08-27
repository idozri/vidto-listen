import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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
        
        <div className="grid gap-6">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Plus className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">No projects yet</h2>
            <p className="text-muted-foreground mb-6">
              Start by uploading your first video or audio file to extract subtitles
            </p>
            <Button
              onClick={() => navigate("/upload")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="w-4 h-4 mr-2" />
              Upload File
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;