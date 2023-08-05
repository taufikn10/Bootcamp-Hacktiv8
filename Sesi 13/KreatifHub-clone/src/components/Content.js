import React from "react";
import "../style/style.css";
// img
import Il_Kayla from "../images/Il_kayla.png";
import Il_publikasi from "../images/Il_publikasi.png";
import Il_komisi from "../images/Il_komisi.png";
import Il_klien from "../images/Il_klien.png";
import Thumb_Yt from "../images/Thumb_youtube.png";
import Banner from "../images/Banner.png";
import prof from "../images/ac_profesional.png";
import bisnis from "../images/ac_bisnis.png";
// img slider

export default function Content() {
  return (
    <main className="container-xl mt-5">
      {/* <!-- Content --> */}
      <section id="header" className="pt-5 header">
        <div className="bg-light">
          <div className="row jumbotron">
            <div className="col-md-6 pengenalan">
              <h2>Memudahkan akses memesan jasa freelancer industri Kreatif</h2>
              <p>
                KreatifHub memiliki misi untuk menghubungkan talent kreatif
                dengan pencari talent di industri kreatif Indonesia.
              </p>
              <p>Daftarkan jasa kamu sekarang!</p>
              <div className="button">
                <button className="btn btn-primary btn-lg mt-3 me-3">
                  Penyedia Jasa Individu
                </button>
                <button className="btn btn-primary btn-lg mt-3 me-3">
                  Agensi
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src={Il_Kayla} alt="ilustrasi kayla" className="ilustrasi" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Sponsor --> */}
      <section id="talent" className="tertarik">
        <div className="row text-center sponsor">
          <div className="col-md-4">
            <img src={Il_publikasi} alt="" />
            <h1 className="mt-3">Publikasi Gratis</h1>
            <p>
              Setiap Minggu KreatifHub memilih jasa terbaik untuk
              dipublikasikan.
            </p>
          </div>
          <div className="col-md-4">
            <img src={Il_komisi} alt="" />
            <h1 className="mt-3">Bebas Biaya Komisi</h1>
            <p>
              Dana 100% diteruskan ke penyedia jasa. jika sudah menyelesaikan
              pesanan.
            </p>
          </div>
          <div className="col-md-4">
            <img src={Il_klien} alt="" />
            <h1 className="mt-3">Klien Terpercaya</h1>
            <p>
              Terhindar dari ghostingan klien karna pesanan yang masuk dari
              klien terpercaya.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- video --> */}
      <section className="video">
        <div className="text-center">
          <h1>
            Ikuti Video singkat ini untuk daftarin jasa kamu di KreatifHub
          </h1>
        </div>
        <div className="thumb-yt text-center mt-2">
          <a href="https://www.youtube.com/c/KreatifHub" target="_blank">
            <img src={Thumb_Yt} alt="Thumb_youtube" />
          </a>
        </div>
      </section>

      {/* <!-- dana --> */}
      <section className="dana">
        <div className="text-center">
          <h1>Mudah tarik dana di KreatifHub</h1>
          <img src={Banner} alt="baner" className="banner" />
        </div>
      </section>

      {/* <!-- slider freelance--> */}
      {/* <section id="freelance" className="freelance">
        <div className="text-center">
          <h1>Jasa Freelance Paling diminati UMKM</h1>
          <div className="owl-carousel owl-theme gallery">
            <div className="item">
              <a href="#">
                <img src="images/slider/fotografi.png" alt="slider" />
                <p className="title">Fotografi</p>
              </a>
            </div>
            <div className="item">
              <a href="">
                <img src="images/slider/videografi.png" alt="slider" />
                <p className="title">videografi</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/slider/desain.png" alt="slider" />
                <p className="title">Desain</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={writing} alt="slider" />
                <p className="title">Writing</p>
              </a>
            </div>
            <div className="item">
              <a href="">
                <img src={animasi} alt="slider" />
                <p className="title">Animasi</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/slider/musik-dan-audio.png" alt="slider" />
                <p className="title">Music dan Audio</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="images/slider/content-creator.png" alt="slider" />
                <p className="title">Content Creator</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={editing} alt="slider" />
                <p className="title">Editing</p>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={beauty} alt="slider" />
                <p className="title">Beauty</p>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- gabung --> */}
      <section id="gabung" className="gabung">
        <div className="text-center">
          <h1>Gabung dengan KreatifHub Sekarang</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-center">
              Freelancer and Creative Professionals
            </h2>
            <div className="row">
              <div className="col-lg-4">
                <img src={prof} alt="" width="100%" />
              </div>
              <div className="col-lg-8">
                <ul>
                  <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                  <li>Mengikuti Acara KreatifAcademy</li>
                  <li>Pesan Jasa dari Marketplace</li>
                  <li>Jual Jasa di Marketplace</li>
                  <li>Kirim Lamaran Project</li>
                  <li>Upload Portofolio</li>
                </ul>
              </div>
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary btn-md">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <h2 className="text-center">Agensi dan Production House</h2>
            <div className="row">
              <div className="col-lg-4">
                <img src={bisnis} alt="" width="100%" />
              </div>
              <div className="col-lg-8">
                <ul>
                  <li>Buat Iklan Project dan Dapatkan Lamaran dari Talent</li>
                  <li>Kirim Lamaran Project</li>
                  <li>Buat Profil Bisnis dan Tambahkan Anggota Tim</li>
                  <li>Upload Portofolio Bisnis</li>
                  <li>Akses & Kelola Banyak Akun Anggota Tim</li>
                </ul>
              </div>
              <div className="d-flex justify-content-start">
                <button className="btn btn-primary btn-md">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
