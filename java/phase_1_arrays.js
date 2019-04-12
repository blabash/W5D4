Array.prototype.uniq = function () {
    const uniqs = [];

    this.forEach(function (element){
        if (!uniqs.includes(element)) {
            uniqs.push(element)
        };
        }
    )
    ;
    return uniqs;
}





Array.prototype.twosum = function () {
    const zerosums = [];
    let i = 0;
    while ( i< this.length ){
        let j = i + 1;
        while (j < this.length) {
            if (this[i] + this[j] === 0){
                let pair = [];
                pair.push(i);
                pair.push(j);
                zerosums.push(pair);
            }
            j++;
        }
        i++;
    }
    return zerosums;
}

Array.prototype.transpose = function () {
    const trans = new Array(this[0].length);
    for (let k = 0; k < trans.length; k++) {
        trans[k] = new Array(this.length);
    };

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            trans[j][i] = this[i][j];
        };
    };

    return trans;
}