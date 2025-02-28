// src/components/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Video, Plane, Star, UserCheck, Clock, CreditCard, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const HomePage = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [email, setEmail] = useState('');
  
  const features = [
    { title: "Professional Photography", icon: Camera, description: "High-quality, professionally edited real estate photography that showcases properties at their best." },
    { title: "Cinematic Video Tours", icon: Video, description: "Engaging property videos that tell your property's unique story and captivate potential buyers." },
    { title: "Aerial Drone Coverage", icon: Plane, description: "Stunning aerial views captured by FAA-certified drone operators to highlight property surroundings." },
    { title: "Verified Creators", icon: UserCheck, description: "Work with thoroughly vetted professionals who deliver consistent, high-quality content." }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Submit logic would go here
      setShowDialog(true);
      setEmail('');
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with background effect */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute inset-0 z-0">
          <GlowingEffect 
            blur={20}
            spread={40}
            glow={true}
            variant="default"
            disabled={false}
            movementDuration={2}
            borderWidth={2}
            className="hidden md:block"
          />
        </div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-5 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
                <Star className="h-3.5 w-3.5" /> Launching Soon
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Premium Content for Real Estate Excellence
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Connect with top-tier photographers, videographers, and content creators. Elevate your property marketing with professional content that converts.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row w-full max-w-md mx-auto gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
              <ShimmerButton type="submit" className="px-6 py-3 bg-blue-600">
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5 text-white/90" />
              </ShimmerButton>
            </motion.form>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center text-sm text-gray-500"
            >
              <span className="flex items-center">
                <UserCheck className="w-4 h-4 mr-2 text-green-500" />
                <span>250+ property managers already joined</span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Elevate Your Property Marketing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Discover how ZeroVacancy can transform your real estate listings with high-quality content that attracts buyers and drives conversions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Feature showcase (left side) */}
            <div className="order-2 md:order-1">
              <div className="overflow-hidden rounded-xl bg-gray-50 p-1 shadow-lg">
                <div className="h-[400px] overflow-hidden rounded-lg bg-white p-6 shadow-sm">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: currentFeature === index ? 1 : 0,
                        y: currentFeature === index ? 0 : 20
                      }}
                      transition={{ duration: 0.5 }}
                      className={cn(
                        "absolute inset-0 flex flex-col justify-center p-6",
                        currentFeature === index ? "block" : "hidden"
                      )}
                    >
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <feature.icon className="h-7 w-7 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Features list (right side) */}
            <div className="order-1 md:order-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  className={cn(
                    "p-6 rounded-xl mb-4 cursor-pointer transition-all",
                    currentFeature === index 
                      ? "bg-blue-50 border-blue-200 shadow-sm" 
                      : "border border-gray-100 hover:bg-gray-50"
                  )}
                  onClick={() => setCurrentFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      currentFeature === index ? "bg-blue-100" : "bg-gray-100"
                    )}>
                      <feature.icon className={cn(
                        "h-5 w-5",
                        currentFeature === index ? "text-blue-600" : "text-gray-600"
                      )} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-lg font-semibold mb-1",
                        currentFeature === index ? "text-blue-700" : "text-gray-900"
                      )}>
                        {feature.title}
                      </h3>
                      <p className={cn(
                        "text-sm",
                        currentFeature === index ? "text-blue-700/80" : "text-gray-500"
                      )}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Simple, Efficient Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              From finding the perfect creator to receiving your content, our streamlined process makes professional property marketing effortless.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Search & Match", 
                description: "Browse profiles and find the perfect content creator based on style, specialty, and location.",
                icon: Search 
              },
              { 
                step: "02", 
                title: "Book & Pay Securely", 
                description: "Schedule your shoot and process payment through our secure platform. No surprises or hidden fees.",
                icon: CreditCard 
              },
              { 
                step: "03", 
                title: "Receive Quality Content", 
                description: "Get professionally edited photos, videos, and marketing materials delivered directly to you.",
                icon: Award 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              What Our Users Say
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Thompson",
                role: "Property Manager",
                quote: "The quality of content has completely transformed our marketing approach. Properties are getting noticed faster than ever.",
                rating: 5
              },
              {
                name: "Sarah Martinez",
                role: "Real Estate Agent",
                quote: "ZeroVacancy has been a game-changer for my listings. The professional photos and tours help my properties stand out.",
                rating: 5
              },
              {
                name: "David Chen",
                role: "Content Creator",
                quote: "As a photographer, this platform has connected me with amazing clients. The process is streamlined and efficient.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex items-center mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 z-0">
          <GlowingEffect 
            blur={15}
            spread={25}
            glow={true}
            variant="default"
            disabled={false}
            movementDuration={2.8}
            borderWidth={2}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Elevate Your Property Marketing?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/90 mb-8"
            >
              Join our waitlist to be the first to access our network of top-tier real estate content creators.
            </motion.p>
            
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row max-w-md mx-auto gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              
              <ShimmerButton 
                type="submit" 
                className="px-6 py-3 bg-white text-blue-600 hover:bg-white/90"
                shimmerColor="rgba(59, 130, 246, 0.1)"
              >
                <span>Join Waitlist</span>
                <ArrowRight className="w-5 h-5 text-blue-600/90" />
              </ShimmerButton>
            </motion.form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">ZeroVacancy</h3>
              <p className="text-sm">Connecting properties with professional content creators</p>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Creators</a></li>
                <li><a href="#" className="hover:text-white transition-colors">For Property Managers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} ZeroVacancy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Dialog for after email submission */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">You've been added to our waitlist. We'll notify you when ZeroVacancy launches.</p>
            <button 
              onClick={() => setShowDialog(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// This component represents the search icon
const Search = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default HomePage;
