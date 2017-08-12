module.exports = function(val) {
  return val? val.replace(/\*/g, '%').replace(/\?/g, '_') : val;
};
