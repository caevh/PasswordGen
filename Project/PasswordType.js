function PasswordType(userInfo){
    var num2 = document.getElementById("PasswordLen").value;
    num2 = Number(num2);
    alert(num2)
    num2 = Number(num2);
    if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("here")
        PasswordGen(num2);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked){
        alert("no lower");
        PasswordGenNoLower(num2);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.lowerCase.checked){
        alert("No Upper");
        PasswordGenNoUpper(num2);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.lowerCase.checked && userInfo.upperCase.checked){
        alert("no num");
        PasswordGenNoNum(num2);
    }
    else if (num2 > 0 && userInfo.Numbers.checked && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("No special");
        PasswordGenNoSpecial(num2);
    }
}