var SortAlgorithm = require('./sortable'),
    i, array = [],
    sortAlgorithm;

for(i=0; i<20;i++){
    array.push(parseInt(Math.random() * 100, 10));
}

sortAlgorithm = new SortAlgorithm(array);

//sortAlgorithm.selection();
//sortAlgorithm.insertion();
sortAlgorithm.bubble();
console.log(array);
