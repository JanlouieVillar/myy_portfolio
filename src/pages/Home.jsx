import profilePic from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="max-w-xl w-full text-center bg-slate-900/60 border border-slate-800 rounded-2xl p-10 shadow-xl">
        <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden border border-slate-700 mb-6">
          <img src={profilePic} alt="Jan-Louie Villar" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Jan-Louie Villar
        </h1>

        <p className="text-blue-400 mb-4">Aspiring Web Developer</p>

        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          I build modern, responsive web applications with a focus on clean UI,
          usability, and maintainable code. I enjoy learning new technologies
          and turning ideas into real products.
        </p>

        <div className="mt-8 text-sm text-gray-500">
           Explore my work 
        </div>
      </div>
    </section>
  );
}
