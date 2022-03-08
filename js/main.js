let bookScore = 0;
let booksPerClick = 1;
let booksPerSecond = 1;
let clickPrice = 50;
let passivePrice = 200;
let addInterval;
document.querySelector('#bookImg').addEventListener('click', increment);
document.querySelector('.upgradeClick').addEventListener('click', upgradeClick);
document.querySelector('.upgradePassive').addEventListener('click', upgradePassive);


function increment() {
  bookScore += booksPerClick;
  document.querySelector('#booksRead').innerText = bookScore;
}

function upgradeClick() {
  if (bookScore >= clickPrice) {
    bookScore -= clickPrice;
    clickPrice = Math.round(clickPrice* 1.2);
    document.querySelector('#booksRead').innerText = bookScore;
    booksPerClick++;
    document.querySelector('#clickPrice').innerText = clickPrice;
  }
  
}



function upgradePassive() {
  if(bookScore >= passivePrice) {
    bookScore -= passivePrice;
    passivePrice *= 1.2;
    document.querySelector('#passivePrice').innerText = passivePrice;
    setInterval(function() {
      bookScore += booksPerSecond;
      document.querySelector('#booksRead').innerText = bookScore;
    }, 1000)
  }
}