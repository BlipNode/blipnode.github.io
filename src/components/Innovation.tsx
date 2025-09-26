
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Eye, MessageSquare, Layers, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

const Innovation = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [activeDemo, setActiveDemo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const innovations = [
        {
            icon: Cpu,
            title: "Quantum Computing Integration",
            description: "Preparing for the quantum future with hybrid classical-quantum algorithms.",
            status: "Research Phase",
            progress: 25,
            color: "from-cyan-400 to-blue-500"
        },
        {
            icon: Eye,
            title: "Advanced Computer Vision",
            description: "Real-time object detection and recognition with 99.9% accuracy.",
            status: "Production Ready",
            progress: 95,
            color: "from-green-400 to-emerald-500"
        },
        {
            icon: MessageSquare,
            title: "Conversational AI",
            description: "Natural language processing with context-aware responses.",
            status: "Beta Testing",
            progress: 80,
            color: "from-purple-400 to-pink-500"
        },
        {
            icon: Layers,
            title: "Edge Computing Solutions",
            description: "Ultra-low latency processing at the network edge.",
            status: "Development",
            progress: 60,
            color: "from-orange-400 to-red-500"
        }
    ];

    const demoSteps = [
        {
            title: "Data Ingestion",
            description: "Real-time data streaming from multiple sources",
            visual: "📊"
        },
        {
            title: "AI Processing",
            description: "Machine learning models analyze patterns",
            visual: "🧠"
        },
        {
            title: "Insights Generation",
            description: "Actionable insights delivered instantly",
            visual: "💡"
        },
        {
            title: "Automated Actions",
            description: "Smart automation based on predictions",
            visual: "⚡"
        }
    ];

    React.useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setActiveDemo((prev) => (prev + 1) % demoSteps.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, demoSteps.length]);

    return (
        <section id="innovation" className="py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.15),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.15),transparent_50%)]"></div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full px-6 py-2 text-sm font-medium text-purple-300">
                            🚀 Innovation Lab
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Tomorrow's Tech, <span className="text-gradient">Today</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        At BlipNode's Innovation Lab, we don't just follow trends – we create them.
                        Explore our cutting-edge research and breakthrough technologies that are shaping the future of software.
                    </motion.p>
                </div>

                {/* Innovation Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {innovations.map((innovation, index) => {
                        const Icon = innovation.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300 card-hover">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${innovation.status === 'Production Ready'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                            : innovation.status === 'Beta Testing'
                                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                : innovation.status === 'Development'
                                                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                            }`}>
                                            {innovation.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4">{innovation.title}</h3>
                                    <p className="text-slate-300 leading-relaxed mb-6">{innovation.description}</p>

                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm text-slate-400">Progress</span>
                                            <span className="text-sm font-medium text-white">{innovation.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-700/50 rounded-full h-2">
                                            <motion.div
                                                className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${innovation.progress}%` } : {}}
                                                transition={{ duration: 1, delay: 1 + index * 0.2 }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                                        <span className="mr-2">Learn More</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interactive Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12"
                >
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                            <Sparkles className="w-8 h-8 text-cyan-400" />
                            <h3 className="text-3xl font-bold text-white">AI Pipeline Demo</h3>
                            <Sparkles className="w-8 h-8 text-purple-400" />
                        </div>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            Watch our AI-powered data processing pipeline in action. From raw data to actionable insights in real-time.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                        {demoSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`relative p-6 rounded-2xl border-2 transition-all duration-500 ${activeDemo === index
                                    ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                                    : 'border-slate-600 bg-slate-800/30'
                                    }`}
                                animate={{
                                    scale: activeDemo === index ? 1.05 : 1,
                                }}
                            >
                                <div className="text-4xl mb-4 text-center">{step.visual}</div>
                                <h4 className="text-lg font-bold text-white mb-2 text-center">{step.title}</h4>
                                <p className="text-sm text-slate-300 text-center">{step.description}</p>

                                {activeDemo === index && (
                                    <motion.div
                                        className="absolute inset-0 border-2 border-cyan-400 rounded-2xl"
                                        animate={{
                                            opacity: [0.5, 1, 0.5],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center space-x-4">
                        <motion.button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                            <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
                        </motion.button>

                        <motion.button
                            className="border border-cyan-500/50 text-cyan-300 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Full Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Innovation;
