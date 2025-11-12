
const form = document.querySelector("#myform");
const msg = document.querySelector("#msg");

form.addEventListener('submit', e=>{

    // this array will contain error messages
    let messages = [];
    //check if errors exist
    messages = isFilled("fname",messages,"First name is missing");
    messages = isFilled("lname",messages,"Last name is missing");
    messages = isMobile("phone",messages,"Mobile must contain numbers only");
    messages = isFilled("phone",messages,"Mobile is missing");
    messages = isEmail("email",messages,"Email format is wrong");
    messages = isDOB("DOB",messages,"Invalid date of birth missing");
    messages = islanguage("language",messages,"Invalid language selection missing");
    messages=isMsgFilled("message",messages,"The message mst range from 5 to 200");


  
    //if a message is found, then there's an issue
    if(messages.length>0){
    //there is an error
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

  function isMsgFilled(selector,messages,msg){
    const element = document.getElementsByName(selector)[0].value.trim();
    if(element.length<5||element.length>200){
      messages.push(msg);
    }
    return messages;
  }

  function isMobile(selector,messages,msg){
    const element = document.getElementsByName(selector)[0].value.trim();
    if(!element.match("[0-9]{9}")){
      messages.push(msg);
    }
    return messages;
  }
  function isEmail(selector,messages,msg){
    const element = document.getElementsByName(selector)[0].value.trim();
    if(!element.match("[a-z0-9]+@[a-z]+\.[a-z]{2,4}")){
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
  function islanguage(selector,messages,msg){
    const select = document.getElementById(selector);
    if (select.value == "select"){
      messages.push(msg);
    }
    return messages;
  }
