function SortAlgorithm(arr){
  this.array = arr;
  this.size = arr.length;
}

SortAlgorithm.prototype.swap = function(arr, a, b){
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

SortAlgorithm.prototype.bubble = function(){
  for(var i = this.size-1; 0 < i; i--){
    for(var j = 0; j < i; j++){
       if(this.array[j] > this.array[j+1]){
          this.swap(this.array, j, j+1);
       }
    }
  }
};


SortAlgorithm.prototype.insertion = function(){
   for(var i = 1; i< this.size; i++){
      for(var j = i; 0 < j; j--){
         if(this.array[j-1] > this.array[j]){
            this.swap(this.array, j-1, j);
         }else{
            break;
         }
      }
   }
};


SortAlgorithm.prototype.selection = function(){

   for(var i=0; i< this.size-1; i++){
     var min = i;
     for(var j = i+1; j< this.size; j++){
        if(this.array[j] < this.array[min]){
            min = j;
        }       
        this.swap(this.array, i, min);
     }
   }

};




var ary = [];

for(var k=0; k< 10; k++){
   ary.push(parseInt(Math.random()*100, 10));
}

var sortAlgorithm = new SortAlgorithm(ary);


//sortAlgorithm.insertion();
sortAlgorithm.selection();
console.log(ary);
