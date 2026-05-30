import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Experience with Code Refactoring that maintain and scale the coding structure.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Experience of developing Deep learning model and enhance the backend system with senior  during Internship.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Working closely with teams and bringing some suggestion of system improvement to the business.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Self-learning of new technologies and best practices based on the video or coding guide.",
    },
]

export const About = () =>  {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I am a passionate AI engineer with coding skills of experience developing algorithm calculation system 
                                and website development with a curoisity for learning a whole new thing on the website, data modelling and visualisation 
                                the overall model performance based on the prediction outcomes.
                            </p>
                            <p>
                                I specialize in Python, Java, NodeJS and Javascript, creating a nice design and bringing the user friendly experience 
                                based on the web application, ensure the model performance accuracy fit it best to
                                trigger the expectation to the real world, experience intergrate database syntax into NodeJS for retrieving the data from the database and joining with 
                                UAT testing experience and using Postman API calling the server while retrieving the final score calculation.
                            </p>
                        </div>
                    
                        <div className= "glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "My Mission is to create an advanced automation system that are not just 
                                functional, but the application can brings more the user iteraction and experience the website."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )    
}