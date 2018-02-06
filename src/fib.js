//(function() {
    var Mathfun = {
        called: 0,
    
        fibonacci(index) {

            this.called++;

            var first = 0;
            var second = 1;
            var third = 1; 

            var idx = Math.round(parseInt(index));

            if (isNaN(idx) || idx < 0) {
                console.log('Invalid Input')
            }
            else{
                for (i = 0; i < idx; i++){
                    third = first + second;
                    first = second;
                    second = third;
                 }
                console.log(third);
                return third;
            }
        },

        fibonacciUsage(){
            
            console.log(this.called);

        }
    
    }    
    Mathfun.fibonacci('twelve');
    Mathfun.fibonacci('3');
    Mathfun.fibonacciUsage();
    Mathfun.fibonacci('5.6');
    Mathfun.fibonacciUsage();
    

//})();
