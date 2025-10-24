import SectionDivider from "./SectionDevider";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-black py-20 px-6 md:px-20 text-white border-[#25213b]"
    >

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Educational <span className="text-cyan-400">Qualification</span>
      </h2>

      {/* Card */}
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#0a0d37] to-[#1b1f4b] border border-[#1b2c68a0] shadow-[0_0_25px_0_rgba(0,0,0,0.3)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
          Jahangirnagar University
        </h3>

        <p className="text-lg text-gray-300 mb-2">
          <span className="font-medium text-white">B.Sc. (Honors)</span> in Information and Communication Technology (ICT)
        </p>

        <p className="text-gray-400 italic mb-3">
          March 2022 – Present
        </p>

        <p className="text-gray-300">
          <span className="font-semibold text-cyan-400">CGPA:</span> 3.75 / 4.00 (Till 6th semester)
        </p>
      </div>
      <SectionDivider></SectionDivider>
    </section>
  );
}
