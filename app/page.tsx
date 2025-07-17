
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCtaPulse, setShowCtaPulse] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => {
      setShowCtaPulse(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Who is this coaching for?",
      answer: "This coaching is designed for mid-to-senior professionals and leaders who want to enhance their leadership effectiveness, build emotional intelligence, and lead with authentic purpose. Whether you're a team leader, executive, or aspiring leader, this program will help you unlock your potential."
    },
    {
      question: "What can I expect from coaching?",
      answer: "You can expect a personalized, empathetic approach that combines practical tools with deep self-reflection. We'll work together to clarify your vision, develop emotional intelligence, and create actionable strategies for authentic leadership. Sessions are interactive, supportive, and focused on your specific goals."
    },
    {
      question: "How are sessions delivered?",
      answer: "Sessions are conducted virtually via video calls, making it convenient for busy professionals. Each session is 60-90 minutes, and we typically meet bi-weekly or monthly depending on your needs. All sessions are confidential and tailored to your schedule and preferences."
    },
    {
      question: "How long does the coaching process take?",
      answer: "The coaching journey typically spans 3-6 months, depending on your goals and desired outcomes. We'll create a customized timeline during our initial consultation to ensure you achieve sustainable, lasting transformation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-pacifico text-blue-600">Niti Vohra</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Process</a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Benefits</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Testimonials</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">FAQ</a>
            </div>
            <Link href="https://calendly.com/coachnitti"><button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
              Book Free Call
            </button></Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20office%20environment%20with%20soft%20natural%20lighting%2C%20clean%20minimalist%20workspace%20with%20plants%20and%20books%2C%20calming%20atmosphere%20perfect%20for%20leadership%20coaching%20and%20personal%20development%2C%20warm%20and%20welcoming%20professional%20setting%20with%20subtle%20blue%20and%20neutral%20tones&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Lead with <span className="text-blue-600">Clarity</span>, <span className="text-indigo-600">Emotional Intelligence</span> & <span className="text-blue-800">Purpose</span>
              </h1>
              <p className={`text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed transition-all duration-500 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Niti Vohra helps leaders thrive through empathy, self-awareness, and practical strategy — enhancing leadership impact and fulfillment.
              </p>
              <Link href="https://calendly.com/coachnitti"><button className={`bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer transform hover:scale-105 ${showCtaPulse ? 'animate-pulse' : ''}`}>
                Book a Free Clarity Call
              </button></Link>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="https://public.readdy.ai/ai/img_res/eb40f299-edaa-40f6-adb3-183a5e8456b1.png"
                  alt="Niti Vohra - Leadership Coach"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Available for coaching</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://static.readdy.ai/image/4b67f943977a668aa3b33e7990cccf8c/f0d9837055bffb8f4cbabe505806f4fd.png"
                alt="Niti Vohra Professional"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Niti</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Niti is an Organisational Psychologist and Coach blending empathy and strategic tools to help leaders grow with clarity and confidence.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With years of experience in leadership development and emotional intelligence coaching, Niti specializes in helping mid-to-senior professionals unlock their potential and lead with authentic purpose.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Leaders Coached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My 3-Step Coaching Process</h2>
            <p className="text-xl text-gray-600">A proven methodology for sustainable leadership growth</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in-up hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarify Your Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover your authentic leadership style and define clear, meaningful goals that align with your values and aspirations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in-up animation-delay-200 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Align with Emotional Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop self-awareness, empathy, and emotional regulation skills to enhance your leadership effectiveness and relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in-up animation-delay-400 hover:transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lead with Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement strategies and tools to lead authentically, make confident decisions, and create lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Working Together</h2>
            <p className="text-xl text-gray-600">Transform your leadership and unlock your full potential</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 animate-fade-in-up">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale">
                <i className="ri-eye-line text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Self-Awareness</h3>
                <p className="text-gray-600">Understand your strengths, blind spots, and leadership triggers to make conscious choices.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale animation-delay-100">
                <i className="ri-heart-line text-xl text-indigo-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lead with Empathy</h3>
                <p className="text-gray-600">Develop deeper connections and inspire others through authentic, empathetic leadership.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale animation-delay-200">
                <i className="ri-target-line text-xl text-blue-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Set Values-Based Goals</h3>
                <p className="text-gray-600">Align your objectives with your core values for sustained motivation and fulfillment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale animation-delay-300">
                <i className="ri-lightbulb-line text-xl text-green-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improve Decision-Making</h3>
                <p className="text-gray-600">Make confident, strategic decisions that benefit both you and your organization.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale animation-delay-400">
                <i className="ri-medal-line text-xl text-purple-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Increase Confidence</h3>
                <p className="text-gray-600">Build unshakeable confidence in your abilities and leadership presence.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 animate-fade-in-up animation-delay-500">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 animate-icon-scale animation-delay-500">
                <i className="ri-compass-line text-xl text-orange-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find Your Purpose</h3>
                <p className="text-gray-600">Discover and live your authentic purpose, creating meaningful impact in your work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real transformations from real leaders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Priyesh Menon</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "I have enjoyed and immensely benefited from the sessions. Her intuitive capabilities and perseverance support lasting growth."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-fade-in-up animation-delay-200 hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Daisy Arora</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "As a single working mother, I appreciated her resources and practical tools. Niti was an accountability partner, ally, and coach."
              </p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about coaching with Niti</p>
          </div>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                  <i className={`ri-arrow-down-s-line text-2xl text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 animate-gradient-pulse">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Lead with Purpose?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the first step towards transformational leadership. Book your free clarity call today and discover how coaching can unlock your authentic leadership potential.
          </p>
          <Link href="https://calendly.com/coachnitti"><button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg whitespace-nowrap cursor-pointer transform hover:scale-105 animate-subtle-pulse">
            Book a Free Clarity Call
          </button></Link>
          <p className="text-blue-100 mt-4 text-sm">No commitment required • 30-minute consultation</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-pacifico text-blue-400 mb-4">Niti Vohra</h3>
              <p className="text-gray-300 leading-relaxed">
                Leadership & Emotional Intelligence Coach helping professionals lead with clarity, empathy, and purpose.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">About</a>
                <a href="#process" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">Coaching Process</a>
                <a href="#benefits" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">Benefits</a>
                <a href="#testimonials" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">Testimonials</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <p className="text-gray-300 mb-2">Ready to start your leadership journey?</p>
              <Link href="https://calendly.com/coachnitti"><button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Book Free Call
              </button></Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400"> 2024 Niti Vohra. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes iconScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradientPulse {
          0%, 100% {
            background-size: 100% 100%;
          }
          50% {
            background-size: 110% 110%;
          }
        }

        @keyframes subtlePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-icon-scale {
          animation: iconScale 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-pulse {
          animation: gradientPulse 4s ease-in-out infinite;
        }

        .animate-subtle-pulse {
          animation: subtlePulse 3s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
