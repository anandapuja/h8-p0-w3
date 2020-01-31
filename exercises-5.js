//  Logic Challenge - Palindrome

function palindrome(kata) {

    var kataBalik = ""; // Tampung reverse word
    for( i = kata.length -1; i >= 0; i-- ) { // Balikin kata dengan index
            kataBalik += kata[i];
        }

    if(kataBalik === kata) { // Kondisi jika balikKata sama dengan kata, kembalikan true, begitu sebaliknya
        return true;
    }
    else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false