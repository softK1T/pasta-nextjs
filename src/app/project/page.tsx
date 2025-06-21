export default function ProjectPage() {
  return (
    <div className="container m-10">
      <div className="max-w-4xl ">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          About This Project
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is a hobby and university project showcasing a Next.js
            application built with TypeScript and React. It was developed to
            explore modern web development practices while fulfilling academic
            requirements, combining personal learning interests with coursework
            objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Technologies Used
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Next.js 14</li>
              <li>• TypeScript</li>
              <li>• React</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Features
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Server-side rendering</li>
              <li>• Type-safe development</li>
              <li>• Responsive design</li>
              <li>• Modern UI components</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
