"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Mail, ChevronRight, Github } from 'lucide-react';

const ResumeWebsite = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Project data - easy to add new projects here
  const projects = [
    {
      id: 1,
      title: "LLM Prompt Library - Drive Adoption and Effecitveness",
      description: "This web app stores my own personal prompt library AND showcases ways for teams to collaborate on and improve adoption of Generative AI within the context of a larger organzation.",
      details: "Structure prompts with pre-set components, company context, goals, and team specific intitiatives. Track and rate versions. Collaborate on improvements.",
      link: "https://ryans-prompt-library.vercel.app/",
      tech: ["Prompt Engineering", "PostgreSQL", "User Focused Design"],
      screenshot: "/images/pl-app.png"
    },
    {
      id: 2,
      title: "AI Powered Weekday Happy Hour Tracker - Vibes Over Everything",
      description: "This web app gives users easy ways to find weekday food and drink specials in Austin by vibe, area, and more.",
      details: "Users can do traditional search or 'describe their vibe' for dynamic suggestions powered by Claude via the Anthropic API. The app's admin module also has analytical agent workflows to automatically analyze user input and suggest new features or content additions.",
      link: "https://austin-weekday-happy-hours.vercel.app/",
      tech: ["Anthropic API / LLM Integration", "PostgreSQL", "Dynamic Prompting and Curated Responses", "Analytical Agent Workflow"],
      screenshot: "/images/hh-app.jpg"
    },
    {
      id: 3,
      title: "AI Powered Dynamic Feature Request Form",
      description: "Feature request forms can be static and boring. I wanted to jazz it up by leveraging an LLM for dynamic questions. In this project, I have a simple feature request wizard that walks a user through submission. But there's a twist...",
      details: "Initial responses along with user provided information are sent to an LLM for generating additional, targeted questions based on the data to that point. All final responses are published to a centralized Google Sheet.",
      link: "https://feature-request-wizard.vercel.app/",
      tech: ["Anthropic API / LLM Integration", "Google Sheets API"],
      screenshot: "/images/wizard-app.jpg"
    },
      {
      id: 4,
      title: "AI Powered Virtual Cocktail Crafter",
      description: "I'm a home cocktail maker. A lot of times I like to find recipes based on what I have on hand, starting with the ingredeints available and getting creative.",
      details: "The Virtual Cocktail Crafter accepts user inputs on available ingredients then dynamically generates a prompt for the LLM to either provide recipes or a curated cocktail menu. Recipes can be shared via SMS on mobile.",
      link: "https://create-cocktail-app.vercel.app/",
      tech: ["Anthropic API / LLM Integration", "Dynamic Prompt Creation"],
      screenshot: "/images/cocktail-app.jpg"
    },
    {
      id: 5,
      title: "Austin Concerts Dashboard",
      description: "I love going to concerts. In this project I use a web scraper to crawl websites and gather concert information. The concerts are then categorized by venue and my favorite venues are the highlight.",
      details: " This was a straight vibe coding exercise and required a lot of testing and debugging to get things in place, including a complete debugging tool / UI for testing different sources for the data.",
      link: "https://austin-concert-dash.vercel.app/",
      tech: ["Web Scraping", "Debugging Tools"],
      screenshot: "/images/concerts-app.jpg"
    },
        {
      id: 6,
      title: "Woodland Park Tiki Route",
      description: "Growing up in Miami, snow was not a thing. So when we decided to spend more time in Colorado, there was some nervousness about road conditions and going to and from the mountains. The Woodland Park Tiki Route provides a quick view of road conditions on the driving route, pulling live data from a publicly available road conditions API.",
      details: "Check out the VERY sleek and modern UI here. Great stuff.",
      link: "https://woodland-park-tiki-route.vercel.app/",
      tech: ["Road Conditions API", "Tiki Vibes"],
      screenshot: "/images/tiki-app.jpg"
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
                  B2B SaaS | Data, Platform, APIs, AI | Customer Obsessed
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
                  View Exploratory Projects
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
                  Hey, I'm Ryan. I am a product leader with 13 years of experience in B2B SaaS. I lead vision, strategy, and execution in fast-paced, high-growth environments. I'm skilled in customer engagment and love forming relationships with users and prospects. I've managed highly technical products, scaled platform capabilities at growth-stage companies, and taken new products from 0 to 1.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  I have a strong track record of mentoring product manegers and designers. I love diving deep into technical initiatives with engineers. I thrive in environments that demand <strong>ownership, clarity, and customer obsession.</strong>
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  I live in Austin, Texas with my wife Katie. But, you may find us roaming around the mountains in Colorado or visiting family back in Miami.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Core Strengths</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "B2B / Enterprise Software",
                    "Strategic Roadmaps",
                    "Customer Engagement and Discovery",
                    "Cross-functional Leadership", 
                    "0-to-1 Product Development",
                    "AI, APIs, Platforms, and Integrations",
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
                <div className="w-70 h-70 bg-gray-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
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
              Side projects where I explore new technologies, experiment with ideas, learn, and build practical (or just fun) solutions to real problems.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Screenshot Section */}
                  <div className="md:col-span-3 bg-gray-100 flex items-center justify-center min-h-[280px]">
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <img 
                            src={project.screenshot} 
                            alt={`${project.title} screenshot`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
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
                    
                    <p className="text-gray-700 leading-relaxed mb-3 font-medium">
                      {project.description}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      <strong>{project.details}</strong>
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
                      >
                        View Live Project
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
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