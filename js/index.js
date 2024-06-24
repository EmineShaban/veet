let more = document.getElementById("showmorecomments")
let less = document.getElementById("showlesscomments")
let text = document.getElementById("text")


more.addEventListener("click", function (e) {
    console.log('kkk')
    less.style.display = "block";
    text.style.display = "block";
    more.style.display = "none";

})
less.addEventListener("click", function (e) {
    console.log('kkk')
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