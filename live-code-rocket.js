/**
 * 
 * ================
 * 2 Digit Oddities
 * ================
 * 
 * '1234987566710'
 * 
 * 
 * Pada program ini, kalian harus mengimplementasikan function oddFinder() yang menerima input berupa 'string' berisi angka.
 * String ini pasti diisi oleh angka dan tidak akan diisi oleh huruf/karakter lainnya.
 * Untuk setiap angka 2 digit yang bisa dibentuk dari kiri ke kanan, carilah angka ganjil yang paling besar.
 * Jika tidak ada angka ganjil di dalam string tersebut, maka function akan return 'Tidak ada yang ganjil'
 * 
 * RULES :
 * - DILARANG MENGGUNAKAN BUILT-IN METHOD / FUNCTION KECUALI Number .parseInt
 * - HARUS MENULIS PSEUDOCODE / ALGORITMA, TIDAK MENULIS = 0!
 */


function oddFinder(string) {
   // Bagi Dua
   var bagiDua;
   for( i = 0; i < string.length -1; i++) {
      bagiDua = string[i] + string[i+1]
   }
   console.log(bagiDua);
   return string;
}


console.log(oddFinder('1234987566710')); //87
console.log(oddFinder('246804422')); //Tidak ada yang ganjil