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


 
var res,x;
  
 function check_question2(){
    res=document.formStudy.question2.value;
    res=res-0;
    if(res!=NaN && Number.isInteger(res))
        return true; 
   
    alert("Введите целое число ");
    formStudy.question2.focus(); 
    return false; 
 }

 function check_submit(){
   
    if(!check_question2()){
        
        return false;
    } 
    return true;
 }
 function check_submit_cont(){
    if(!check_fio()){return false;}
    return true;
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
           return false;
   }
}