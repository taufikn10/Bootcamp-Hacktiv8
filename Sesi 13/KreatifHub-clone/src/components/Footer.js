import React from "react";
import kreatif from "../images/footer/kreatif_footer.png";
import pay from "../images/footer/pay_method.png";
import yt from "../images/footer/youtube.png";
import fb from "../images/footer/fb.png";
import ig from "../images/footer/ig.png";
import LI from "../images/footer/linkedIn.png";
import TT from "../images/footer/tiktok.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-7">
            <img
              className="img-fluid img-logo rounded-3"
              src={kreatif}
              alt="logo"
            />
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <h2>MEMBERSHIP</h2>
            <ul>
              <li>Daftar</li>
              <li>Profil Saya</li>
              <li>Pengaturan Akun</li>
              <li>Pasang Iklan</li>
              <li>Tingkatkan Membership</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <h2>KREATIFHUB</h2>
            <ul>
              <li>Tentang Kami</li>
              <li>Cari Project</li>
              <li>Daftar Talent</li>
              <li>Paket Bisnis</li>
              <li>Syarat dan Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>Kontak Kami</li>
              <li>Bantuan (FAQ)</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-7">
            <h2>METODE PEMBAYARAN</h2>
            <img
              className="img-fluid img-pembayaran"
              src={pay}
              alt="pembayaran"
            />
          </div>
        </div>
      </div>
      <div className="footer-2 container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <span className="copyright">
                &copy; 2022 KreatifHub. All Rights Reserved.
              </span>
            </div>

            <div className="col-md-7 d-md-inline-flex justify-content-end image-side">
              <span>
                <img src={yt} alt="" />
              </span>
              &nbsp;
              <span>
                <img src={fb} alt="" />
              </span>
              &nbsp;
              <span>
                <img src={ig} alt="" />
              </span>
              &nbsp;
              <span>
                <img src={LI} alt="" />
              </span>
              &nbsp;
              <span>
                <img src={TT} alt="" />
              </span>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
