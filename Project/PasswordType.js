function PasswordType(userInfo){
    var special = ["=", "|", "<", "=", ";", "*", "&"];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var upper = ["A" ,"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var num2 = document.getElementById("PasswordLen").value;
    num2 = Number(num2);
    alert(num2)
    num2 = Number(num2);
    if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("here")
        PasswordGen(num2, special, num, upper, lower);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.upperCase.checked){
        alert("no lower");
        PasswordGenNoLower(num2, special, num, upper);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.Numbers.checked && userInfo.lowerCase.checked){
        alert("No Upper");
        PasswordGenNoUpper(num2, special, num, lower);
    }
    else if (num2 > 0 && userInfo.specialChar.checked && userInfo.lowerCase.checked && userInfo.upperCase.checked){
        alert("no num");
        PasswordGenNoNum(num2, special, upper, lower);
    }
    else if (num2 > 0 && userInfo.Numbers.checked && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("No special");
        PasswordGenNoSpecial(num2, num, upper, lower);
    }
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.lowerCase.checked){
        alert("Upper and lower");
        PasswordGenUpperLower(num2, upper);
    }
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.Numbers.checked){
        alert("Num and upper")
        PasswordGenNumUpper(num2, num, upper);
    }
    else if (num2 > 0 && userInfo.upperCase.checked && userInfo.specialChar.checked){
        alert("UpperCase and special");
        PasswordGenUpperSpecial(num2, special, upper);
    }
    else if (num2 > 0 && userInfo.lowerCase.checked && userInfo.Numbers.checked){
        alert("Lower and num");
        PasswordGenLowerNum(num2, num, lower);
    }
    else if (num2 > 0 && userInfo.lowerCase.checked && userInfo.specialChar.checked){
        alert("lower and special");
        PasswordGenLowerSpecial(num2, special, lower);
    }
    else if (num2 > 0 && userInfo.Numbers.checked && userInfo.specialChar.checked){
        alert("Num and special");
        PasswordGenNumAndSpecial(num2, special, num);
    }

}