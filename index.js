var finisher = function(finish){
    var c = 0;
    return function wrap(f){
        ++c;
        return function done(){
            f.apply(this, arguments);
            
            if (!--c)
                finish();
        };
    }
}

module.exports = finisher;