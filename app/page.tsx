import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <div className="text-center backdrop-blur-md bg-white/5 p-8 rounded-2xl shadow-xl max-w-lg w-full border border-white/10">
        <Image
          src="/profile.jpg" // make sure to add this to your public folder
          alt="Rithvik's Profile Picture"
          width={100}
          height={100}
          className="mx-auto rounded-full mb-4 border-2 border-sky-500"
        />
        <h1 className="text-4xl font-bold tracking-tight text-sky-400 mb-2">
          Hi, I’m Rithvik
        </h1>
        <p className="text-base text-gray-300">
          A second-year Computer Science student at UCLA passionate about building
          clean, impactful software. I love working with AI, design, and full-stack
          dev. Welcome to my portfolio!
        </p>
      </div>
    </main>
  );
}
