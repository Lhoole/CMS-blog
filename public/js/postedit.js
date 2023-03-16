// const editButtonHandler = async (event) => {
//     const post_title = document.querySelector('#blogpost-name').value.trim();
//     const post_text = document.querySelector('#blogpost-desc').value.trim();
//       const id = event.target.getAttribute('data-id');
//       if (post_title && post_text) {
//       const response = await fetch(`/api/blogposts/edit/${id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ post_title, post_text }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to edit blogpost');
//       }
//     }
//   };
  
const editFormHandler = async (event) => {
    event.preventDefault();

    const post_title = document.querySelector('#blogpost-name').value.trim();
    const post_text = document.querySelector('#blogpost-desc').value.trim();
    const id = document.querySelector('#confirmbtn').value;

    if (post_title && post_text) {
      const response = await fetch(`/api/blogposts/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_title, post_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to edit blogpost');
      }
    }
  };
    
    document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', editFormHandler);
  