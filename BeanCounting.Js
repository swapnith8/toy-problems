const string1 = " I am sai swapnith "
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
