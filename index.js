if (typeof setImmediate === 'undefined') require('setImmediate');

var finisher = function(done){
    var c = 0;
    return function check(f){
    	if (typeof f !== 'function') return false;
        ++c;
        return function callback(){
            --c;
            setImmediate(checkCounter);
            return f.apply(this, arguments);
        };
    }
    
    function checkCounter(){
        if (!c) done();
    }
    
    setImmediate(checkCounter);
}

module.exports = finisher;