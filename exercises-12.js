// Logic Challenge - Tentukan Deret Geometri

function tentukanDeretGeometri(arr) {
    for( i = arr.length -1; 1 > 0; i--) {
        var nilaiDeretGeometri;
        if( arr[i] % arr[i-1] == 0) {
            nilaiDeretGeometri = true;
            return nilaiDeretGeometri;
        }
        else {
            return false;
        }
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false