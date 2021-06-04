const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cards  = document.createElement("div")
  cards.className = "card"
  const headline = document.createElement("div")
  headline.className = "headline"
  headline.textContent = article.headline
  cards.appendChild(headline)
  const author = document.createElement("div")
  author.className = "author"
  const photo = document.createElement("div")
  photo.className = "img-container"
  const img = document.createElement("img")
  img.src = article.authorPhoto
  photo.appendChild(img)
  const authorname = document.createElement("span")
  authorname.textContent = `By ${article.authorName}`
  author.appendChild(photo)
  author.appendChild(authorname)
  cards.append(author)
  return cards
}

const cardAppender = async (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const articles = await fetch('https://lambda-times-api.herokuapp.com/articles').then(res => res.json()).then(data => data.articles)
  articles.javascript.map((item) => {
    const card = Card(item)
    document.querySelector(selector).appendChild(card)    
  })
  articles.bootstrap.map((item) => {
    const card = Card(item)
    document.querySelector(selector).appendChild(card)    
  })
  articles.technology.map((item) => {
    const card = Card(item)
    document.querySelector(selector).appendChild(card)    
  })
  articles.jquery.map((item) => {
    const card = Card(item)
    document.querySelector(selector).appendChild(card)    
  })
  articles.node.map((item) => {
    const card = Card(item)
    document.querySelector(selector).appendChild(card)    
  })
}

export { Card, cardAppender }
