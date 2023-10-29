const input = document.getElementById("search");

const search = () => {
  const inputVal = input.value;
  const li = document.getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

input.addEventListener("keyup", search);
