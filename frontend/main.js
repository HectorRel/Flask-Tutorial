const textToModify = document.querySelector(".test");
const btn = document.querySelector(".press-me");

const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts/1");
    const data = await response.json();


    console.log(data.contacts);
    textToModify.textContent = data.contacts;
}

btn.addEventListener("click",fetchData);