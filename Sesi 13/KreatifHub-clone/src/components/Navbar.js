import React from "react";
import IcKreatifHub from "../images/Ic_KreatifHub.png";
import "../style/style.css";

export default function Navbar() {
  return (
    <>
      <div className="row justify-content-center shadow-sm bg-light">
        <div className="col-md-10 text-center">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
            <div className="container-xl">
              <a href="https://www.kreatifhub.com/">
                <img
                  src={IcKreatifHub}
                  style={{
                    width: "120px",
                    height: "auto",
                  }}
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#header">
                      CARI PROJECT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#talent">
                      DAFTAR TALENT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#freelance">
                      MARKETPLACE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gabung">
                      KREATIFACADEMY
                    </a>
                  </li>
                </ul>

                <div className="d-inline-flex me-2 language">
                  <select
                    id="language"
                    className="form-select bg-transparent"
                    style={{
                      border: "none",
                      color: "#114997",
                      fontWeight: "500",
                    }}
                  >
                    <option value="id">ID</option>
                    <option value="en">EN</option>
                  </select>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="me-2">
                    <a type="button" className="btn btn-outline-warning">
                      MASUK
                    </a>
                  </div>

                  <button type="button" className="btn btn-warning text-white">
                    DAFTAR
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
