const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement("div");
  header.className = "header";
  const datespan = document.createElement("span")
  datespan.className = "date"
  datespan.textContent = date
  header.appendChild(datespan)
  const titleh1 = document.createElement("h1");
  titleh1.textContent = title
  header.appendChild(titleh1)
  const tempspan = document.createElement("span")
  tempspan.className="temp"
  tempspan.textContent = temp
  header.appendChild(tempspan)
  return header;
  
  
}

const headerAppender = async (selector) => {
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
  const header = Header("Lambda Times", "Jan 6, 2021", "26*");
  while(true) {
    if(document.querySelector(selector)) {
      break;
    }
    await new Promise(function(resolve) {
      setTimeout(resolve, 100);
    })
  }
  const node =  document.querySelector(selector);
  node.appendChild(header)
}

export { Header, headerAppender }
