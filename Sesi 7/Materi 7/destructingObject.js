const user = {};
user.name = "Taufik Nurrahman";
user.handle = "@taunur_";
user.lokasi = "Nganjuk, Jawa Timur";

//extraction
/*
const name = user.name;
const handle = user.handle;
const lokasi = user.lokasi;
console.log(`Nama: ${name}, Instagram: ${handle}, lokasi: ${lokasi}`);
*/

// Alternatif
const { name, handle, lokasi } = user;
console.log(`Nama: ${name}, Instagram: ${handle}, lokasi: ${lokasi}`);
console.log(name, handle, lokasi);
