var USER =[]
var add = document.getElementById("submit");
function checkpasswordlength(user_data,password_alert) { 
if (user_data.Password > 4 && user_data.Password < 16 ) {
  password_alert.style.display = "block"
  return true
} else {
  password_alert.style.display = "none"
  return false
}
}
function checksernamelength(user_data,password_alert,Name_alert) {
  
  if (user_data.Name > 4 && user_data.Name < 16 ) {
    Name_alert.style.display = "block"
    return false
  } else {
    Name_alert.style.display = "none"
    return true
  }
  checkpasswordlength()
}
function checkpasswordnull(user_data,password_alert,Name_alert) {
var password_length = checkpasswordlength(user_data,password_alert,Name_alert)
var username_length = checksernamelength(user_data,password_alert,Name_alert)
    if(user_data.Password !== ""){
      password_alert.style.display = "none"
      return true
     }else {
     password_alert.style.display = "block"
     return false
     }
checksernamelength()
}
function checkNull(user_data) {
  var Name_alert = document.getElementById("alert1") 
  var password_alert = document.getElementById("alert2") 
  var  password_null= checkpasswordnull(user_data,password_alert,Name_alert)
    if (user_data.Name !== "") {
      Name_alert.style.display = "none"
      return true
    }else {
      Name_alert.style.display = "block"
      return false
    }
    checkpasswordnull()
}
add.addEventListener("click", function() {
var userName = document.getElementById("userName");
 var userPassword = document.getElementById("password");
 var user_data ={
  Name : userName.value,
  Password : userPassword.value
 }
 var validate = checkNull(user_data)
console.log(USER)
})









































// var users = [];
// var submit = document.getElementById("submit");
// const checknull = function (User, userName) {
//   if (User.user_Name !== "" && User.user_Password !== "") {
//     return true;
//   } else {
//     userName.style.boxShadow = "-15px 20px 16px 0rem rgb(255 0 0 / 25%)";
//      document.userPassword.style.boxshadow =
//        "-15px 20px 16px 0rem rgb(255 0 0 / 25%)";
//     return false;
//   }
// };
// submit.addEventListener("click", function (e) {
//   var userName = document.getElementById("userName");
//   var userPassword = document.getElementById("password");
//   const User = {
//     user_Name: userName.value,
//     user_Password: userPassword.value,
//   };
//   const validate = checknull(User, userName, userPassword);

//   if (validate) {
//     users.push(User);
//   }
//   console.log(users);
//   console.log(User);
// });
