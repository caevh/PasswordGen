function PasswordGenNumAndSpecial(userInfo){
    var RandomPassword = [];
    var special = ["=", "|", "<", "=", ";", "*", "&"];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];   
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
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);

            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
        }
        while (RandomPasswordLength < num2){
            
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
    else if (num2 % 7 == 0) {
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength) 
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(special[random]);                           
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
}