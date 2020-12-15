function PasswordGenUpperSpecial(userInfo){
    var RandomPassword = [];
    var special = ["=", "|", "<", "=", ";", "*", "&"];
    var upper = ["A" ,"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;
    if (num2 % 2 == 0 || num2 == 9) {
        if (num2 == 9){
            alert("In")
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);

            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(upper[random]);
        }
        else if (num2 == 7){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(upper[random]);
        }
        while (RandomPasswordLength < num2){
            
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}