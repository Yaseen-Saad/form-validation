var USER = [];
var add = document.getElementById("submit");
function checkpasswordlength(user_data, password_alert) {
  if (user_data.Password.length > 4 && user_data.Password.length < 16) {
    password_alert.style.display = "none";
    return true;
  } else {
    password_alert.style.display = "block";
    return false;
  }
}
function checksernamelength(user_data, Name_alert) {
  if (user_data.Name.length > 4 && user_data.Name.length < 16) {
    Name_alert.style.display = "none";
    return true;
  } else {
    Name_alert.style.display = "block";
    return false;
  }
}
function checkpasswordnull(user_data, password_alert,) {
  if (user_data.Password !== "") {
    password_alert.style.display = "none";
    return true;
  } else {
    password_alert.style.display = "block";
    return false;
  }
}
function checkNull(user_data, Name_alert,) {
  if (user_data.Name !== "") {
    Name_alert.style.display = "none";
    return true;
  } else {
    Name_alert.style.display = "block";
    return false;
  }
}
add.addEventListener("click", function (USER) {
  var password_alert = document.getElementById("alert2");
  var Name_alert = document.getElementById("alert1");
  var userName = document.getElementById("userName");
  var userPassword = document.getElementById("password");
  var user_data = {
    Name: userName.value,
    Password: userPassword.value
  };
  var validate = checkNull(user_data, Name_alert);
  var username_length = checksernamelength(user_data,Name_alert);
  var password_null = checkpasswordnull(user_data, password_alert, );
  var password_length = checkpasswordlength(user_data,password_alert,);
  password_length();
  password_null();
  checkNull(user_data, Name_alert);
  username_length();
  checksernamelength(user_data,Name_alert);
  USER.push(user_data);
  console.log(USER);
});
