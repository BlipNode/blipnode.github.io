
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Target, Rocket } from 'lucide-react';

const Motto = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const mottoWords = [
        { text: "Innovation", color: "text-cyan-400", delay: 0 },
        { text: "at", color: "text-slate-300", delay: 0.2 },
        { text: "the", color: "text-slate-300", delay: 0.3 },
        { text: "Speed", color: "text-purple-400", delay: 0.4 },
        { text: "of", color: "text-slate-300", delay: 0.5 },
        { text: "Thought", color: "text-cyan-400", delay: 0.6 },
    ];

    const principles = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "We move at the speed of innovation, delivering solutions that keep pace with your ambitions."
        },
        {
            icon: Target,
            title: "Precision Focused",
            description: "Every line of code, every design choice, every decision is made with surgical precision."
        },
        {
            icon: Rocket,
            title: "Future Ready",
            description: "Building today's solutions with tomorrow's technology, ensuring your competitive edge."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Motto */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-2 text-sm font-medium text-cyan-300">
                            Our Philosophy
                        </span>
                    </motion.div>

                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                        {mottoWords.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: word.delay }}
                                className={`${word.color} inline-block mr-4 md:mr-6`}
                            >
                                {word.text}
                            </motion.span>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        At BlipNode, we believe that the best ideas deserve the best execution.
                        We don't just build software – we craft digital experiences that
                        <span className="text-gradient font-semibold"> push boundaries</span> and
                        <span className="text-gradient font-semibold"> redefine possibilities</span>.
                    </motion.p>
                </div>

                {/* Principles Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 h-full hover:border-cyan-500/40 transition-all duration-300 card-hover">
                                    <div className="mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed">{principle.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Quote Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
                        <blockquote className="text-2xl md:text-3xl font-light text-slate-200 leading-relaxed mb-6">
                            "In a world where technology evolves at light speed,
                            <span className="text-gradient font-semibold"> we don't just keep up – we lead the charge</span>."
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">BN</span>
                            </div>
                            <div className="text-left">
                                <div className="text-white font-semibold">BlipNode Team</div>
                                <div className="text-slate-400 text-sm">Software Innovation Leaders</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Motto;
