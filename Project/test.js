function PasswordType(userInfo){
    var num2 = document.getElementById("PasswordLen").value;
    num2 = Number(num2);
    alert(num2)
    num2 = Number(num2);
    if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("here")
        PasswordGen(num2);
    }
    if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked){
        alert("all but lower");
        PasswordGenNoLower(num2);
    }
}