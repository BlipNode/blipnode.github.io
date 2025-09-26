
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Globe, Code, Smartphone, Database, Brain, Shield, Zap } from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const stats = [
        { number: "50+", label: "Projects Delivered", icon: Award },
        { number: "15+", label: "Expert Developers", icon: Users },
        { number: "10+", label: "Countries Served", icon: Globe },
        { number: "99%", label: "Client Satisfaction", icon: Shield },
    ];

    const expertise = [
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Native iOS & Android apps, React Native, Flutter - creating seamless mobile experiences that users love.",
            technologies: ["Swift", "Kotlin", "React Native", "Flutter"]
        },
        {
            icon: Code,
            title: "Web Development",
            description: "Full-stack web applications using cutting-edge frameworks and technologies for maximum performance.",
            technologies: ["React", "Next.js", "Node.js", "TypeScript"]
        },
        {
            icon: Database,
            title: "Data Solutions",
            description: "Advanced data analytics, machine learning, and AI solutions that turn your data into actionable insights.",
            technologies: ["Python", "TensorFlow", "PostgreSQL", "MongoDB"]
        },
        {
            icon: Brain,
            title: "AI & Machine Learning",
            description: "Intelligent systems and automation that give your business a competitive edge in the digital landscape.",
            technologies: ["PyTorch", "Scikit-learn", "OpenAI", "LangChain"]
        }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 grid-pattern opacity-10"></div>

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-2 text-sm font-medium text-cyan-300">
                            About BlipNode
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Crafting Digital <span className="text-gradient">Excellence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Born from a passion for innovation and a commitment to excellence, BlipNode is where
                        visionary ideas meet world-class execution. We're not just developers – we're digital architects
                        building the future, one breakthrough at a time.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 card-hover">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                                    <div className="text-slate-300 font-medium">{stat.label}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Expertise Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {expertise.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 transition-all duration-300 card-hover">
                                    <div className="flex items-start space-x-4 mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                            <p className="text-slate-300 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-3 py-1 text-sm text-cyan-300 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 max-w-5xl mx-auto">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h3>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            To empower businesses and individuals with innovative software solutions that not only meet today's challenges
                            but anticipate tomorrow's opportunities. We believe in the transformative power of technology and are committed
                            to making it accessible, powerful, and beautiful.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
