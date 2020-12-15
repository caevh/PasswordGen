function PasswordGenNoLower(userInfo){
    alert("Hello")
    var RandomPassword = [];
    var special = ["=", "|", "<", "=", ";", "*", "&"];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var upper = ["A" ,"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    var num2 = userInfo;
    num2 = Number(num2);    
    var RandomPasswordLength = RandomPassword.length;

    if (num2 % 4 == 0) {
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength)
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(upper[random]);
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
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]); 
            RandomPassword.push(upper[random]);
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }                    
    }
    else if (num2 % 7 == 0) {
        while (RandomPasswordLength < num2){
            alert(RandomPasswordLength) 
            var random = Math.floor((Math.random() * 25) + 1);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(upper[random]);
            random = Math.floor((Math.random() * 9) + 1);
            RandomPassword.push(num[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);
            RandomPassword.push(num[random]);                            
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            RandomPasswordLength = RandomPassword.length;
        }
    }
    else if (num2 == 6) {
        for (var i = 1; i <= 1; i ++){
            if (i == 1){
                alert(RandomPasswordLength) 
                var random = Math.floor((Math.random() * 25) + 1);
                RandomPassword.push(upper[random]);
                random = Math.floor((Math.random() * 6) + 1);
                RandomPassword.push(special[random]);
                RandomPassword.push(upper[random]);
                random = Math.floor((Math.random() * 9) + 1);
                RandomPassword.push(num[random]);
            }
            random = Math.floor((Math.random() * 6) + 1);
            RandomPassword.push(special[random]);                           
            RandomPassword.push(num[random]);                         
            StringPassword = RandomPassword.join('');
            alert(StringPassword);
            document.execCommand("copy");
        }
    }
    else if (num2 == 9){
        for (var i = 4; i <= 8; i += 4){
            if (i == 4 || i == 8){
                var random = Math.floor((Math.random() * 25) + 1);
                RandomPassword.push(upper[random]);
                random = Math.floor((Math.random() * 6) + 1);
                RandomPassword.push(special[random]);
                RandomPassword.push(upper[random]);
                random = Math.floor((Math.random() * 9) + 1);
                RandomPassword.push(num[random]);
            }
        }
        random = Math.floor((Math.random() * 25) + 1);
        RandomPassword.push(num[random]);
        StringPassword = RandomPassword.join('');
        alert(StringPassword);  
    }
}