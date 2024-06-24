let more = document.getElementById("showmorecomments")
let less = document.getElementById("showlesscomments")
let text = document.getElementById("text")

more.addEventListener("click", function (e) {
  less.style.display = "block";
  text.style.display = "block";
  more.style.display = "none";

})
less.addEventListener("click", function (e) {
  more.style.display = "block";
  text.style.display = "none";
  less.style.display = "none";

})



let faq = document.getElementsByClassName("faq-content");

const onClick = (e) => {
  if (
    e.target.className == "q" &&
    e.target.parentElement.children[1].style.display == "none"
  ) {
    e.target.parentElement.children[1].style.display = "block";
  } else if (
    e.target.parentElement.children[1].style.display == "block" &&
    e.target.parentElement.children[1].className == "a"
  ) {
    e.target.parentElement.children[1].style.display = "none";
  }
};

for (let index = 0; index < faq.length; index++) {
  faq[index].addEventListener("click", onClick);
}



let more2 = document.getElementById("showmorecomments2")
let less2 = document.getElementById("showlesscomments2")
let text2 = document.getElementsByClassName("display-hr")
let text3 = document.getElementsByClassName("review")

more2.addEventListener("click", function (e) {
  less2.style.display = "block";
  for (let i = 0; i < text2.length; i++) {
    text2[i].style.display = "block";
  }
  for (let i = 0; i < text3.length; i++) {
    text3[i].style.display = "grid";
  }
  more2.style.display = "none";
})

less2.addEventListener("click", function (e) {
  more2.style.display = "block";
  for (let i = 0; i < text2.length; i++) {
    text2[i].style.display = "none";
  }
  for (let i = 3; i < text3.length; i++) {
    text3[i].style.display = "none";
  }
  less2.style.display = "none";
})
