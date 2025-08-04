import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['Swift', 'UIKit', 'Core Data', 'Flutter', 'JSON', 'MVC Architecture'],
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      title: 'Tools & Services',
      skills: ['Xcode', 'Firebase', 'REST API', 'Apple Pay', 'Git', 'TestFlight'],
      color: 'bg-green-500/10 text-green-400 border-green-500/20'
    },
    {
      title: 'Other Skills',
      skills: ['App Store Submission', 'UI Design', 'BLoC Pattern', 'Hive Database', 'WordPress'],
      color: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of iOS development technologies and frameworks 
              that I use to build exceptional native mobile experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map(({ title, skills, color }) => (
              <Card 
                key={title} 
                className="p-8 bg-card/50 border-border hover:shadow-glow-secondary transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className={`${color} hover:shadow-glow-secondary transition-all duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '10+', label: 'Apps Worked On' },
              { number: '3-5', label: 'Apps Built from Scratch' },
              { number: '100%', label: 'Commitment' }
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {number}
                </div>
                <p className="text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;