const repeatString = function(string,num) {
let outStr='';
if(num<0){
    return 'ERROR';
}
    for(let i=0;i<num;i++){
        outStr+=string;
    }
    return outStr;

};

// Do not edit below this line
module.exports = repeatString;
