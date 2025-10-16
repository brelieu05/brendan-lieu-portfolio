import "./App.css";
import { useEffect, useState } from "react";
import sciton from "./assets/sciton-logo.jpg";
import laPena from "./assets/la-pena-logo.png";
import zotnFound from "./assets/zotnfound-logo.png";
import rateMyClub from "./assets/ratemyclub-page.png";
import fabflix from "./assets/fabflix-page.png";
import academicSearchEngine from "./assets/search-engine-page.png";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const roles = [
    "Full Stack Developer",
    "UCI Student",
    "Redbull Connoisseur",
    "Taekwondo Hobbyist",
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <header
        className="bg-gray-900 sticky top-0 z-50"
        style={{ paddingTop: "1rem" }}
      >
        <nav className="max-w-6xl mx-auto px-4 mobile-header">
          <div className="flex justify-between items-center py-6">
            <div className="text-xl font-bold text-white">BL.</div>

            <div className="flex gap-8 ">
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition-colors"
              >
                skills
              </a>
            </div>

          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  projects
                </a>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  skills
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section className="bg-gray-900 text-white">
        <div
          className="max-w-4xl hero-container px-4 sm:px-6 lg:px-8 mobile-hero"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold mb-6 text-blue-500">
              Brendan Lieu
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-white h-8 md:h-10 overflow-hidden">
              <span key={roleIndex} className="inline-block animate-fade-up">
                {roles[roleIndex]}
              </span>
            </h2>
                <div className="flex flex-row sm:flex-row gap-6 mobile-links">
                  <a
                    href="/Brendan_Lieu-Resume (2027).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-blue-300 transition-colors flex items-center gap-2"
                  >
                    <i className="fas fa-file-alt text-lg hover:text-blue-300 transition-colors"></i>
                    resume
                  </a>
              <a
                href="https://github.com/brelieu05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Visit Brendan's GitHub profile"
              >
                <i className="fab fa-github text-2xl hover:text-blue-300 transition-colors"></i>
              </a>
              <a
                href="https://linkedin.com/in/blieu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors"
                aria-label="Visit Brendan's LinkedIn profile"
              >
                <i className="fab fa-linkedin text-2xl hover:text-blue-300 transition-colors"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-wider" style={{ marginBottom: "2rem" }}>
            EXPERIENCES & PROJECTS
          </h2>
          <div className="projects-container">
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={sciton} alt="Sciton Logo" className="w-24 h-18 rounded-lg object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Sciton</h3>
                    <span className="text-sm text-gray-400">Jun 2025 – Sep 2025</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Software Engineering Intern</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Developed an internal profit-projection platform and programmed a super cool robot arm
                  </p>
                  <div className="flex gap-4">
                    <a href="https://sciton.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="Visit Sciton company website">
                      <i className="fa-solid fa-external-link-alt text-lg"></i>
                    </a>
                    <a href="https://sciton-roi-calculator-production.up.railway.app/roi-calculator/new" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="View Sciton ROI Calculator live demo">
                      <i className="fas fa-desktop text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* La Pena */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={laPena} alt="La Pena Logo" className="w-24 h-18 rounded-lg object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">La Pena</h3>
                    <span className="text-sm text-gray-400">Jan 2025 – Sep 2025</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Built and deployed internal management system that streamlined operations
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/ctc-uci/lpa" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="View La Pena project source code on GitHub">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=-3ABsaTQ_dk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors" aria-label="Watch La Pena project demo on YouTube">
                      <i className="fab fa-youtube text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ZotnFound */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={zotnFound} alt="ZotnFound Logo" className="w-24 h-18 rounded-lg object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">ZotnFound</h3>
                    <span className="text-sm text-gray-400">Sep 2024 – Present</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Built a campus-wide lost and found app with TypeScript and React Native, facilitating 100+ item reports and 50+ claims
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/icssc/zotnfoundclone/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="View ZotnFound project source code on GitHub">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://zotnfound.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors" aria-label="Visit ZotnFound live website">
                      <i className="fab fa-youtube text-lg"></i>
                      </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RateMyClub */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={rateMyClub} alt="RateMyClub Page Screenshot" className="w-24 h-18 rounded-lg object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">RateMyClub</h3>
                    <span className="text-sm text-gray-400">Jun 2024 – Oct 2024</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Deployed a responsive full-stack web app on AWS, enabling 100+ students to discover and review university clubs.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/brelieu05/ratemyclub-frontend/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="View RateMyClub project source code on GitHub">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a href="https://ratemyclub-frontend-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="Visit RateMyClub live website">
                      <i className="fas fa-external-link-alt text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fabflix */}
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={fabflix} alt="Fabflix Page Screenshot" className="w-24 h-18 rounded-lg object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Fabflix</h3>
                    <span className="text-sm text-gray-400">Jan 2025 – Apr 2025</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Built and deployed full-stack movie database app with Java, MySQL, Docker, and Apache Tomcat.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://www.youtube.com/playlist?list=PLEEduXwDGV8JwbnQ8bT6m811RYw8F2Or1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-300 transition-colors" aria-label="Watch Fabflix project demo playlist on YouTube">
                      <i className="fab fa-youtube text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors mobile-compact-project">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <img src={academicSearchEngine} alt="Academic Search Engine Page Screenshot" className="w-24 h-18 rounded-lg object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">Academic Search Engine</h3>
                    <span className="text-sm text-gray-400">Jan 2025 – Apr 2025</span>
                  </div>
                  <p className="text-sm text-blue-300 font-medium mb-3">Full Stack Developer</p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Built a search engine for a collection of school files using React and Python for web scraping and parsing.
                  </p>
                  <div className="flex gap-4">
                    <a href="https://github.com/christianacho/kaprestsun-cs121_A3" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors" aria-label="View Academic Search Engine project source code on GitHub">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-gray-900 mobile-skills">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-bold text-center mb-16 text-white uppercase tracking-wider"
            style={{ marginBottom: "2rem" }}
          >
            SKILLS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mobile-skills-grid">
            <div className="bg-gray-800 p-8 rounded-lg text-center mobile-skills-card">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Languages
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>JavaScript</p>
                <p>Java</p>
                <p>Python</p>
                <p>C/C++</p>
                <p>SQL</p>
                <p>HTML/CSS</p>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center mobile-skills-card">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Frameworks
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>React/React Native</p>
                <p>TypeScript</p>
                <p>Node.js</p>
                <p>Express.js</p>
                <p>FastAPI</p>
                <p>Flask</p>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center mobile-skills-card">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Cloud & Tools
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>AWS</p>
                <p>Google Cloud</p>
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>Git</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center mobile-skills-card">
              <h3 className="text-lg font-semibold mb-6 text-white">
                Databases
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>PostgreSQL</p>
                <p>MySQL</p>
                <p>BigQuery</p>
                <p>MongoDB</p>
                <p>Redis</p>
                <p>SQLite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 Brendan Lieu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
