let round1Dp = function(num){
  return Math.round(num*10)/10;
}

const ftoc = function(temp) {
  return round1Dp(((temp-32)*5)/9);
};

const ctof = function(temp) {
  return round1Dp((temp/5)*9+32);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
