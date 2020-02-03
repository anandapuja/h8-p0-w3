// Logic Challenge - Tentukan Deret Aritmatika

function tentukanDeretAritmatika(arr) {
    
    // Cari interval antara nilai ke-0 dengan setelahnya
    var nilaiTetap = Number([]);
    if(true) {
        nilaiTetap += arr[0 + 1] - arr[0]; // 1,
    }

    // Cari jumlah penambahan tiap interval
    var nilaiSementara = Number([]);
    for( i = 0; i < arr.length -1; i++ ) {
        nilaiSementara += arr[i + 1] - arr[i]; // 1,
    }

    // Tambahkan nilai interval 1 lagi agar sesuai dengan length
    var nilaiTotal = nilaiSementara + nilaiTetap;

    // Cek kondisi
    if ( nilaiTotal / arr.length === nilaiTetap ){
        return true;
    } else {
        return false;
    }
  }
  
//   // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
