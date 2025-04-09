function cariPencuri(tamu) {
    let tersangka = tamu[tamu.length - 1];
    
    return `Berdasarkan urutan kedatangan, ${tersangka} adalah orang terakhir yang berada di ruang jamu. Dia adalah tersangka utama!`;
}

let tamuDatang = ["Ningguang", "Hutao", "Xiao", "Childe"];

console.log(cariPencuri(tamuDatang));