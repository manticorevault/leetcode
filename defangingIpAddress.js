/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let ipArr = address.split('')
    for(let counter = 0; counter < ipArr.length; counter++) {
        if(ipArr[counter] === ".") {
            ipArr[counter] = "[.]"
        }
    }
    
    return ipArr.join('')
    
};

