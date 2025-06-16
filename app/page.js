import SectionTitle from "@/components/sectionTitle";
import ProjectCard from "@/components/projectCard";
import projects from "@/data/projects";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-4 sm:px-6 md:px-12 py-8 overflow-x-hidden">
      <SectionTitle>پروژه‌ها</SectionTitle>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            tech={project.tech}
            type={project.type}
            link={project.link}
          />
        ))}
      </div>
      
    </main>
  );
}
