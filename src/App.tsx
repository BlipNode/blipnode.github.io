
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motto from './components/Motto';
import About from './components/About';
import Services from './components/Services';
import Innovation from './components/Innovation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main>
                <Hero />
                <Motto />
                <About />
                <Services />
                <Innovation />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Scroll to Top Button */}
            <motion.button
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </motion.button>
        </div>
    );
}

export default App;
