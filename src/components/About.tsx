import { Card } from '@/components/ui/card';
import { Code, Palette, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Native iOS',
      description: 'Building high-performance native iOS apps with Swift, SwiftUI, and UIKit following Apple\'s design guidelines.'
    },
    {
      icon: Palette,
      title: 'App Store Ready',
      description: 'Creating polished, user-friendly apps optimized for App Store approval and user satisfaction.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Focusing on exceptional user experiences with intuitive interfaces and smooth performance.'
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
              Passionate iOS developer with 2+ years of experience creating innovative mobile solutions. 
              With 5+ apps successfully published on the App Store, I bring ideas to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My iOS Journey</h3>
              <p className="text-muted-foreground mb-4">
                Started my iOS development journey 2 years ago and have since published 5+ apps 
                on the App Store. I specialize in Swift, SwiftUI, and UIKit, creating apps that 
                users love and Apple approves.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new iOS frameworks, studying 
                Apple's latest announcements, or mentoring aspiring iOS developers. I believe 
                in creating apps that make a meaningful impact on users' lives.
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