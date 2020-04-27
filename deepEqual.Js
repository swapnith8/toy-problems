function deepEqual(m, n) {
    if (m === n) {
        return true;
    } 
    else if (typeof m === 'object' && m !== null && typeof n === 'object' && n !== null) {
        let keys = Object.keys(m).concat(Object.keys(n));
        for (i of keys) {
            if (typeof m[i] === 'object' && typeof n[i] === 'object') {
                if (deepEqual(m[i], n[i]) === false) {
                    return false;
                }
            } 
            else if (m[i] !== n[i]) {
                return false;
            }
        }
          return true;
    } 
    else {
        return false; 
    }
}
    
obj1 = {fn:"sai",ls:"swapnith"}
obj2 = {fn:"swap",number:117}
    
a = "sai"
b = "okay"

console.log(deepEqual(obj1,obj2))
console.log(deepEqual(a,a))
console.log(deepEqual(b,a))