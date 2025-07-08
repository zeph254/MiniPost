import { useEffect, useState } from "react";
import { getPosts } from "../utils/storage";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Blog Posts</h1>
          <Link 
            to="/create" 
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm text-center"
          >
            Create New Post
          </Link>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No posts yet. Create your first post!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div 
                key={post.id} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
              >
                <Link to={`/posts/${post.id}`} className="block">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors mb-2 break-words">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 break-words line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-500 hover:text-indigo-700 transition-colors text-sm sm:text-base">
                      Read more →
                    </span>
                    <div className="text-xs sm:text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}