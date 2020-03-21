function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("entries");
const url =
  "https://spreadsheets.google.com/feeds/list/1_Q4nOWzGTfQrgsvlBCw9OAqqcBdWFCer7n637Aa7HgM/o464wou/public/values?alt=json";
fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let template = document.getElementById("template").innerHTML;
    let rendered = Mustache.render(template, data.feed);
    document.getElementById("target").innerHTML = rendered;
  })

  .catch(function(error) {
    console.log(error);
  });
