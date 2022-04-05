let isNumber = function(input){
    if(typeof(input)=="number"){
        return true;
    }
}

let isPositive = function(input){
    if(input>0){
        return true;
    }
}

let getSmallest = function(i,j){
    if(i<j){
        return i;
    }
    return j;
}

let getLargest = function(i,j){
    if(i>j){
        return i;
    }
    return j;
}

let sumAll = function(i,j) {
    if(isNumber(i) && isNumber(j) && isPositive(i) && isPositive(j)){
        for(n=getSmallest(i,j),total=0; n<=getLargest(i,j); n++){
            total+=n;
        }
        return total;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
