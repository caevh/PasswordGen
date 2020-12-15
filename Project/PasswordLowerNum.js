function PasswordGenLowerNum(userInfo){
    var RandomPassword = [];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;
    if (num2 % 2 == 0 || num2 == 9) {
        if (num2 == 9){
            alert("In")
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
        }
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);

            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11 || num2 == 7) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
        }
        else if (num2 == 7){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            RandomPassword.push(lower[random]);
        }
        while (RandomPasswordLength < num2){
            
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]); 
            
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
}