const Paint = function(){
  this.litres = 5;
};

// Paint.prototype.checkIfEmpty = function(){
//   if (this.litres === 0)
//     return true
//   else
//     return false
// };


Paint.prototype.checkIfEmpty = function(){
  return this.litres === 0
};

module.exports = Paint;
