let bookmarkFormEl = document.getElementById("bookmarkForm");
let nameEl = document.getElementById("siteNameInput");
let nameErrMsgEl = document.getElementById("siteNameErrMsg");
let urlEl = document.getElementById("siteUrlInput");
let urlErrMsgEl = document.getElementById("siteUrlErrMsg");
let ulList = document.getElementById("bookmarksList");
let errorMsg = "Required*";
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = errorMsg;
    } else {
        nameErrMsgEl.textContent = "";
    }
});
urlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsgEl.textContent = errorMsg;
    } else {
        urlErrMsgEl.textContent = "";
    }
});
bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    let li = document.createElement("li");
    let list = document.createElement("p");
    list.textContent = nameEl.value;
    ulList.appendChild(li);
    li.appendChild(list);
    let htmlAnchor = document.createElement("a");
    htmlAnchor.textContent = urlEl.value;
    htmlAnchor.setAttribute("href", urlEl.value);
    htmlAnchor.setAttribute("target", "_blank");
    ulList.appendChild(li);
    li.appendChild(htmlAnchor);
    console.log(ulList);
});