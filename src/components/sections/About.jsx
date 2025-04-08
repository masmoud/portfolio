export const About = () => {
  const frontendSkills = ["React", "Next.js", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "Express", "MongoDB"];

  const frontendIntegrationCoursework = [
    "HTML5 & CSS3",
    "Responsive Web Design",
    "JavaScript Fundamentals",
    "DOM Manipulation",
    "Front-End Frameworks (React)",
    "Web Accessibility (WCAG, ARIA)",
    "CSS Preprocessors (SASS)",
    "Git & Version Control",
    "SEO Basics for Developers",
    "Figma for Web Design",
    "API Integration",
  ];

  const salesforceCoursework = [
    "User Management & Security",
    "Reports & Dashboards",
    "Process Automation (Flows, Workflows)",
    "Data Modeling & Object Relationships",
    "Sales Cloud Fundamentals",
    "Service Cloud Essentials",
    "Data Import & Data Quality",
    "Validation Rules & Formula Fields",
    "Change Management & Sandbox Deployment",
    "Lightning App Builder",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me{" "}
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with skills in building scalable web applications and creating
            innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend </h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0-2px_8px_rgba(59,130,2246,0.2)] transition ">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend </h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0-2px_8px_rgba(59,130,2246,0.2)] transition ">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 mt-8">
          {" "}
          {/*md:grid-cols-2 */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {/* --- Formation 1 --- */}
              <li>
                <strong className="text-white">Front-End Web Developer</strong> –{" "}
                <span className="text-xs">OpenClassrooms (2023–2024)</span>
                <div className="text-sm mt-1 relative group">
                  <span className="underline cursor-pointer decoration-dotted">
                    Relevant Coursework
                  </span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {frontendIntegrationCoursework.slice(0, 3).map((course, key) => (
                      <li key={key}>{course}</li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400 italic mt-3">
                    Certified as <strong>Développeur Intégrateur Web</strong> (RNCP – Level 5,
                    France)
                  </p>

                  {/* Tooltip with full list */}
                  <div className="absolute top-full left-0 w-64 mt-2 p-4 bg-gray-800 rounded-xl text-sm text-gray-100 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <p className="font-semibold mb-2 text-white">More coursework:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      {frontendIntegrationCoursework.slice(3).map((course, key) => (
                        <li key={key}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              {/* --- Formation 2 --- */}
              <li>
                <strong className="text-white">Salesforce Administrator</strong> –{" "}
                <span className="text-xs">Trailhead by Salesforce (2021-2022)</span>
                <div className="text-sm mt-1 relative group">
                  <span className="underline cursor-pointer decoration-dotted">
                    Relevant Coursework
                  </span>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    {salesforceCoursework.slice(0, 3).map((course, key) => (
                      <li key={key}>{course}</li>
                    ))}
                  </ul>

                  {/* Tooltip */}
                  <div className="absolute top-full left-0 w-64 mt-2 p-4 bg-gray-800 rounded-xl text-sm text-gray-100 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    <p className="font-semibold mb-2 text-white">More coursework:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      {salesforceCoursework.slice(3).map((course, key) => (
                        <li key={key}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <p className="text-sm text-gray-400 italic">
              This section will be updated as soon as I gain professional experience in software
              development.
            </p>
            <div className="space-y-4 font-bold mb-4">
              <div>
                <h4 className="text-lg font-semibold"> Upcoming Experience </h4>
                <p className="text-sm">
                  Details will be added once professional experience is gained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
