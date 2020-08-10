let name = " Danielle Lynch ";

console.log(name.trim());

const isValidPassword = function (password) {
  if (password.length > 8 && !password.includes("password")) {
    return "this is a good passsowrd";
  } else {
    return "this is a bad password";
  }
};

console.log(isValidPassword("asfdp"));
console.log(isValidPassword("asjhakjshkajhskajhsjkahskajh"));
console.log(isValidPassword("asjhajkshajkshpassword"));
