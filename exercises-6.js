function angkaPalindrome(num) {
    // var num = 117;
    var strNum = num.toString();
    var balikNum = ""; //String yang terbalik
    
    for( i = strNum.length -1; i >= 0; i-- ) {
        balikNum = balikNum + strNum[i];
    }
    // console.log(balikNum + '//////');
    // var setelahNum = "";
    
    // num++;
    for( i = num; i > 0; i++ ) {
        if( strNum == balikNum ) {
            return balikNum;
        }
        break;
    }
}

    // console.log(strNum);
    // console.log(balikNum);
//   }
  
  // TEST CASES
//   console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
//   console.log(angkaPalindrome(117)); // 121
//   console.log(angkaPalindrome(175)); // 181
//   console.log(angkaPalindrome(1000)); // 1001



//  ALGORITMA
  // cari dulu cara membalikkan masing-masing angka
    // cara membalikkan angka, jadikan angka jadi string, terus balikkan indeksnya
  // setelah angkanya terbalik uji apakah angka sama dengan angka terbalik
  // jika tidak sama, tambahkan angka
  // return angka sampai sama dengan angka yang terbalik