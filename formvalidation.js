 function displaymsg(msg,idname,colorname){
      document.getElementById(idname).innerHTML = msg
      document.getElementById(idname).style.color = colorname
 }
 
 function fnamevalidate(){
    let input = document.getElementById('fname').value
    if (input == ''){
         displaymsg('First name is mandatory','fnameMsg','red')
         return false
    }
    else if (!input.match(/^[a-zA-Z]+$/) ){
          displaymsg('First name must contain alphabets','fnameMsg','red')
          return false
     }
    else if (input.length < 3){
         displaymsg('First name should be more than 3 characters','fnameMsg','red')
         return false
    }
    else{
         displaymsg('First name is valid','fnameMsg','lime')
         return true
    }
 }

 function lnamevalidate(){
   let input = document.getElementById('lname').value
   if (input == ''){
        displaymsg('Last name is mandatory','lnameMsg','red')
        return false
   }
   else if (!input.match(/^[a-zA-Z]+$/) ){
          displaymsg('Last name must contain alphabets','lnameMsg','red')
          return false
     }
   else if (input.length < 3){
        displaymsg('Last name should be more than 3 characters','lnameMsg','red')
        return false
   }
   else{
        displaymsg('Last name is valid','lnameMsg','lime')
        return true
   }
}

function enamevalidate(){
     let input = document.getElementById('ename').value
     if (input == ''){
          displaymsg('E-mail is mandatory','enameMsg','red')
          return false
     }
     else if (!input.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/) ){
            displaymsg('E-mail is mandatory','enameMsg','red')
            return false
       }
     else{
          displaymsg('E-mail name is valid','enameMsg','lime')
          return true
     } 
  }

  function pnamevalidate(){
     let input = document.getElementById('pname').value
     if (input == ''){
          displaymsg('Password is mandatory','pnameMsg','red')
          return false
     }
     else if (!input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){ 
            displaymsg('<li>One number</li> <li>One special character</li> <li>One capital letter</li> <li>8 characters long </li>','pnameMsg','red')
            return false
       }
     else{
          displaymsg('Password is valid','pnameMsg','lime')
          return true
     }
  }

  function cnamevalidate(){
     let password = document.getElementById('pname').value
     let cpassword = document.getElementById('cname').value
     if (cpassword == ''){
          displaymsg('Confirm password is mandatory','cnameMsg','red')
          return false
     }

     else if (password != cpassword){
          displaymsg('Password and confirm password must be same','cnameMsg','red')
          return false
     }
     else{
          displaymsg('All ok','cnameMsg','lime')
          return true
     }
  }

  function submitform(){
     if (fnamevalidate() && lnamevalidate() && enamevalidate() && pnamevalidate() && cnamevalidate()){
          return true
     }
     else{
          return false
     }
  }
