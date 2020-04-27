const string1 = " I am sai swapnith "
const string2= "swap is a fan of DQ"
const character = 'p'

function countBs(str1) {
    let count = 0;
    for(let i = 0; i < string1.length; i++) {
        if(string1[i] === "s") {
            count++;
        }
    }
    console.log(count)
    }
countBs(string1)    

function countChar(str,character) {
    let count = 0;
    for(let i = 0; i<str.length;i++) {
        if(str[i] === character ) {
            count++;
        }
    }
    console.log(count)
}
countChar(string2,character)