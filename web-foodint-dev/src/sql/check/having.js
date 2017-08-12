var type = require('./type');

module.exports = function(ast) {
    type.call(this, 'sql.having', ast.having);
};
