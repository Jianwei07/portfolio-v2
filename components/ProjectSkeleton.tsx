// components/ProjectsSkeleton.tsx
export default function ProjectsSkeleton() {
  return (
    <section className="bg-amber-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render 6 skeleton cards */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow animate-pulse"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-200" />

              {/* Content Placeholder */}
              <div className="p-6">
                {/* Title Placeholder */}
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />

                {/* Description Placeholder */}
                <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4" />

                {/* Tech Stack Icons Placeholder */}
                <div className="flex gap-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-8 h-8 bg-gray-200 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
