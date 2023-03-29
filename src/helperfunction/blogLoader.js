import posts from "../data/posts.json"

function blogLoader() {
  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      content: post.content,
      date: post.date,
    };
  });
}

export default blogLoader;