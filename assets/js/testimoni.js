var app = new Vue({
  el: '#main',
  data: {
    testimonies: [
      {
        "name" : "Rena",
        "title" : "Sistem Informasi Penerimaan Siswa berbasis WEB",
        "year" : 2019,
        "tools" : "Laravel"
      },
      {
        "name" : "Rangga",
        "title" : "Sistem Informasi Ujian Online berbasis WEB",
        "year" : 2016,
        "tools" : "Codeigniter"
      },
      {
        "name" : "Muzan",
        "title" : "Sistem Informasi Pemesanan Gas berbasis WEB dan Mobile",
        "year" : 2016,
        "tools" : "Codeigniter & Android Studio"
      }
    ],
    services: [
      {
        title : "Website Builder",
        description : "Pembuatan Website baik menggunakan Framework PHP dan/atau CMS",
        icon : "icofont-web"
      },
      {
        title : "Mobile Application",
        description : "Development aplikasi mobile menggunakan React Native",
        icon : "icofont-brand-android-robot"
      },
      {
        title : "Mikrotik",
        description : "Instalasi jaringan internet dan config mikrotik untuk membagi jaringan dalam kantor / sekolah",
        icon : "icofont-wifi"
      },
      {
        title : "Design Grafis",
        description : "Design ID Card, Brosur, Spanduk dll",
        icon : "icofont-computer"
      }
    ],
    portfolios : [
      {
        title : "",
        type : "filter-desktop",
        image : "assets/img/portfolio/portfolio-6.jpg"
      },
      {
        title : "",
        type : "filter-web",
        image : "assets/img/portfolio/portfolio-4.jpg"
      },
      {
        title : "",
        type : "filter-web",
        image : "assets/img/portfolio/portfolio-5.jpg"
      },
      {
        title : "",
        type : "filter-design",
        image : "assets/img/portfolio/portfolio-1.png"
      },
      {
        title : "",
        type : "filter-design",
        image : "assets/img/portfolio/portfolio-2.png"
      },
      {
        title : "",
        type : "filter-design",
        image : "assets/img/portfolio/portfolio-3.png"
      }
    ]
  }
})