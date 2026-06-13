import { GitHubIcons } from "@/components/GitHubIcons";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRight, Phone, Mail} from "lucide-react";

const projects = [
    {
        title: "Medical RAG Dashboard",
        description: 
            "Built a Medical RAG system and run Locally that retrieves drug information using FAISS and generates treatment insights with LLMs in a full-stack FastAPI and Next.js application.",
        image: "projects/Medical RAG Dashboard.png",
        tags: ["Python", "Groq", "Sentence Transformer", "FastAPI", "Next", "React", "PostgreSQL", "Docker"],
        link: "#",
        github: "https://github.com/JeffH210/medical-drug-treatment-rag-dashboard"
    },
    {
        title: "Student Depression Classifier Models Comparison",
        description: 
            "Developed AI-driven predictive models for student performance and mental health analysis, applying advanced optimization techniques and SHAP-based explainability to enhance accuracy and transparency.",
        image: "projects/Final Year Project.png",
        tags: ["Python", "Tensorflow", "Numpy", "Scikit-learn", "Streamlit"],
        link: "https://fyp-student-depressed-prediction-system-010.streamlit.app/",
        github: "https://github.com/JeffH210/FYP-Student-Depressed-Prediction-System"
    },
    {
        title: "Alchemy Ideathon",
        description: 
            "Developing an ARIMA algorithm to predict the crypto market stock price based on SOLANA to deliver the business process, and using Figma to showcase the workflow based on our ideas.",
        image: "/projects/Trader Alchemy.png",
        tags: ["Python", "Figma", "Canva"],
        link: "#",
        github: "https://github.com/Luniara749/Trader-Alchemy-Ideathon"
    },
];

export const Project = () =>  {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my projects, from using figma to design a solution to 
                        develop several ML models that solve the student depression problem.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay: `${(idx + 1) *100}ms`}}
                            >
                            {/* Image */}
                            <div className=" relative overflow-hidden aspect-video">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                <div
                                    className="absolute inset-0
                                    bg-gradient-to-t from-card via-card/50
                                    to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a 
                                        href={project.link} 
                                        className="p-3 rounded-full glass hover: bg-primary hover:text-primary-foreground transition-all" 
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a 
                                        href={project.github} 
                                        className="p-3 rounded-full glass hover: bg-primary hover:text-primary-foreground transition-all" 
                                    >
                                        <GitHubIcons className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight 
                                        className="w-5 h-5 
                                        text-muted-foreground group-hover:text-primary
                                        group-hover:translate-x-1 
                                        group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span 
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" >
                                            {tag}
                                        </span>
                                ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        View All Projects  
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};