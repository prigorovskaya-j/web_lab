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

function check_error(field) {
    if (field.value == "") {
        return true
        field.focus();
    } else false;
}
 
function check_form(form) {
    console.log(form.formFIO.value);
    if (check_fio(form.formFIO)) {
        check_fio(formFIO);

    } 
}

function check_fio(formFIO){
    var space = 0;
    var fio = document.formContact.formFIO.value;
    if(fio!= ""){
        for (var i = 0; i < fio.length; i=i+2) {
                if(i!=4){
                    if (fio[i] !=" " && fio[i+1] == " "){
                        space++;
                    }
                }
                if(i==4){
                    if(fio[i]!=" "){
                        space++;
                    }       
                }
        }
    }
    if (space != 3) {
            formFIO.focus;
            alert("Неверный формат данных");
            formFIO.style.backgroundColor='red';
            return false;
    }
 }
 function check_study(form){
     console.log(form.question2.value); 
    if (check_question2(form.question2)) {
        check_question2(question2);
    } 
 }
 function check_question2(question2){
     var res=document.formStudy.question2.value;
    // alert(res);
     if(Number.isInteger(res)){
         return true;
     } else{
        alert("Введите целое число");
       // question2.focus;
        question2.style.backgroundColor='red';
        return false;
    }
 }
 
 function check_submit(form){
     alert("check sub")
    if(check_question2()){ alert("check yes"); alert(false);return false;} else {return true;}
    
 }
