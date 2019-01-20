// FIRST PART OF ADVANCE CHALLENGE 
// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
// Create five (5) section components, each with a class of message, and with the content of your choosing.
// Using appendChild(), attach each message as a child to the messages element.



const article = document.querySelector("article");


article.id = "messages";
const messagesAdded = ["Hello", "Hi", "Hey ya'll", "Howdy"];

addSectionsToArticle = () => {
    messagesAdded.forEach(message => {  
        const section = document.createElement("section");
        section.className = "messages";
        section.textContent = message;   
        article.appendChild(section);
    });
    console.log(article);
}
addSectionsToArticle();


