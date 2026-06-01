import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GitHubIcons } from "@/components/GitHubIcons";
import { LinkedinIcons } from "../components/LinkedinIcons";
import { ArrowRight, Phone, Mail, ChevronDown, Download} from "lucide-react";

const skills = [
    "React",
    "JavaScript",
    "NodeJS",
    "Python",
    "Java",
    "MySQL",
    "Microsoft SQL",
    "SQL Lite",
    "Tailwind CSS",
    "Git",
    "Github Actions",
    "Gitlab Actions",
    "scikit-learn",
    "Tensorflow",
]

export const Hero = () =>  {
    return (
        <section className= "relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img 
                    src="/images.jpg" 
                    alt="Background Image" 
                    className="w-full h-full object-cover opacity-40" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Pink Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                        style={{
                            backgroundColor: "#bd68df",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />    
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-32 pb-20 relative z-10">
                <div className= "grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                 AI Engineer / Software Engineer / Data Engineer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5-xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Explore <span className="text-primary glow-text">automation</span>
                                <br />
                                experieces with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    passion and knowledge.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                                Hi, I am Jeff Hong Chee Hin - an AI engineer that specializing in 
                                developing machine learning models and application development with
                                using Python, Java, NodeJS, HTML, CSS tailwind and MySQL.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button asChild size="lg">
                                <a 
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-2  text-md font-medium"
                                >
                                    Contact Me <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                 Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                { icon: GitHubIcons, href: "https://github.com/JeffH210"},
                                { icon: LinkedinIcons, href: "https://www.linkedin.com/in/jeff-hong-12a368339/"},
                                { icon: Phone, href: "tel:+60173832588"},
                                { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=sss901@gmail.com"},
                            ].map((social, idx) => (
                                <a 
                                    key={idx} 
                                    href={social.href} 
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transitio-all duration-300"
                                >
                                    {<social.icon className= "w-5 h-5" />}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Text Content */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse " />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="/profileImage.png" alt="Jeff Hong Chee Hin" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                                {/* FLoating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium text-highlight">
                                            Available for Work
                                        </span>
                                    </div>
                                </div>
                                {/* Stats Badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">Fresh Graduate</div>
                                    <div className="text-xs text-muted-foreground">
                                        Internship 4 months Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}
                                </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
                <a
                    href="#about"
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />    
                </a>
            </div>
        </section>
    );
}
