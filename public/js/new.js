const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#blogpost-name').value.trim();
    const post_text = document.querySelector('#blogpost-desc').value.trim();
  
    if (post_title && post_text) {
      const response = await fetch(`/api/blogposts`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };

  document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);