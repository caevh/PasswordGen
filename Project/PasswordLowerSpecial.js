function PasswordGenLowerSpecial(userInfo){
    alert("debug")
    var RandomPassword = [];
    var special = ["=", "|", "<", "=", ";", "*", "&"];
    var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;
    if (num2 % 2 == 0) {
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);

            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 % 5 == 0 || num2 == 11) {
        if (num2 == 11){
            var random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(lower[random]);
        }
        while (RandomPasswordLength < num2){
            
            alert(RandomPasswordLength);
            var random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            RandomPassword.push(lower[random]);
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
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(lower[random]);
            random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(lower[random]);                           
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 == 9){
        for (var i = 4; i <= 8; i += 4){
            if (i == 4 || i == 8){
                var random = Math.floor((Math.random() * 25) + 1);
                RandomPassword.push(lower[random]);
                random = Math.floor((Math.random() * 6) + 1);
                RandomPassword.push(special[random]);
                random = Math.floor((Math.random() * 6) + 1);
                RandomPassword.push(special[random]);
                random = Math.floor((Math.random() * 25) + 1);
                RandomPassword.push(lower[random]);
            }
        }
        random = Math.floor((Math.random() * 9) + 1);
        RandomPassword.push(num[random]);
        StringPassword = RandomPassword.join('');
        alert(StringPassword);  
    }
}