const input = document.querySelector('#number')
const inner = document.querySelector('.inner')
const urlPosts = 'https://jsonplaceholder.typicode.com/posts'
const urlComments = 'https://jsonplaceholder.typicode.com/comments'
const btnComments = document.querySelector('.btn-comments')
const commentsDiv = document.querySelector('.comments')
const error = document.querySelector('.error')


input.addEventListener('input', (e) => {
  error.style.display = 'none'

  const createEl = (product) => {
    const div = document.createElement('div')
    div.classList.add('product')
    div.innerHTML = `<h3 class="post-title">${product.title}</h3>
                     <div class="post-description">${product.body}</div>
                    `
    return div
  }

  const fillPost = (wrapp, products) => {
    products.forEach(el => {
      if (el.id == input.value) {
        wrapp.innerHTML = ''
        wrapp.appendChild(createEl(el))
        wrapp.appendChild(btnComments)
        btnComments.style.display = 'block'

      } else if (input.value === '') {
        wrapp.innerHTML = ''
      } else if (input.value < 1 || input.value > 100) {
        wrapp.innerHTML = ''
        const div = document.createElement('div')
        div.classList.add('mistake')
        div.innerHTML = 'Enter id from 1 to 100'
        wrapp.appendChild(div)
      }
    });
  }

  fetch(urlPosts)
    .then((response) => response.json())
    .then((json) => {
      fillPost(inner, json)
    })
    .catch(() => {
      console.log('uuupppsss');
      wrapp.innerHTML = ''
      error.style.display = 'block'
    })

})


btnComments.addEventListener('click', (e) => {
  commentsDiv.innerHTML = ''
  fetch(urlComments)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((el2) => {
        if (el2.postId == input.value) {
          const createComment = (comment) => {
            const divComment = document.createElement('div')
            divComment.classList.add('comment')
            divComment.innerHTML = `<h3 class="comment-title">${comment.name}</h3>
                                      <div class="comment-email">${comment.email}</div>
                                      <div class="comment-description">${comment.body}</div>
                                     `
            return divComment
          }

          inner.appendChild(commentsDiv)
          commentsDiv.appendChild(createComment(el2))
        }
      })
    })
    .catch(() => {
      console.log('uuupppsss');
      wrapp.innerHTML = ''
      error.style.display = 'block'
    })
})






