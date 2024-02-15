// https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const text = document.getElementById("content");

const getJoke = () => {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((data) => {
            const content = data.data.content;
            header.textContent = content.text_head;
            text.textContent =
                content.text !== "" ? content.text : content.text_hidden;
        });
};

// const getJoke = () => {
//     fetch("https://api.blablagues.net/?rub=blagues")
//         .then((res) => res.json())
//         .then(({ data }) => {
//             const { content } = data;
//             header.textContent = content.text_head;
//             text.textContent =
//                 content.text !== "" ? content.text : content.text_hidden;
//         });
// };

getJoke();

document.body.addEventListener("click", getJoke);
