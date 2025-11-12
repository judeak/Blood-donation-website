const form = document.querySelector("#myform");
const msg = document.querySelector("#msg");

form.addEventListener('submit', e=>{

    let messages =[];

    messages = isFilled("fname",messages,"Full name is missing");
    messages = isDOB("DOB",messages,"Invalid date of birth is missing");
    messages = isType("blood_group",messages,"Invalid blood type missing");
    // const selection =['Yes','No'];
    // messages = isSelect("donated_recently",selection,messages,"You have to answer the first question");
    // messages = isSelect("surgery",selection,messages,"You have to answer the second question");
    // messages = isSelect("medication",selection,messages,"You have to answer the third question");
    // messages = isSelect("medical_condition",selection,messages,"You have to answer the forth question");


    if(messages.length>0){
        msg.innerHTML = "Issues found ["+ messages.length +"]: " + messages.join(", ") + ".";
    //prevent submit
        e.preventDefault();
    }


})

function isFilled(selector,messages,msg){
    const element = document.getElementsByName(selector)[0].value.trim();

    if(element.length<1){
        messages.push(msg);
    } 
    return messages;
}
function isDOB(selector,messages,msg){
    if(document.getElementById(selector).value==''){
        messages.push(msg);
    }
       var dob=document.getElementById(selector).value
    console.log(dob)
      var today = new Date();
      var birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
     if(age<16){
        alert('You are not eligible. Age should be above 16...!!!')
     }
     return messages;
}
function isType(selector,messages,msg){

    const select = document.getElementById(selector);
    if (select.value == "select"){
      messages.push(msg);
    }
    return messages;

}
function isSelect(selector,selection,messages,msg){
    const element  = document.getElementsByName(selector)[0].value.trim(); 
   if(!selection.checked){
      messages.push(msg);
    }
    return messages;

}