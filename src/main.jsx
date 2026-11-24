import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2,
  Cpu, Smartphone, Database, Globe, Terminal, Sparkles, ExternalLink
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'Karen',
    type: 'AI · ANDROID AUTOMATION',
    featured: true,
    description: 'A personal AI assistant designed to understand requests, plan actions, and automate Android workflows—with user confirmation before execution.',
    details: 'React Native · Node.js · Express · MongoDB · Groq · Kotlin · Accessibility Service',
    points: ['AI-assisted action planning', 'Android app discovery and UI interaction', 'Conversation history and file-aware prompts'],
    github: 'https://github.com/sundram1343/Karen',
    status: 'IN DEVELOPMENT'
  },
  {
    number: '02',
    name: 'AgriSense',
    type: 'MACHINE LEARNING · FULL STACK',
    description: 'A plant-care platform that combines image-based disease detection with weather-aware watering recommendations.',
    details: 'React · Node.js · MongoDB · FastAPI · TensorFlow · MobileNetV2',
    points: ['Plant disease classification using a trained model', 'Weather-informed watering alerts', 'Soil-type and last-watering based scheduling'],
    github: 'https://github.com/sundram1343/AgriSense',
    status: 'PROJECT'
  },
  {
    number: '03',
    name: 'EcoQuest',
    type: 'FULL-STACK WEB APPLICATION',
    description: 'A gamified sustainability platform that turns everyday eco-friendly actions into measurable progress and community engagement.',
    details: 'React · Vite · Node.js · Express · MongoDB · JWT',
    points: ['Quest and points-based progression', 'Leaderboard and user impact tracking', 'Profile and authentication flows'],
    github: 'https://github.com/sundram1343/EcoQuest',
    status: 'PROJECT'
  },
  {
    number: '04',
    name: 'Donor Fun House',
    type: 'MOBILE · TRANSPARENCY',
    description: 'A donation-focused mobile app concept built around making contributions and their impact easier to follow.',
    details: 'React Native · JavaScript',
    points: ['Mobile-first donation experience', 'Focus on transparent contribution journeys'],
    github: 'https://github.com/sundram1343/DonorFunHouse',
    status: 'PROJECT'
  }
];

