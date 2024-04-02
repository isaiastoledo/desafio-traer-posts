async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error al obtener los posts');
    }
    const posts = await response.json();
    const postContainer = document.getElementById('post-data');
    postContainer.innerHTML = '';
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}
