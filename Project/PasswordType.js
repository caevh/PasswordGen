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
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("Upper and lower");
        PasswordGenUpperLower(num2);
    }
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.Numbers.checked){
        alert("Num and upper")
        PasswordGenNumUpper(num2);
    }
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.specialChar.checked){
        alert("UpperCase and special");
        PasswordGenUpperSpecial(num2);
    }
    else if (num2 > 0 && userInfo.lowerCase.checked && userInfo.Numbers.checked){
        alert("Lower and num");
        PasswordGenLowerNum(num2);
    }
    else if (num2 > 0 && userInfo.lowerCase.checked && userInfo.specialChar.checked){
        alert("lower and special");
        PasswordGenLowerSpecial(num2);
    }
    else if (num2 > 0 && userInfo.Numbers.checked && userInfo.specialChar.checked){
        alert("Num and special");
        PasswordGenNumAndSpecial(num2);
    }

}