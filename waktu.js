const navbar = document.getElementById('navbar');
  let isNavbarVisible = true;

  function hideNavbar() {
    navbar.classList.add('hidden');
    isNavbarVisible = false;
  }

  function showNavbar() {
    navbar.classList.remove('hidden');
    isNavbarVisible = true;
  }

  // Sembunyikan navbar saat iframe disentuh atau diklik
  const iframe = document.getElementById('iframeFullscreen');

  iframe.addEventListener('touchstart', hideNavbar); // Untuk perangkat touch
  iframe.addEventListener('click', hideNavbar);     // Untuk desktop/mouse

    // Tampilkan kembali navbar jika layar disentuh/diklik saat navbar tersembunyi.
    document.addEventListener('touchstart', function(event){
        if(!isNavbarVisible) {
            showNavbar();
        }
    });

    document.addEventListener('click', function(event){
        if(!isNavbarVisible) {
            showNavbar();
        }
    });
  const teksPengingat = document.getElementById('teks-pengingat');

  function tampilkanTeksPengingat() {
    const jam = new Date().getHours();
    let teks = "";

    switch (jam) {
      case 0:
        teks = "Selamat tengah malam!";
        break;
      case 1:
        teks = "Waktu istirahat malam...";
        break;
      case 2:
        teks = "Masih malam, jangan lupa istirahat!";
        break;
      case 3:
        teks = "Sebentar lagi subuh...";
        break;
      case 4:
        teks = "Waktu subuh telah tiba!";
        break;
      case 5:
        teks = "Selamat pagi! yuk lanjut Sholat fajar";
        break;
      case 6:
        teks = "Waktu sarapan...dan jangan lupa untuk sholat duha ya";
        break;
      case 7:
        teks = "Semangat bekerja!";
        break;
      case 8:
        teks = "Ambillah air minum agar tetap fokus";
        break;
      case 9:
        teks = "Fokus pada pekerjaan!";
        break;
      case 10:
        teks = "Istirahat sejenak...";
        break;
      case 11:
        teks = "Waktu makan siang!";
        break;
      case 12:
        teks = "Waktu Sholat Dzuhur";
        break;
      case 13:
        teks = "sudah jam 1 jangan lupa sholat dzuhur ya";
        break;
      case 14:
        teks = "sudah jam 2 loh, ayo sholat dzuhur";
        break;
      case 15:
        teks = "menuju waktu ashar";
        break;
      case 16:
        teks = "memasuki waktu Sholat ashar";
        break;
      case 17:
        teks = "Waktu sholat ashar...";
        break;
      case 18:
        teks = "Waktu Sholat Magrib";
        break;
      case 19:
        teks = "waktu Sholat Isya";
        break;
      case 20:
        teks = "Istirahat malam...";
        break;
      case 21:
        teks = "Waktu santai...";
        break;
      case 22:
        teks = "Sudah malam, jangan lupa tidur!";
        break;
      case 23:
        teks = "Selamat malam!";
        break;
      default:
        teks = "Waktu tidak valid";
    }

    teksPengingat.textContent = teks;
  }

  // Tampilkan teks pengingat saat halaman dimuat
  tampilkanTeksPengingat();

  // Atur interval untuk menampilkan teks pengingat setiap jam
  setInterval(tampilkanTeksPengingat, 3600000); // 3600000 milidetik = 1 jam
