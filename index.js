function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target')
}

function increaseRankBy(n) {
const rank =  document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = rank.length; i < l; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}

function deepestChild() {
const node = document.getElementById('grand-node').querySelectorAll('div')

  for (let i = 0, l = node.length; i < l; i++) {
    if (node[i].innerHTML != null) {
      return node[i]
      }
    }
  }