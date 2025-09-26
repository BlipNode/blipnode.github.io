
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Sparkles } from 'lucide-react';

const Hero = () => {
    const codeSnippets = [
        {
            lang: 'React',
            code: 'const BlipNode = () => {\n  return <Innovation />;\n};',
            color: 'from-cyan-400 to-blue-500'
        },
        {
            lang: 'Python',
            code: 'def analyze_data():\n    return insights.transform()',
            color: 'from-green-400 to-emerald-500'
        },
        {
            lang: 'Swift',
            code: 'func buildApp() {\n    BlipNode.create(.mobile)\n}',
            color: 'from-orange-400 to-red-500'
        },
    ];

    const floatingElements = [
        { icon: Code2, delay: 0, x: 100, y: 50 },
        { icon: Database, delay: 0.5, x: -80, y: 100 },
        { icon: Smartphone, delay: 1, x: 120, y: -50 },
        { icon: Sparkles, delay: 1.5, x: -100, y: -80 },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" >
            {/* Animated Background */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

            {/* Floating Code Snippets */}
            {
                codeSnippets.map((snippet, index) => (
                    <motion.div
                        key={index}
                        className={`absolute hidden lg:block code-block rounded-lg p-4 max-w-xs`}
                        initial={{ opacity: 0, scale: 0.8 }
                        }
                        animate={{
                            opacity: 0.8,
                            scale: 1,
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: index * 0.5,
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        style={{
                            top: `${20 + index * 25}%`,
                            left: index % 2 === 0 ? '10%' : '80%',
                            transform: index % 2 === 0 ? 'translateX(0)' : 'translateX(-100%)'
                        }}
                    >
                        <div className={`text-xs font-mono bg-gradient-to-r ${snippet.color} bg-clip-text text-transparent font-semibold mb-2`}>
                            {snippet.lang}
                        </div>
                        < pre className="text-xs text-slate-300 font-mono leading-relaxed" >
                            {snippet.code}
                        </pre>
                    </motion.div>
                ))}

            {/* Floating Icons */}
            {
                floatingElements.map((element, index) => {
                    const Icon = element.icon;
                    return (
                        <motion.div
                            key={index}
                            className="absolute hidden md:block"
                            initial={{ opacity: 0, scale: 0 }
                            }
                            animate={{
                                opacity: 0.6,
                                scale: 1,
                                x: [element.x, element.x + 20, element.x],
                                y: [element.y, element.y - 30, element.y],
                            }}
                            transition={{
                                duration: 3,
                                delay: element.delay,
                                x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                            style={{
                                top: '50%',
                                left: '50%',
                            }}
                        >
                            <Icon className="w-8 h-8 text-cyan-400/60" />
                        </motion.div>
                    );
                })}

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-6xl mx-auto px-4" >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-6 py-2 text-sm font-medium text-cyan-300 mb-8" >
                        🚀 Pioneering the Future of Software
                    </span>
                </motion.div>

                < motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                >
                    <span className="text-gradient" >Blip</span>
                    <span className="text-white" >Node</span>
                </motion.h1>

                < motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
                >
                    Where < span className="text-cyan-400 font-semibold" > innovation meets execution </span>.
                    We craft cutting - edge software solutions that transform ideas into
                    < span className="text-purple-400 font-semibold" > digital realities </span>.
                </motion.p>

                < motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <motion.button
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 pulse-glow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project
                    </motion.button>
                    < motion.button
                        className="border border-cyan-500/50 text-cyan-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Our Work
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
