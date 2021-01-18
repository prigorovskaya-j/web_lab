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
 
    for (let i = 0; i < 5; i++) {
        foto[i] = "images/"+(i + 1) + ".jpg";
    }
 
    for (let i = 0; i < 10; i++) {
        title[i] = "Рисунок" + (i + 1);
    }
 
    for (let i = 0; i < n; i++) {
        document.write(`<figure><img title="Рисунок ` + (i + 1) + `" src="images/` + (i + 1) + `.jpg">
    <figcaption>Рисунок ${i+1}</figcaption></figure>`);
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
    if(!check_tel()){return false;}
    if(!check_mail()){return false;}
    if(!check_comment()){return false;}
    return true;
}
function check_comment(){
  var com=document.formContact.comment.value;
  if(com!=""){return true;}
  else{
    alert("Заполните комментарий");
    formContact.comment.focus();
    return false;
  }
}
function check_mail(){
  var mail=document.formContact.Mail.value;
  if(mail!=""){return true;}
  else{
    alert("Заполните email");
    formContact.Mail.focus();
    return false;
  }
}

function check_tel(){
  var phone=document.formContact.tel.value;
  let array = phone.split("");
  if((array.length==10 || array.length==11 || array.length==12)&&(array[0]=='+')&&(array[1]=='3' || array[1]=='7')){
    return true;
  } else {
    alert("Неверный формат данных");
    formContact.tel.focus();
    return false;
  }
}
function check_fio(){
   var fio = document.formContact.formFIO.value;
   let array = fio.split(" ");
   if(array.length==3){
     for(i=0; i<array.length; i++){
       if(array[i]!=""){
         return true;
       }
       else{
         alert("Неверный формат данных");
       formContact.formFIO.focus();
       return false;}
     }
   }
   else {
    alert("Неверный формат данных");
    formContact.formFIO.focus();
    return false;
   }
}