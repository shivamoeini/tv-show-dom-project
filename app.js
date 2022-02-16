const row = document.querySelector(".contier")


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

async function showdata() {
    try {

        const response = await fetch("https://api.tvmaze.com/shows/82/episodes")
        const data = response.json()
        return data
    } catch (error) {
        throw Error("error")
    }

}
showdata()


async function showOn() {
    try {
        const data = await showdata()
        data.forEach(element => {
            const card = document.createElement("div")
            const im = document.createElement("img")
            card.setAttribute("class", "card")
            im.setAttribute("src", element.image.medium)
            card.append(im)
            row.append(card)
            const hsix = document.createElement("h5")
            hsix.append(element.name)
            card.append(hsix)
            const p = document.createElement("p")
            p.innerHTML = element.summary
            card.append(p)
        })
    } catch (error) {
        throw Error("error")
    }
}
showOn()