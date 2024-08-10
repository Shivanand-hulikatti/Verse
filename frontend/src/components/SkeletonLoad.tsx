import React from "react";

const SkeletonFullBlog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex lg:items-start lg:space-x-8">
          <article className="bg-white shadow-sm rounded-lg overflow-hidden lg:flex-grow animate-pulse">
            <div className="px-6 py-8">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </article>
          <aside className="mt-8 lg:mt-0 lg:w-64 lg:flex-shrink-0">
            <div className="bg-white shadow-sm rounded-lg p-6 lg:sticky lg:top-8 animate-pulse">
              <h2 className="h-4 bg-gray-200 rounded mb-4 w-3/4"></h2>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                </div>
                <div className="ml-4">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default SkeletonFullBlog;
