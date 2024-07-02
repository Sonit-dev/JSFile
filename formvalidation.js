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
   else if (input.length < 3){
        displaymsg('Last name should be more than 3 characters','lnameMsg','red')
        return false
   }
   else{
        displaymsg('Last name is valid','lnameMsg','lime')
        return true
   }
}
