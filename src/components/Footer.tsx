import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                iOS Developer Portfolio
              </div>
              <p className="text-muted-foreground">
                Building exceptional iOS experiences, one app at a time.
              </p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hello@yourname.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:shadow-glow-secondary transition-all duration-300 text-muted-foreground hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> by Rahul
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;