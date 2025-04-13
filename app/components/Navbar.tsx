'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Gabriel Oka</Link>
        <div className="collapse navbar-collapse d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
          <li className="nav-item"><Link className="nav-link" href="/about">Sobre</Link></li>
          <li className="nav-item"><Link className="nav-link" href="/projects">Projetos</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contato</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}