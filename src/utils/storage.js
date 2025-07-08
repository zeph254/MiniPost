// Get all posts
export const getPosts = () => {
  const posts = localStorage.getItem("blogPosts");
  return posts ? JSON.parse(posts) : [];
};

// Get a single post by ID (for Detail/Edit pages)
export const getPostById = (id) => {
  const posts = getPosts();
  return posts.find((post) => post.id === id);
};

// Save a new post (Create Page)
export const savePost = (post) => {
  const posts = getPosts();
  const updatedPosts = [...posts, post];
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
};

// Delete a post (Detail Page)
export const deletePost = (id) => {
  const posts = getPosts();
  const updatedPosts = posts.filter((post) => post.id !== id);
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
};

// Update a post (Edit Page)
export const updatePost = (updatedPost) => {
  const posts = getPosts();
  const updatedPosts = posts.map((post) =>
    post.id === updatedPost.id ? updatedPost : post
  );
  localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
};