const skills = [
  { icon: Code2, title: 'Frontend', items: 'React, React Native, JavaScript, HTML, CSS' },
  { icon: Terminal, title: 'Programming', items: 'C++, Data Structures & Algorithms, OOP' },
  { icon: Database, title: 'Backend & Data', items: 'Node.js, Express, MongoDB, REST APIs' },
  { icon: Cpu, title: 'AI & ML', items: 'Groq API, Python, FastAPI, TensorFlow' },
  { icon: Globe, title: 'Tools', items: 'Git, GitHub, Vite, Postman' },
  { icon: Smartphone, title: 'Platforms', items: 'Android, Kotlin, Accessibility Services' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">S</span><span>SUNDRAM<span className="brand-dot">.</span></span></a>
          <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="mailto:sundramsharma2901@gmail.com">Let's talk <ArrowUpRight size={15}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <h1>Building useful<br/><span className="gradient-text">things with code.</span></h1>
            <p className="hero-sub">I'm <strong>Sundram Sharma</strong> — a software developer interested in full-stack engineering, mobile experiences, and AI-powered products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16}/></a>
              <a className="button button-quiet" href="mailto:sundramsharma2901@gmail.com"><Mail size={16}/> Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/sundram1343" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
              <a href="https://www.linkedin.com/in/sundram-sharma-52559724a/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              <a href="https://www.codechef.com/users/sundram1343" target="_blank" rel="noreferrer"><Code2 size={17}/> CodeChef <ArrowUpRight size={13}/></a>
              <a href="https://leetcode.com/u/sundram1343/" target="_blank" rel="noreferrer"><Terminal size={17}/> LeetCode <ArrowUpRight size={13}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-top"><span>BUILD.LOG</span><span className="window-dots"><i/><i/><i/></span></div>
            <div className="code-window">
              <div className="code-line"><span className="ln">01</span><span className="purple">const</span> developer = {'{'}</div>
              <div className="code-line indent"><span className="ln">02</span>name: <span className="green">'Sundram Sharma'</span>,</div>
              <div className="code-line indent"><span className="ln">03</span>focus: <span className="green">'Full-stack + AI'</span>,</div>
              <div className="code-line indent"><span className="ln">04</span>learning: <span className="green">'Every day'</span>,</div>
              <div className="code-line indent"><span className="ln">05</span>mindset: <span className="green">'Build. Iterate. Ship.'</span></div>
              <div className="code-line"><span className="ln">06</span>{'}'};</div>
              <div className="code-gap"/>
              <div className="code-line"><span className="ln">07</span><span className="muted">// Currently building ideas into products</span></div>
              <div className="code-line"><span className="ln">08</span><span className="blue">while</span> (curious) {'{'}</div>
              <div className="code-line indent"><span className="ln">09</span>buildSomething();</div>
              <div className="code-line"><span className="ln">10</span>{'}'} <span className="cursor">▍</span></div>
            </div>
            <div className="visual-footer"><span><span className="green-dot"/> AVAILABLE FOR OPPORTUNITIES</span><span>INDIA · IST</span></div>
            <div className="float-chip chip-one"><Sparkles size={14}/> AI + Product</div>
            <div className="float-chip chip-two"><Code2 size={14}/> Full-stack</div>
          </div>
          <a className="scroll-note" href="#work"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section section container" id="work">
          <div className="section-heading">
            <div><div className="eyebrow">SELECTED WORK / 2024—2026</div><h2>Projects that <span className="gradient-text">solve problems.</span></h2></div>
            <p>A few things I've built while exploring software, AI, and real-world problem solving.</p>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.number}>
                <div className="project-number">{p.number}</div>
                <div className="project-main">
                  <div className="project-meta"><span>{p.type}</span>{p.featured && <span className="featured-tag">FLAGSHIP</span>}</div>
                  <h3>{p.name}</h3>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-points">{p.points.map(point => <span key={point}><span className="tiny-arrow">↳</span>{point}</span>)}</div>
                  <div className="tech-line">{p.details}</div>
                </div>
                <div className="project-side">
                  <span className="status">{p.status}</span>
                  <a className="project-link" href={p.github} target="_blank" rel="noreferrer">View source <ArrowUpRight size={17}/></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Curiosity drives<br/><span className="gradient-text">the build.</span></h2></div>
            <div className="about-copy">
              <p>I'm a B.Tech student at <strong>Maharaja Surajmal Institute of Technology</strong>, focused on becoming a stronger software engineer by building projects and sharpening my fundamentals.</p>
              <p>I enjoy working across the stack — from shaping an interface to designing APIs and integrating intelligent features. I care about understanding how things work, not just getting them to run.</p>
              <div className="education-card"><div className="edu-icon"><Code2 size={20}/></div><div><strong>B.Tech — Computer Science / IT</strong><span>Maharaja Surajmal Institute of Technology</span><span>Expected graduation: 2028 · CGPA: 8.71</span></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section section container" id="skills">
          <div className="section-heading"><div><div className="eyebrow">MY TOOLKIT</div><h2>Technologies I <span className="gradient-text">work with.</span></h2></div><p>Tools and technologies I use to turn ideas into working software.</p></div>
          <div className="skills-grid">
            {skills.map(({icon: Icon, title, items}) => <div className="skill-card" key={title}><div className="skill-icon"><Icon size={19}/></div><h3>{title}</h3><p>{items}</p></div>)}
          </div>
        </section>

        <section className="contact-section section container" id="contact">
          <div className="contact-panel">
            <div className="eyebrow"><span className="pulse"/> HAVE A PROJECT OR OPPORTUNITY?</div>
            <h2>Let's build something<br/><span className="gradient-text">meaningful.</span></h2>
            <p>I'm always interested in learning, collaborating, and taking on challenging engineering problems.</p>
            <a className="button button-primary" href="mailto:sundramsharma2901@gmail.com">Say hello <ArrowUpRight size={16}/></a>
            <div className="contact-orbit orbit-a"/><div className="contact-orbit orbit-b"/>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home"><span className="brand-mark">S</span><span>SUNDRAM<span className="brand-dot">.</span></span></a>
        <span>Designed & built with intention.</span>
        <span>© {new Date().getFullYear()} Sundram Sharma</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
