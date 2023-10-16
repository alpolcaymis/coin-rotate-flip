function changeFavicon(src) {
  var link = document.createElement("link"),
    oldLink = document.getElementById("dynamic-favicon");
  link.id = "dynamic-favicon";
  link.rel = "shortcut icon";
  link.href = src;
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  document.head.appendChild(link);
}

var btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
  changeFavicon("http://www.google.com/favicon.ico");
};
