import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About MiniPost</h1>
          <p className="text-gray-600 text-lg">
            A simple blogging application to create and share your thoughts.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              MiniPost was created to provide a simple, distraction-free platform for sharing your ideas and stories. 
              We believe in keeping things minimal yet powerful.
            </p>
            <p className="text-gray-600">
              Unlike other bloated platforms, MiniPost focuses on what matters most - your content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Features</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Simple and intuitive interface</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Markdown support for rich text formatting</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Instant publishing with no approval needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>Responsive design that works on all devices</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Get Started</h2>
            <p className="text-gray-600 mb-4">
              Ready to start sharing your thoughts with the world?
            </p>
            <Link 
              to="/create" 
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Create Your First Post
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              Have questions or feedback? We'd love to hear from you at{" "}
              <a href="mailto:contact@minipost.example" className="text-indigo-600 hover:text-indigo-800">
                ularezephaniah@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}