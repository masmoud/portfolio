import React from "react";
import ecom from "../assets/ecom.png";
import mern from "../assets/mern.png";

const projects = [
  {
    title: "MERN AUth",
    description: "An authentification application with the MERN stack",
    technologies: ["React Router v7", "TypeScript", "Express", "MongoDB", "TailwindCSS", "Zustand"],
    imageUrl: mern, // Placeholder pour l'image
    demoUrl: "#", // Placeholder pour le lien de la démo
    repoUrl: "https://github.com/masmoud/mern-auth", // Placeholder pour le lien du repo GitHub
  },
  {
    title: "My Ecommerce",
    description: "A modern e-commerce application ",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Stripe"],
    imageUrl: ecom, // Placeholder pour l'image
    demoUrl: "https://my-ecom-seven.vercel.app/", // Placeholder pour le lien de la démo
    repoUrl: "https://github.com/masmoud/ecom-project", // Placeholder pour le lien du repo GitHub
  },
];

const ProjectCard = ({ title, description, technologies, imageUrl, demoUrl, repoUrl }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex flex-col justify-between">
    {/* Image plus grande */}
    <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {technologies.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-center space-x-6 items-center mt-auto">
      {/* Lien vers la démo */}
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors my-2">
        Demo
      </a>
      {/* Lien vers le repo GitHub */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors my-2">
        Repo
      </a>
    </div>
  </div>
);

export const ProjectsList = () => (
  <>
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
        demoUrl={project.demoUrl}
        repoUrl={project.repoUrl}
      />
    ))}
  </>
);
