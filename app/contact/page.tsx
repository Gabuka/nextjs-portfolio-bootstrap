import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="col-md-4">
      <h2 className="h3 mb-3">Contato</h2>
      <form action="https://formsubmit.co/seuemail@email.com" method="POST" className="mb-4">
        <div className="mb-3">
          <input type="text" name="name" placeholder="Nome" className="form-control" required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" placeholder="Email" className="form-control" required />
        </div>
        <div className="mb-3">
          <textarea name="message" placeholder="Mensagem" className="form-control" rows={4} required></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Enviar</button>
      </form>

      <div className="d-flex gap-3">
        <a href="https://github.com/gabuka" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6 text-gray-300 hover:text-white" /></a>
        <a href="https://linkedin.com/in/gabriel-oka" target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white" /></a>
      </div>
    </section>
  )
}