function cekPalindrome(input) {
    const cls = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const kebalikan = cls.split('').reverse().join('');

    if (cls === kebalikan) {
        return "eureeka!";
    } else {
        return "suka blyat";
    }
}

console.log(cekPalindrome("Angsa"));
console.log(cekPalindrome("KataK"));
console.log(cekPalindrome("kasur empuk"));
console.log(cekPalindrome("Aku Suka Kamu"));
console.log(cekPalindrome("Ibu Ratna antar ubi."));