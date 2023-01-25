var app = new Vue({
  el: '#main',
  data: {
    skills: [
      {
        title:"Laravel",
        image:"/assets/img/skills/skill-laravel.png",
        color:"bg-light"
      },
      {
        title:"Codeigniter",
        image:"/assets/img/skills/skill-ci.png",
        color:"bg-light"
      },
      {
        title:"Nextjs",
        image:"/assets/img/skills/skill-nextjs.png",
        color:"bg-light"
      },
      {
        title:"Nestjs",
        image:"/assets/img/skills/skill-nestjs.png",
        color:"bg-light"
      },
      {
        title:"Reactjs",
        image:"/assets/img/skills/skill-react.png",
        color:"bg-light"
      },
      {
        title:"Tailwindcss",
        image:"/assets/img/skills/skill-tailwind.png",
        color:"bg-light"
      },
      {
        title:"Redux Toolkit",
        image:"/assets/img/skills/skill-rtk.png",
        color:"bg-light"
      },
      {
        title:"Wordpress",
        image:"/assets/img/skills/skill-wp.png",
        color:"bg-light"
      },
      {
        title:"Photoshop",
        image:"/assets/img/skills/skill-ps.png",
        color:"bg-light"
      },
      {
        title:"Corel Draw",
        image:"/assets/img/skills/skill-cd.png",
        color:"bg-light"
      }
    ],
    sponsors: [
      {
        title:"Isticom",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s",
        color:"bg-secondary"
      }
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
        description: "Melayani jasa pembuatan website, seperti sekolah, toko, profile company, dll",
        icon: "icofont-web"
      },
      {
        title: "Internet",
        description: "Instalasi jaringan internet dan config mikrotik untuk membagi jaringan dalam kantor / sekolah",
        icon: "icofont-wifi"
      },
      {
        title: "Design Grafis",
        description: "Design ID Card, Brosur, Spanduk dll",
        icon: "icofont-computer"
      },
      {
        title: "Service dan Pengadaan Komputer",
        description: "Kami juga melayani service dan pengadaan komputer",
        icon: "icofont-computer"
      },
      {
        title: "CCTV",
        description: "Instalasi CCTV",
        icon: "icofont-video-cam"
      },
      {
        title: "Kelistrikan",
        description: "Instalasi kabel listrik dan panel rumahan",
        icon: "icofont-tools-alt-2"
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
      },
      {
        title: "",
        type: "filter-cctv",
        image: "assets/img/portfolio/cctv-1.jpg"
      },
      {
        title: "",
        type: "filter-computer",
        image: "assets/img/portfolio/c-1.jpg"
      },
      {
        title: "",
        type: "filter-computer",
        image: "assets/img/portfolio/c-2.jpg"
      },
      {
        title: "",
        type: "filter-listrik",
        image: "assets/img/portfolio/l-1.jpg"
      },
      {
        title: "",
        type: "filter-listrik",
        image: "assets/img/portfolio/l-2.jpg"
      },
      {
        title: "",
        type: "filter-listrik",
        image: "assets/img/portfolio/l-3.jpg"
      },
      {
        title: "",
        type: "filter-internet",
        image: "assets/img/portfolio/internet-1.jpg"
      },
      {
        title: "",
        type: "filter-internet",
        image: "assets/img/portfolio/internet-2.jpg"
      }
    ]
  }
})