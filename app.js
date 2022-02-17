const row = document.querySelector(".contier");

// function loadjson() {
//     fetch("https://api.tvmaze.com/shows/82/episodes")
//         .then(response => response.json())
//         .then(data =>
//             data.forEach(element => {
//                 const card = document.createElement("div")
//                 const im = document.createElement("img")
//                 card.setAttribute("class", "card")
//                 im.setAttribute("src", element.image.medium)
//                 card.append(im)
//                 row.append(card)
//                 const hsix = document.createElement("h5")
//                 hsix.append(element.name)
//                 card.append(hsix)

//                 const p = document.createElement("p")
//                 p.append(element.summary)
//                 card.append(p)

//             }));
// }
// loadjson()

// async function showdata() {
//     try {

//         const response = await fetch("https://api.tvmaze.com/shows/82/episodes")
//         const data = response.json()
//         return data
//     } catch (error) {
//         throw Error("error")
//     }

// }
// showdata()

// async function showOn() {
//     try {
//         const data = await showdata()
//         data.forEach(element => {
//             const card = document.createElement("div")
//             const im = document.createElement("img")
//             card.setAttribute("class", "card")
//             im.setAttribute("src", element.image.medium)
//             card.append(im)
//             row.append(card)
//             const hsix = document.createElement("h5")
//             hsix.append(element.name)
//             card.append(hsix)
//             const p = document.createElement("p")
//             p.innerHTML = element.summary
//             card.append(p)
//         })
//     } catch (error) {
//         throw Error("error")
//     }
// }
// showOn()

const url = "https://api.tvmaze.com/shows/82/episodes";
const fechmove = async() => {
    const res = await axios.get(url);
    const data = res.data;
    for (const move of data) {
        // card
        const card = document.createElement("div");
        const im = document.createElement("img");
        card.setAttribute("class", "card");
        im.setAttribute("src", move.image.medium);
        card.append(im);
        row.append(card);
        const hfive = document.createElement("h5");
        hfive.append(move.name);
        card.append(hfive);
        // season number
        const se1 = move.season;
        let season = `${se1}`;
        if (se1 < 10) {
            season = `0${se1}`;
        }
        const num = move.number;
        let number = `${num}`;
        if (num < 10) {
            number = `0${num}`;
        }
        const hsix = document.createElement("h6");
        hsix.textContent = `S${season}E${number}`;
        card.append(hsix);

        // p
        const p = document.createElement("p");
        p.innerHTML = move.summary;
        card.append(p);
        // url
        const url = move.url
        const a = document.createElement("a")
        a.textContent = "more information..."
        a.setAttribute("href", url)
        console.log(url);
        card.append(a)
    }
};
fechmove();