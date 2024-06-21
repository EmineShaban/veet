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