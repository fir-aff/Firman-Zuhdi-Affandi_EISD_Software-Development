function deteksiAnakNakal(data) {
    const hitung = {};

    for (const nama of data) {
        hitung[nama] = (hitung[nama] || 0) + 1;
    }

    let max = 0;
    for (const nama in hitung) {
        if (hitung[nama] > max) {
        max = hitung[nama];
        }
    }

    const palingSering = Object.entries(hitung)
        .filter(([_, jumlah]) => jumlah === max)
        .map(([nama]) => nama);
    
    if (max === 1) {
        console.log("Semuanya anak baik");
    } else if (palingSering.length === 1) {
        console.log(`${palingSering[0]} Nackal`);
    } else {
        console.log(`${palingSering.join(" dan ")} Nackal`);
    }
}
const input1 = [ "Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar" ];
const input2 = [ "Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar" ];
const input3 = ["Aisyah" , "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "Gilang", "Hana", "Indra", "Jihan"];

deteksiAnakNakal(input1);
deteksiAnakNakal(input2);
deteksiAnakNakal(input3);
