import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
    
      <div className="mb-4">
        <Image
          src="/profile.jpg" 
          alt="Minha foto"
          width={400}  
          height={400}
          className="rounded-full"
        />
      </div>
  
      <h1 className="text-4xl font-bold">Olá, eu sou o Gabriel Oka</h1>
      <p className="text-lg mt-4">Entusiasta em desenvolver soluções para empresas com web design e programação. WordPress, HTML, CSS e JavaScript. 💙🚀</p>
    </main>
  )
}