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