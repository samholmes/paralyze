var finisher = function(done){
    var c = 0;
    return function check(f){
    	if (typeof f !== 'function') return;
        ++c;
        return function callback(){
            f.apply(this, arguments);
            
            if (!--c)
                done();
        };
    }
}

module.exports = finisher;