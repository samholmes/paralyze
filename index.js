if (typeof setImmediate === 'undefined') require('setImmediate');

var finisher = function(done){
    var c = 0, 
        setImmediateId;
    
    setImmediateId = setImmediate(checkCounter);
    
    function checkCounter(){
        if (!c) done();
    }
    
    return function wait(f){
        if (typeof f !== 'function') return false;
        
        ++c;
        
        return function callback(){
            --c;
            
            if (setImmediateId) clearImmediate(setImmediateId);
            setImmediateId = setImmediate(checkCounter);
            
            return f.apply(this, arguments);
        };
    }
}

module.exports = finisher;