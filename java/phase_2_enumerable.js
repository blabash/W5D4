Array.prototype.myEach = function(cb) {
    for (let i = 0; i <this.length; i ++) {
        cb(this[i]);
    }
}

Array.prototype.myMap = function(cb) {
    const results = [];

    
    function closure(ele) {
        results.push(cb(ele));
    }


    this.myEach (closure);

    return results;
}

Array.prototype.myReduce = function(func, acc = null) {
    let k;
    
    if (acc === null) {
        acc = this[0];
        k = 1;
    } else {
        k = 0;
    }

    for (let i = k; i < this.length; i++) {
        acc = func(acc, this[i]);
    }
    return acc;
}



Array.prototype.bubbleSort = function() {
    let sorted = false;

    while(!sorted){
        sorted = true;

        for (let i = 0; i < this.length - 1; i++){

            if(this[i] > this[i+1]){
                sorted = false;
                let temp = this[i+1];
                this[i+1] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
}

String.prototype.substrings = function() {
    let subs = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            subs.push(this.slice(i,j));
        }
    }

    return subs;
}

function range (start, end) {
    if (start === end) {
        return [end];
    }

    return [start].concat(range(start + 1, end));
}



function sumRec (arr) {
    if(arr.length <= 1) {
        return arr[0];
    }


    return arr[0] + sumRec(arr.slice(1, arr.length));
}



function exponent(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp > 0) {
    return base * exponent(base, exp - 1);
    } else {
        return (1 / base) * exponent(base, exp + 1);


    }


}
