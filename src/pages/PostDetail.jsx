import { useParams, useNavigate } from "react-router-dom";
import { getPostById, deletePost } from "../utils/storage";
import { Link } from "react-router-dom";

export default function View() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(Number(id));

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(Number(id));
      navigate("/");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="max-w-md bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 break-words">Post Not Found</h1>
          <p className="text-gray-600 mb-6 break-words">The post you're looking for doesn't exist or may have been removed.</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors break-words"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Posts
          </Link>
        </div>

        <article className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <header className="mb-6">
            <div className="text-sm text-gray-500 mb-3 break-words">
              Published on {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight break-words">
              {post.title}
            </h1>
          </header>

          <div className="prose max-w-none text-gray-700 text-base sm:text-lg leading-relaxed">
            {post.content.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4 break-words">{paragraph}</p>
            ))}
          </div>

          <footer className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
            <Link
              to={`/edit/${post.id}`}
              className="order-2 sm:order-1 inline-flex items-center justify-center px-5 py-2.5 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Post
            </Link>
            
            <button
              onClick={handleDelete}
              className="order-1 sm:order-2 inline-flex items-center justify-center px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Delete Post
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
}