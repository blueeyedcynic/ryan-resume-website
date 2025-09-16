"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Mail, ChevronRight, Github } from 'lucide-react';

const ResumeWebsite = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Project data - easy to add new projects here
  const projects = [
    {
      id: 1,
      title: "AI Powered Dynamic Feature Request Form",
      description: "Feature request forms can be static and boring. I wanted to jazz it up by leveraging an LLM for dynamic questions. In this project, I have a simple feature request wizard that walks a user through submission. Their initial responses along with their provided information is sent to an <strong>LLM for generating additional, dynamic questions</strong>. All responses are published to a centralized Google Sheet.",
      link: "https://feature-request-wizard.vercel.app/",
      tech: ["Anthropic API / LLM Integration", "Google Sheets API"]
    },
    {
      id: 2,
      title: "AI Powered Virtual Cocktail Crafter",
      description: "I'm a home cocktail maker. A lot of times I like to find recipes based on what I have on hand, starting with the ingredeints available and getting creative. The Virtual Cocktail Crafter accepts user inputs on available ingredients then <strong>dynamically generates a prompt for the LLM</strong> to either provide recipes or a curated cocktail menu. Recipes can be shared via SMS on mobile.",
      link: "https://create-cocktail-app.vercel.app/",
      tech: ["Anthropic API", "LLM Integration with Dynamic Prompting"]
    },
    {
      id: 3,
      title: "Austin Concerts Dashboard",
      description: "I love going to concerts. In this project I use a web scraper to crawl websites and gather concert information. The concerts are then categorized by venue and my favorite venues are the highlight. This was a straight vibe coding exercise and required a lot of testing and debugging to get things in place, including a complete <strong>debugging tool / UI for testing different sources</strong> for the data.",
      link: "https://austin-concert-dash.vercel.app/",
      tech: ["Web Scraping", "Debugging Tools"]
    },
        {
      id: 4,
      title: "Woodland Park Tiki Route",
      description: "Growing up in Miami, snow was not a thing. So when we decided to spend more time in Colorado, there was some nervousness about road conditions and going to and from the mountains. The Woodland Park Tiki Route provides an <i>incredibly modern, sleek design</i> for easily seeing the road conditions on the driving route, pulling live data from a publicly available <strong>road conditions API.</strong>",
      link: "https://woodland-park-tiki-route.vercel.app/",
      tech: ["Road Conditions API", "Tiki Vibes"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'profile', 'projects'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-gray-900">Ryan Andrews</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'profile', label: 'About' },
                { id: 'projects', label: 'Projects' }
              ].map(section => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'bg-green-100 text-green-700 font-medium' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Ryan Andrews
                </h1>
                <p className="text-2xl text-green-600 font-medium">
                  Product Management
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  Building exceptional products and leading cross-functional teams in fast-paced, high-growth environments.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/ryan-andrews-30518512/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  View Projects
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-4 bg-gray-300 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-medium"><img src='/images/r-1.jpg' /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Product leader with 15 years of experience building B2B enterprise software and leading cross-functional teams in fast-paced, high-growth environments. Skilled in managing highly technical products and platform capabilities. Experience taking products from 0 to 1.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Strong track record of simplifying complex workflows, leading cross-functional teams, and aligning infrastructure initiatives with product strategy. Thrive in environments that demand clarity, autonomy, and customer focus.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Core Strengths</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "B2B Enterprise Software",
                    "Cross-functional Leadership", 
                    "0-to-1 Product Development",
                    "APIs, Platforms, and Integrations",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="w-48 h-48 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm"><img src='/images/r-2.jpg' /></span>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="w-70 h-32 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm"><img src='/images/rk-1.jpg' /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-14 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Exploratory Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Side projects where I explore new technologies, experiment with ideas, learn, and build practical (or fun) solutions to real problems.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex linklink items-center text-green-600 hover:text-green-700 font-medium group"
                      >
                        <strong>View Project</strong>
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>

                  <p className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: project.description }} />
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md">
              <span className="text-gray-600">More projects coming soon...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Always open to discussing product strategy, new opportunities, or just chatting about great products.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/ryan-andrews-30518512/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
              
              <a 
                href="mailto:andrews.ryan.c@gmail.com"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                andrews.ryan.c@gmail.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Ryan Andrews. Built with React and deployed on Vercel.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;