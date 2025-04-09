function dekripsiCaesar(teks, geser = 5) {
    let hasil = '';

    for (let i = 0; i < teks.length; i++) {
        const char = teks[i];

        if (char >= 'a' && char <= 'z') {
            let kode = char.charCodeAt(0);
            let kodeBaru = ((kode - 97 - geser + 26) % 26) + 97;
            hasil += String.fromCharCode(kodeBaru);
        } else {
        hasil += char;
        }
    }

    return hasil;
}

const chat = [
    "xfqfr bfmdz",
    "gjxtp lzj rfz ifkyfw jxi snm",
    "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?",
    "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz",
    "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"
];

chat.forEach((kalimat, i) => {
    const hasil = dekripsiCaesar(kalimat);
    console.log(`Chat ${i + 1}: ${hasil}`);
});