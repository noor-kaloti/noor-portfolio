// import { RevealOnScroll } from "../RevealOnScroll";

// export const About = () => {
//   const FrontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
//   const BackendSkills = ["Node.js", "python", "java", "c++", "C"];
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-3xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             About Me
//           </h2>
//           <div className="  rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
//             <p className="text-gray-300 mb-6">
//               {/* I'm a curious and creative developer who loves building clean,
//               simple, and useful digital experiences. Whether I'm working on a
//               new project or learning something new, I enjoy solving problems
//               and making ideas come to life with code. Outside of tech, I enjoy
//               learning languages, exploring new cultures, and working on fun
//               side projects. */}
//               I'm a third-year Software Engineering student at Azrieli College
//               of Engineering with a GPA of 93.44. I enjoy developing software
//               that solves real-world problems and have hands-on experience with
//               system-level programming, web development, and data analysis. I'm
//               passionate about mentoring, language learning, and building
//               inclusive tech communities.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {FrontendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {BackendSkills.map((tech, key) => (
//                     <span
//                       key={key}
//                       className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//             <div className="rounded-xl p-6  border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4">👩‍🎓 Education</h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-4">
//                 <li>
//                   <strong>
//                     B.Sc. in Software Engineering – Azrieli College of
//                     Engineering Jerusalem (2022 – 2026)
//                   </strong>
//                 </li>
//                 <li>
//                   GPA: 93.44. Completed courses include Algorithms, C/C++
//                   Programming, Operating Systems, Object-Oriented Development.
//                 </li>
//               </ul>
//             </div>
//             <div className="rounded-xl p-6  border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4"> 💼 Experiences</h3>
//               <div className="space-y-4 text-gray-300">
//                 <div>
//                   <h4 className="font-semibold">
//                     software engineer intern at xyz (2023 - Present)
//                   </h4>
//                   <p>
//                     Working on a team to develop and maintain web applications
//                     using React and Node.js. Focused on improving user
//                     experience and performance.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold">
//                     software engineer intern at abc (2022 - 2023)
//                   </h4>
//                   <p>
//                     Working on a team to develop and maintain web applications
//                     using React and Node.js. Focused on improving user
//                     experience and performance.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const FrontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const BackendSkills = ["C", "C++", "Python", "Java", "Node.js"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a third-year Software Engineering student at Azrieli College
              of Engineering with a GPA of 93.44. I enjoy developing software
              that solves real-world problems and have hands-on experience with
              system-level programming, web development, and data analysis. I'm
              passionate about mentoring, language learning, and building
              inclusive tech communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {FrontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">👩‍🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-8">
                <li>
                  <strong>
                    B.Sc. in Software Engineering – Azrieli College of
                    Engineering Jerusalem (2022 – 2026)
                  </strong>
                </li>
                <li>
                  GPA: 93.44. Completed courses include Algorithms, C/C++
                  Programming, Operating Systems, Object-Oriented Development.
                </li>
              </ul>
              <h3 className="text-xl font-bold mb-4 "> 🌍 languages</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>Arabic- Native </strong>
                </li>
                <li>
                  <strong>Hebrew- Fluent</strong>
                </li>
                <li>
                  <strong>English- Fluent</strong>
                </li>
              </ul>
            </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">👩‍🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>
                    B.Sc. in Software Engineering – Azrieli College of
                    Engineering Jerusalem (2022 – 2026)
                  </strong>
                </li>
                <li>
                  GPA: 93.44. Completed courses include Algorithms, C/C++
                  Programming, Operating Systems, and Object-Oriented
                  Development.
                </li>
              </ul>
              <h3 className="text-xl font-bold mb-4 mt-8">🌍 Languages</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Arabic</strong> – Native
                </li>
                <li>
                  <strong>Hebrew</strong> – Fluent
                </li>
                <li>
                  <strong>English</strong> – Fluent
                </li>
              </ul>
              <h3 className="text-xl font-bold mb-4 mt-8">
                🤖 Additional Training
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>AI in Software Development (2024 – 2025)</strong>
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Experience & Volunteering
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Mentor – QueenB (2024 – Present)
                  </h4>
                  <p>
                    Guiding young girls in JavaScript and HTML, inspiring the
                    next generation of women in tech.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Budget & Control Assistant – Ministry of Labor (2024 –
                    Present)
                  </h4>
                  <p>
                    Supporting daycare programs with data analysis, budgeting,
                    and internal system work.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Volunteer – Blend.Ar (2023 – Present)
                  </h4>
                  <p>
                    Teaching Jewish Arabic and facilitating cultural exchange
                    and community learning.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Teaching Assistant – Azrieli College (2023)
                  </h4>
                  <p>
                    Provided math and physics support for preparatory students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
