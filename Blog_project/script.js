const blogsData = [
      {
        title: "How to Learn JavaScript",
        author: "John Doe",
        image: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
      },
      {
        title: "CSS Tips and Tricks",
        author: "Jane Smith",
        image: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        title: "Understanding HTML Semantics",
        author: "Alex Brown",
        image: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
      },
      {
        title: "React vs Vue",
        author: "Emily Johnson",
        image: "https://t4.ftcdn.net/jpg/02/56/10/07/360_F_256100731_qNLp6MQ3FjYtA3Freu9epjhsAj2cwU9c.jpg"
      }
    ];

    const blogsContainer = document.getElementById("blogs");

    function renderBlogs(blogs) {
      blogsContainer.innerHTML = blogs.map(blog => `
        <div class="card">
          <img src="${blog.image}" alt="${blog.title}" />
          <div class="card-content">
            <h3>${blog.title}</h3>
            <p>By ${blog.author}</p>
          </div>
        </div>
      `).join("");
    }

    renderBlogs(blogsData);


    const searchInput = document.getElementById("searchInput");
    let debounceTimeout;

    searchInput.addEventListener("input", () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        const query = searchInput.value.toLowerCase();
        const filtered = blogsData.filter(blog =>
          blog.title.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query)
        );
        renderBlogs(filtered);
      }, 500);
    });