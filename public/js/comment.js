const comment_text = document.querySelector('#comment_text').value.trim();
const cmntbtn = document.querySelector('#cmntbtn').value;

const newFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#comment_text').value.trim();
    const id = document.querySelector('#cmntbtn').value;
    const post_id = id
    if (post_id && comment_text) {
      const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogpost/${id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };

  document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);