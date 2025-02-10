// components/ProjectsError.tsx
export default function ProjectsError() {
  return (
    <div className="bg-amber-50 py-16 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Unable to load projects
        </h3>
        <p className="text-gray-600">
          There was an error loading the projects. Please try again later.
        </p>
      </div>
    </div>
  );
}
