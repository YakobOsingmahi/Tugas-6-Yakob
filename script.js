// Nomor 1
let anjing = {
  nama: 'Dogi',
  kaki: 4,
  warna: 'hitam',
  spesies: 'mamalia',
  makanan: ['Daging', 'ikan'],
  keahlian: () => {
    return 'berburu';
  },
};
console.log('Nama :', anjing.nama);
console.log('Jumlah kaki :', anjing.kaki);
console.log('Warna :', anjing.warna);
console.log('Spesies :', anjing.spesies);
console.log('Makanan :', anjing.makanan);
console.log(anjing.keahlian);

// Nomor 2
const data = [
  {
    name: 'Alpha',
    class: 'Dragon',
    club: ['Bola', 'Bulutangkis'],
  },
  {
    name: 'Beta',
    class: 'Lizard',
    club: ['Membaca', 'Bulutangkis'],
  },
];
console.log(data[0].name + ' ada di kelas ' + data[0].class + ' dia mengikuti ' + data[0].club);
console.log(data[1].name + ' ada di kelas ' + data[1].class + ' dia mengikuti ' + data[1].club);

// Nomor 3
let todos = [
  { id: 1, todo: 'belajar coding' },
  { id: 2, todo: 'nanti tidur' },
];

function printAll() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

function printById(id) {
  return todos[id - 0].todo;
}

function add(newTodo) {
  todos.push({
    id: todos.length + 1,
    todo: newTodo,
  });

  return todos;
}

function deleteById(id) {
  todos.splice(id - 1, 1);
  return todos;
}
function updateByID(newTodo) {
  todos[0].todo = newTodo;
  return todos;
}

printAll();
console.log('print By ID :', printById(1));
console.log('Add :', add('Makan'));
console.log('Delete :', deleteById(1));
console.log('UpdateByID:', updateByID('Belajar CRUD'));

// Nomor 4

let buah = [
  {
    nama: 'Apple',
    warna: 'Merah',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'Two seed',
    gambar_buah: 'Image/Apel.jpg',
  },
  {
    nama: 'Banana',
    warna: 'Kuning',
    nama_latin: 'Musa paradisiaca',
    tipe_biji: 'double seed',
    gambar_buah: 'Image/pisang.jpg',
  },
  {
    nama: 'Blueberry',
    warna: 'Biru',
    nama_latin: 'Vaccinium Carymbosum',
    tipe_biji: 'single seed',
    gambar_buah: 'Image/blueberry.jpg',
  },
  {
    nama: 'Cherry',
    warna: 'Merah',
    nama_latin: 'Prunus Apetala',
    tipe_biji: 'Single seed',
    gambar_buah: 'Image/cherry.jpg',
  },
  {
    nama: 'Lemon',
    warna: 'Kuning',
    nama_latin: 'Citrus Limon',
    tipe_biji: 'Double seed',
    gambar_buah: 'Image/lemon.jpg',
  },
  {
    nama: 'Mango',
    warna: 'hijau dan Kuning',
    nama_latin: 'Citrus Reticulata',
    tipe_biji: 'Single seed',
    gambar_buah: 'Image/mango.jpg',
  },
  {
    nama: 'Orange',
    warna: 'kuning',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'Double seed',
    gambar_buah: 'Image/Orange.jpg',
  },
  {
    nama: 'Pear',
    warna: 'Kuning',
    nama_latin: 'Pyrus Caucasica',
    tipe_biji: 'double seed',
    gambar_buah: 'Image/pear.jpg',
  },
];

console.table(buah);

const Apple = buah[0];
console.log(Apple.warna);
console.log(Apple.nama_latin);
console.log(Apple.tipe_biji);

const Banana = buah[1];
console.log(Banana.warna);
console.log(Banana.nama_latin);
console.log(Banana.tipe_biji);

const Blueberry = buah[2];
console.log(Blueberry.warna);
console.log(Blueberry.nama_latin);
console.log(Blueberry.tipe_biji);

const Cherry = buah[3];
console.log(Cherry.warna);
console.log(Cherry.nama_latin);
console.log(Cherry.tipe_biji);

const Lemon = buah[4];
console.log(Lemon.warna);
console.log(Lemon.nama_latin);
console.log(Lemon.tipe_biji);

const Mango = buah[5];
console.log(Mango.warna);
console.log(Mango.nama_latin);
console.log(Mango.tipe_biji);

const Orange = buah[6];
console.log(Orange.warna);
console.log(Orange.nama_latin);
console.log(Orange.tipe_biji);

const Pear = buah[7];
console.log(Pear.warna);
console.log(Pear.nama_latin);
console.log(Pear.tipe_biji);

document.getElementById('demo1').innerHTML = Apple.nama;
document.getElementById('demo2').innerHTML = Apple.warna;
document.getElementById('demo3').innerHTML = Apple.nama_latin;
document.getElementById('demo4').innerHTML = Apple.tipe_biji;

document.getElementById('demo5').innerHTML = Banana.nama;
document.getElementById('demo6').innerHTML = Banana.warna;
document.getElementById('demo7').innerHTML = Banana.nama_latin;
document.getElementById('demo8').innerHTML = Banana.tipe_biji;

document.getElementById('demo9').innerHTML = Blueberry.nama;
document.getElementById('demo10').innerHTML = Blueberry.warna;
document.getElementById('demo11').innerHTML = Blueberry.nama_latin;
document.getElementById('demo12').innerHTML = Blueberry.tipe_biji;

document.getElementById('demo13').innerHTML = Cherry.nama;
document.getElementById('demo14').innerHTML = Cherry.warna;
document.getElementById('demo15').innerHTML = Cherry.nama_latin;
document.getElementById('demo16').innerHTML = Cherry.tipe_biji;

document.getElementById('demo17').innerHTML = Lemon.nama;
document.getElementById('demo18').innerHTML = Lemon.warna;
document.getElementById('demo19').innerHTML = Lemon.nama_latin;
document.getElementById('demo20').innerHTML = Lemon.tipe_biji;

document.getElementById('demo21').innerHTML = Mango.nama;
document.getElementById('demo22').innerHTML = Mango.warna;
document.getElementById('demo23').innerHTML = Mango.nama_latin;
document.getElementById('demo24').innerHTML = Mango.tipe_biji;

document.getElementById('demo25').innerHTML = Orange.nama;
document.getElementById('demo26').innerHTML = Orange.warna;
document.getElementById('demo27').innerHTML = Orange.nama_latin;
document.getElementById('demo28').innerHTML = Orange.tipe_biji;

document.getElementById('demo29').innerHTML = Pear.nama;
document.getElementById('demo30').innerHTML = Pear.warna;
document.getElementById('demo31').innerHTML = Pear.nama_latin;
document.getElementById('demo32').innerHTML = Pear.tipe_biji;
