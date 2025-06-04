// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">Artist profile page</h3>
//               <p className="text-gray-400 mb-4">
//                 A simple artist profile page that showcases the artist's work,
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">Artist profile page</h3>
//               <p className="text-gray-400 mb-4">
//                 A simple artist profile page that showcases the artist's work,
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">Artist profile page</h3>
//               <p className="text-gray-400 mb-4">
//                 A simple artist profile page that showcases the artist's work,
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
//               <h3 className="text-xl font-bold mb-2">Artist profile page</h3>
//               <p className="text-gray-400 mb-4">
//                 A simple artist profile page that showcases the artist's work,
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["React", "Node.js", "AWS"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Virtual Memory Management Simulator */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Virtual Memory Management Simulator
              </h3>
              <p className="text-gray-400 mb-4">
                Simulated a paging-based virtual memory system with page tables,
                load/store logic, page faults, and FIFO page replacement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Operating Systems"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Parallel Matrix Operations */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Parallel Matrix Operations
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a multithreaded matrix calculator using pthreads to
                perform addition and multiplication with synchronized results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "pthreads", "Multithreading"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Custom Shell */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Custom Shell with Extensions
              </h3>
              <p className="text-gray-400 mb-4">
                Built a shell that supports aliasing, background execution (&),
                conditional commands (&&, ||), redirection (2&lt;), and script
                handling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Unix", "Shell Programming"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Voting Pattern Clustering App */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Voting Pattern Clustering App
              </h3>
              <p className="text-gray-400 mb-4">
                Analyzed Israeli election data and built a clustering model with
                Streamlit for visualizing voting behaviors across cities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Streamlit", "Data Analysis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Artists Exhibition Platform */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Artists Exhibition Platform
              </h3>
              <p className="text-gray-400 mb-4">
                Developing a full-stack platform enabling artists to register
                for exhibitions and admins to manage submissions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Full Stack"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Matching Card Game */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">Matching Card Game</h3>
              <p className="text-gray-400 mb-4">
                Designed a browser-based memory game with card-flip mechanics
                and visual feedback using vanilla JavaScript.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* http*/}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                HTTP Server with Thread Pool{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                Implemented a multithreaded HTTP server handling GET requests,
                file serving, and error responses using a thread pool.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "pthreads"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
