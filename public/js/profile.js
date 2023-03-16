// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const post_title = document.querySelector('#blogpost-name').value.trim();
//   const post_text = document.querySelector('#blogpost-desc').value.trim();

//   if (post_title && post_text) {
//     const response = await fetch(`/api/blogposts`, {
//       method: 'POST',
//       body: JSON.stringify({ post_title, post_text }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create blogpost');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogposts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blogpost');
    }
  }
};


// document
//   .querySelector('.new-blogpost-form')
//   .addEventListener('submit', newFormHandler);

document
  .querySelector('.blogpost-list')
  .addEventListener('click', delButtonHandler);