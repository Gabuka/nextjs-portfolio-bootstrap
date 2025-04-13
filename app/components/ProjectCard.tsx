import Image from 'next/image'

export default function ProjectCard({ title, description, image, link }: any) {
  return (
    <div className="card">
      <Image src={image} alt={title} width={600} height={350} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-2">
          Ver Projeto
        </a>
      </div>
    </div>
  )
}