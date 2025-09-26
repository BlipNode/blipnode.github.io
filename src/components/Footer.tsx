
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Services: [
            { name: 'Mobile Development', href: '#services' },
            { name: 'Web Development', href: '#services' },
            { name: 'Data Solutions', href: '#services' },
            { name: 'AI & ML', href: '#services' },
        ],
        Company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Team', href: '#about' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
        ],
        Resources: [
            { name: 'Case Studies', href: '#' },
            { name: 'Documentation', href: '#' },
            { name: 'API Reference', href: '#' },
            { name: 'Support', href: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'GDPR', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Github, href: '#', label: 'GitHub' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.05),transparent_70%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 gap-8">
                        {/* Company Info */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="mb-8"
                            >
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="relative">
                                        <Code className="w-8 h-8 text-cyan-400" />
                                        <Zap className="w-4 h-4 text-purple-500 absolute -top-1 -right-1" />
                                    </div>
                                    <span className="text-2xl font-bold text-gradient">BlipNode</span>
                                </div>
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    Transforming ideas into powerful digital solutions. We're your partners
                                    in building the future of technology, one innovative project at a time.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3 text-slate-300">
                                        <Mail className="w-5 h-5 text-cyan-400" />
                                        <span>hello@blipnode.com</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-slate-300">
                                        <Phone className="w-5 h-5 text-cyan-400" />
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-slate-300">
                                        <MapPin className="w-5 h-5 text-cyan-400" />
                                        <span>San Francisco, CA</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Links Grid */}
                        <div className="lg:col-span-6">
                            <div className="grid md:grid-cols-4 gap-8">
                                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                    >
                                        <h4 className="text-white font-semibold mb-4">{category}</h4>
                                        <ul className="space-y-3">
                                            {links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <a
                                                        href={link.href}
                                                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                                                    >
                                                        {link.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                                <p className="text-slate-300 text-sm mb-4">
                                    Get the latest insights on technology trends and innovations.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-sm"
                                    />
                                    <motion.button
                                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <span>Subscribe</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-slate-400 text-sm"
                        >
                            © 2025 BlipNode. All rights reserved. Crafted with ❤️ for innovation.
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center space-x-6"
                        >
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-200"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
