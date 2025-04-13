import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Loja Monamozi',
      description: 'Implementação de loja virtual completa.',
      image: '/portfolio-1.png',
      link: 'https://monamozi.com',
    },
    {
      title: 'Terapeuta Carol Oliveira',
      description: 'Landing Page para venda de serviço terapêutico.',
      image: '/portfolio-2.png',
      link: 'https://carololiveirayu.com.br/',
    },
    {
      title: 'Escola Intuisom',
      description: 'Site institucional para informações sobre os cursos da escola.',
      image: '/portfolio-3.png',
      link: 'https://intuisom.com.br',
    },
  ]

  return (
    <section>
      <h2 className="h3 mb-4">Projetos</h2>
      <div className="row g-4">
        {projects.map((p, i) => (
          <div className="col-md-4 project-item" key={i}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </section>
  )
}