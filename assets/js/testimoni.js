var app = new Vue({
  el: '#main',
  data: {
    skills: [
      "Laravel",
      "Codeigniter",
      "Nextjs",
      "Reactjs",
      "Tailwindcss",
      "Redux Toolkit",
      "Wordpress",
      "Photoshop",
      "Corel Draw",
    ],
    testimonies: [

      {
        "name": "PT CBM",
        "title": "Travel Booking",
        "year": 2022,
        "tools": "Nextjs",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "PT CBM",
        "title": "Sistem ERP (Enterprise Resource Planning)",
        "year": 2019,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "PT CBM",
        "title": "SID (Sistem Informasi Desa)",
        "year": 2019,
        "tools": "Laravel",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "Rena",
        "title": "Sistem Informasi Penerimaan Siswa berbasis WEB",
        "year": 2019,
        "tools": "Laravel",
        "photo": "assets/img/testimonials/avatar-girl.png",
        "basis": "web"
      },
      {
        "name": "PT CBM",
        "title": "POS - Percetakan",
        "year": 2018,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "leaf cafe",
        "title": "POS leaf cafe",
        "year": 2018,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "PT CBM",
        "title": "Event",
        "year": 2018,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/cbm.svg",
        "basis": "web"
      },
      {
        "name": "Rangga",
        "title": "Sistem Informasi Ujian Online berbasis WEB",
        "year": 2017,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/rangga.PNG",
        "basis": "web"
      },
      {
        "name": "Muzan",
        "title": "Sistem Informasi Pemesanan Gas berbasis WEB dan Mobile",
        "year": 2016,
        "tools": "CodeIgniter & Android Studio",
        "photo": "assets/img/testimonials/muzan.PNG",
        "basis": "web"
      },
      {
        "name": "Ical",
        "title": "Sistem Informasi UKM",
        "year": 2019,
        "tools": "Laravel",
        "photo": "assets/img/testimonials/avatar-man.png",
        "basis": "web"
      },
      {
        "name": "Aris",
        "title": "Sistem Pakar Metode CBR",
        "year": 2016,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/aris.PNG",
        "basis": "web"
      },
      {
        "name": "Dede",
        "title": "Sistem Informasi BBI Balai Benih Padi ",
        "year": 2016,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/dede.PNG",
        "basis": "web"
      },
      {
        "name": "Ajim",
        "title": "Sistem Pendukung Keputusan Metode Topsis ",
        "year": 2017,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/ajim.PNG",
        "basis": "web"
      },
      {
        "name": "Musta'an",
        "title": "Sistem Informasi Klinik dengan Penjualan Obat ",
        "year": 2015,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/mustaan.PNG",
        "basis": "web"
      },
      {
        "name": "Farhan",
        "title": "Online Shop Penjualan Sayur - Sayuran Lombok Tengah ",
        "year": 2019,
        "tools": "CodeIgniter",
        "photo": "assets/img/testimonials/avatar-man.png",
        "basis": "web"
      },
      {
        "name": "Imron",
        "title": "Katalog Brankas",
        "year": 2020,
        "tools": "Laravel",
        "photo": "assets/img/testimonials/imron.PNG",
        "basis": "web"
      }
    ],
    services: [
      {
        title: "Website Builder",
        description: "Pembuatan Website baik menggunakan Framework PHP dan/atau CMS",
        icon: "icofont-web"
      },
      {
        title: "Mikrotik",
        description: "Instalasi jaringan internet dan config mikrotik untuk membagi jaringan dalam kantor / sekolah",
        icon: "icofont-wifi"
      },
      {
        title: "Design Grafis",
        description: "Design ID Card, Brosur, Spanduk dll",
        icon: "icofont-computer"
      }
    ],
    portfolios: [
      {
        title: "",
        type: "filter-desktop",
        image: "assets/img/portfolio/j-1.png"
      },
      {
        title: "",
        type: "filter-design",
        image: "assets/img/portfolio/d-1.png"
      },
      {
        title: "",
        type: "filter-design",
        image: "assets/img/portfolio/d-2.png"
      },
      {
        title: "",
        type: "filter-design",
        image: "assets/img/portfolio/d-3.png"
      },
      {
        title: "",
        type: "filter-design",
        image: "assets/img/portfolio/d-4.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-2.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-3.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-4.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-5.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-6.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-7.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-8.png"
      },
      {
        title: "",
        type: "filter-web",
        image: "assets/img/portfolio/w-9.png"
      },
      {
        title: "",
        type: "filter-desktop",
        image: "assets/img/portfolio/j-2.png"
      }
    ]
  }
})