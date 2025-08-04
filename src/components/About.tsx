import { Card } from '@/components/ui/card';
import { Code, Palette, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and modern standards.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Bringing ideas to life with intuitive user interfaces and engaging experiences.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate developer with a love for creating digital solutions 
              that solve real-world problems. With expertise in modern web technologies, 
              I bring ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started my journey in web development 5 years ago, and since then I've been 
                constantly learning and evolving. I specialize in React, Node.js, and modern 
                web technologies.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or mentoring aspiring developers. I believe in the 
                power of technology to make the world a better place.
              </p>
            </div>
            
            <div className="grid gap-6">
              {features.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="p-6 bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{title}</h4>
                      <p className="text-muted-foreground text-sm">{description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;