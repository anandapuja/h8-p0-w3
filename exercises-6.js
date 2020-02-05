// Logic Challenge - Number Palindrome

function angkaPalindrome(num) {
    
  // Buat fungsi pembalik parameter, sebelumnya jadikan parameter ke string agar bisa di indeks.
  function balikStringAngka(strAngka) {

  var strAngka = strAngka.toString();
  var balikAngka = "";
  for( j = strAngka.length -1; j >= 0; j-- ) {
    balikAngka += strAngka[j];
    }
  return balikAngka;
  }

  // Cek jika parameter sama dengan palindrome, increment sampai kondisi sama selanjutnya
  while( num > 0 ) {
    num++;
    if( num == balikStringAngka(num) ) {
      return balikStringAngka(num); // Return fungsi untuk menampilkan hasil
    }
  }

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
// TEST CASE SENDIRI
console.log(angkaPalindrome(2345)); // 2442
console.log(angkaPalindrome(947523)); // 947749