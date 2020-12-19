function outputInteres(id, title, text, image, name_image, ...params){
        document.write(
            `<div class="interesting" id="${id}">
            <div class="image">
            <img title="${name_image}" src="${image}">
            </div>
            <div class="text-wrapper">
            <p class="bold">${title}</p>
            <p>
            ${text}
            <ul>`
        );
     
        for (let item of params) {
            document.write(`<li>${item}</li>`);
        }
     
        document.write(`</ul></p></div></div>`);     
}
function outputPhotos() {
    let foto = [];
    let title = [];
    const n = 15;
 
    for (let i = 0; i < n; i++) {
        foto[i] = "images/"+(i + 1) + ".jpg";
    }
 
    for (let i = 0; i < n; i++) {
        title[i] = "Рисунок" + (i + 1);
    }
 
    for (let i = 0; i < n; i++) {
        document.write(`<figure><img title="Рисунок ` + (i + 1) + `" src="images/` + (i + 1) + `.jpg">
    <figcaption>Рисунок ${i+1}</figcaption></figure>`);
    }
}
 