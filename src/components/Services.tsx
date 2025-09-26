
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Globe, Database, Brain, Cloud, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            icon: Smartphone,
            title: "Mobile App Development",
            subtitle: "iOS & Android Excellence",
            description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
            features: [
                "Native iOS & Android Development",
                "React Native & Flutter",
                "UI/UX Design & Prototyping",
                "App Store Optimization",
                "Performance Optimization"
            ],
            technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Xamarin"],
            gradient: "from-cyan-500 to-blue-600"
        },
        {
            icon: Globe,
            title: "Web Development",
            subtitle: "Full-Stack Solutions",
            description: "Scalable web applications built with modern frameworks and best practices for optimal performance.",
            features: [
                "Frontend Development (React, Vue, Angular)",
                "Backend APIs & Microservices",
                "Database Design & Optimization",
                "Cloud Deployment & DevOps",
                "Progressive Web Apps (PWAs)"
            ],
            technologies: ["React", "Next.js", "Node.js", "Python", "AWS"],
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: Database,
            title: "Data Engineering",
            subtitle: "Big Data & Analytics",
            description: "Transform your data into actionable insights with advanced analytics and machine learning solutions.",
            features: [
                "Data Pipeline Development",
                "Real-time Analytics",
                "Data Warehouse Design",
                "ETL/ELT Processes",
                "Business Intelligence Dashboards"
            ],
            technologies: ["Python", "Apache Spark", "Kafka", "Snowflake", "Tableau"],
            gradient: "from-green-500 to-emerald-600"
        },
        {
            icon: Brain,
            title: "AI & Machine Learning",
            subtitle: "Intelligent Automation",
            description: "Cutting-edge AI solutions that automate processes and provide intelligent insights for your business.",
            features: [
                "Custom ML Model Development",
                "Natural Language Processing",
                "Computer Vision Solutions",
                "Predictive Analytics",
                "AI-Powered Automation"
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face", "MLflow"],
            gradient: "from-orange-500 to-red-600"
        },
        {
            icon: Cloud,
            title: "Cloud Solutions",
            subtitle: "Scalable Infrastructure",
            description: "Cloud-native applications and infrastructure that scale with your business needs.",
            features: [
                "Cloud Migration & Strategy",
                "Serverless Architecture",
                "Container Orchestration",
                "Auto-scaling Solutions",
                "Cost Optimization"
            ],
            technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            subtitle: "Enterprise-Grade Protection",
            description: "Comprehensive security solutions to protect your applications and data from modern threats.",
            features: [
                "Security Audits & Penetration Testing",
                "Compliance Implementation",
                "Identity & Access Management",
                "Data Encryption & Protection",
                "Security Monitoring & Response"
            ],
            technologies: ["OAuth", "JWT", "SSL/TLS", "GDPR", "SOC 2"],
            gradient: "from-red-500 to-rose-600"
        }
    ];

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>

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
                            Our Services
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Solutions That <span className="text-gradient">Scale</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        From concept to deployment, we offer comprehensive software development services
                        that transform your vision into powerful, scalable solutions.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="group cursor-pointer"
                                onClick={() => setActiveService(index)}
                                onMouseEnter={() => setActiveService(index)}
                            >
                                <div className={`bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border rounded-2xl p-8 h-full transition-all duration-300 card-hover ${activeService === index
                                    ? 'border-cyan-500/60 shadow-xl shadow-cyan-500/20'
                                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                                    }`}>
                                    <div className="mb-6">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                        <p className="text-cyan-400 font-medium mb-4">{service.subtitle}</p>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>

                                    <div className="space-y-2 mb-6">
                                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                                <span className="text-sm text-slate-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-1">
                                            {service.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-2 py-1 text-xs text-cyan-300 font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Service Detail Modal/Expanded View */}
                <AnimatePresence>
                    {activeService !== null && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="mt-12"
                        >
                            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div>
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${services[activeService].gradient} rounded-3xl flex items-center justify-center`}>
                                                {React.createElement(services[activeService].icon, { className: "w-10 h-10 text-white" })}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-white">{services[activeService].title}</h3>
                                                <p className="text-cyan-400 font-medium">{services[activeService].subtitle}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-slate-300 leading-relaxed mb-8">{services[activeService].description}</p>

                                        <motion.button
                                            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get Started
                                        </motion.button>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-6">What's Included:</h4>
                                        <div className="space-y-3 mb-8">
                                            {services[activeService].features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-center space-x-3"
                                                >
                                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                                    <span className="text-slate-300">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-4">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {services[activeService].technologies.map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2 text-sm text-cyan-300 font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;
