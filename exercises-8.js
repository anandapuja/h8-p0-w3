// Logic Challenge - Pasangan Angka Terbesar

function pasanganTerbesar(num) {
  
    var strNum = String(num); // Jadikan String
    var arrNum = strNum.split('');  // Pisahkan masing2 angka
    var arrDuaDigit = []; // Kelompokkan angkanya hingga jadi dua digit
    for( i = 0; i < strNum.length -1; i++ ) {
        arrDuaDigit[i] = Number(strNum[i] + strNum[i+1]);
    }

    var angkaTerbesar = arrDuaDigit[0]; // Kondisi pembanding pertama
    for( j = 0; j <= arrDuaDigit.length-1; j++ ) {
      if( arrDuaDigit[j] > angkaTerbesar ) { // Cari angka yang lebih besar dari pembanding pertama
        angkaTerbesar = arrDuaDigit[j]; // Timpa kondisi pembanding dengan angka paling besar
      }
    }

    return angkaTerbesar;
}

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99