const textToModify = document.querySelector(".test");
const btn = document.querySelector(".press-me");

const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();


    console.log(data.contacts);
    textToModify.setAttribute('style', 'white-space: pre;');
    textToModify.textContent = `Name: ${data.contacts[1].firstName} 
    \r\nLast name: ${data.contacts[1].lastName} 
    \r\nEmail: ${data.contacts[1].email}`;
}

btn.addEventListener("click",fetchData);