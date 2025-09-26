
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageCircleDashed as MessageCircle, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactMethods = [
        {
            icon: Mail,
            title: "Email Us",
            description: "Drop us a line anytime",
            value: "hello@blipnode.com",
            action: "Send Email"
        },
        {
            icon: Phone,
            title: "Call Us",
            description: "Mon-Fri from 9am to 6pm",
            value: "+1 (555) 123-4567",
            action: "Call Now"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "Come say hello at our office",
            value: "San Francisco, CA",
            action: "Get Directions"
        },
        {
            icon: Calendar,
            title: "Schedule Meeting",
            description: "Book a consultation call",
            value: "30 min consultation",
            action: "Book Now"
        }
    ];

    const projectTypes = [
        "Mobile App Development",
        "Web Application",
        "Data Analytics Platform",
        "AI/ML Solution",
        "Cloud Migration",
        "Custom Software",
        "Other"
    ];

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"></div>

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
                            Get In Touch
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Let's Build Something <span className="text-gradient">Amazing</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Ready to transform your ideas into reality? We're here to help you navigate
                        the digital landscape and create solutions that drive real results.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                            <div className="flex items-center space-x-3 mb-8">
                                <MessageCircle className="w-8 h-8 text-cyan-400" />
                                <h3 className="text-2xl font-bold text-white">Start a Conversation</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        name="project"
                                        value={formData.project}
                                        onChange={handleChange}
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                    >
                                        <option value="">Select a project type</option>
                                        {projectTypes.map((type) => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg font-semibold transition-all duration-300 ${isSubmitted
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                                        }`}
                                    whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Message Sent!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="space-y-6"
                    >
                        {contactMethods.map((method, index) => {
                            const Icon = method.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 card-hover">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-6 h-6 text-cyan-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-white mb-1">{method.title}</h4>
                                                <p className="text-slate-400 text-sm mb-2">{method.description}</p>
                                                <p className="text-cyan-300 font-medium mb-3">{method.value}</p>
                                                <div className="flex items-center text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
                                                    <span className="mr-2">{method.action}</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 1.5 }}
                            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
                        >
                            <h4 className="text-xl font-bold text-white mb-4">Why Choose BlipNode?</h4>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span>Free initial consultation and project assessment</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span>Agile development with weekly progress updates</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span>Post-launch support and maintenance included</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                                    <span>Transparent pricing with no hidden costs</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
