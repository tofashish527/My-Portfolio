// src/components/Education.jsx
export default function Education() {
  return (
    <section
      id="education"
      className="bg-white py-20 px-6 md:px-20 text-center md:text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Educational <span className="text-cyan-500">Qualification</span>
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-2xl p-8 border-l-4 border-cyan-500">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Jahangirnagar University
        </h3>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-medium">B.Sc. (Honors)</span> in Information and Communication Technology (ICT)
        </p>
        <p className="text-gray-600 italic mb-3">
          March 2022 – Present
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">CGPA:</span> 3.75 / 4.00 (Till 6th semester)
        </p>
      </div>

      {/* Optionally add more education in the same format */}
    </section>
  );
}
