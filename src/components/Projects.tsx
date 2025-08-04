import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Cross-Border Money Transfer Apps',
      description: 'Developed two iOS apps for a foreign exchange business. One integrated with Apple Pay, another using custom payment gateway. Features secure API integrations, built intuitive UI/UX, and improved transaction flow performance.',
      technologies: ['Swift', 'UIKit', 'Apple Pay', 'REST API', 'Core Data'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
    },
    {
      title: 'Job Portal App with Apple Wallet',
      description: 'A complex job-seeking app featuring advanced custom UI design and role-based flows, Apple Wallet integration to generate and store job fair or interview tickets, and deep API handling for listings, applications, and user profile management.',
      technologies: ['Swift', 'UIKit', 'Apple Wallet', 'REST API', 'Core Data'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
    {
      title: 'Radio Streaming App',
      description: 'Built an audio streaming app where users can listen to live radio channels based on regions (under a single brand). Experience smooth media playback with notification controls and background support.',
      technologies: ['Swift', 'UIKit', 'AVFoundation', 'REST API'],
      githubUrl: '#',
      liveUrl: '#',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my published iOS apps that showcase my skills 
              and passion for creating meaningful mobile experiences available on the App Store.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`overflow-hidden bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-500 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      App Store
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All Apps on App Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;