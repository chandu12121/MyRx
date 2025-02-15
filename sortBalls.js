function sortBalls(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
  
    while (mid <= high) {
      if (arr[mid] === 'B') {
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
      } else if (arr[mid] === 'G') {
        mid++;
      } else { 
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
      }
    }
    
    return arr;
  }
  
module.exports=sortBalls