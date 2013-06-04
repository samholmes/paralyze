var finisher = function(done){
    var c = 0;
    return function check(f){
        ++c;
        return function callback(){
            f.apply(this, arguments);
            
            if (!--c)
                done();
        };
    }
}

module.exports = finisher;