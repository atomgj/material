function SortAlgorithm(array) {
    this.array = array;
    this.size = array.length;
}

SortAlgorithm.prototype.swap = function(array, a, b) {
    if(a < 0 || b < 0 || array.length <= a || array.length <= b) {
        throw new Error('IndexError ' + a + " - " + b);
    }
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
};

SortAlgorithm.prototype.bubble = function bubbleSort() {
    for(var i = this.size - 1; 0 < i; i--) {
        for(var k = 0; k < i; k++) {
            if(this.array[k] > this.array[k + 1]) {
                this.swap(this.array, k, k + 1);
            }
        }
    }
};

SortAlgorithm.prototype.selection = function selectionSort() {
    for(var i = 0; i < this.size - 1; i++) {
        var min = i;
        for(var k = i + 1; k < this.size; k++) {
            if(this.array[k] < this.array[min]) {
                min = k;
            }
        }
        this.swap(this.array, i, min);
    }
};

SortAlgorithm.prototype.insertion = function insertionSort() {
    for(var i = 1; i < this.size; i++) {
        for(var k = i; 0 < k; k--) {
            if(this.array[k - 1] > this.array[k]) {
                this.swap(this.array, k - 1, k);
            } else {
                break;
            }
        }
    }
};

module.exports = SortAlgorithm;

