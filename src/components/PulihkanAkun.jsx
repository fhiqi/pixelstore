import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const PulihkanAkun = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("New Password: " + password);
    setShowPopup(true); // Show the popup when the form is valid
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Import Google Font Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Import Font Awesome (v6) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM/8zrtkTzMEx0bztElX26pESiUz9Aupq6An3c"
        crossOrigin="anonymous"
      />

      <div className="min-h-screen flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="relative w-1/2">
          <img src="background.jpg" alt="Background Image" className="w-full h-full object-cover" />

           {/* New Semi-transparent Container */}
           <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
            {/* Container that matches the uploaded image style */}
            <div className="bg-white bg-opacity-70 p-8 rounded-lg text-center shadow-lg flex flex-col justify-center items-center">
              <img
                src="PixelStore.png"
                alt="PixelStore"
                className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] mb-4"
              />
              <h2 className="text-3xl text-black font-bold mb-2">Nama Website</h2>
              <p className="text-black text-lg">Jelajahi ribuan footage menarik di website kami!</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-[#212121] flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl mb-6 text-white font-bold">Pulihkan Akun Anda</h1>
          <p className="text-lg mb-8 text-white">Silahkan Masukkan Password Baru Anda</p>
          <form onSubmit={handleSubmit} className="w-full">
            <label htmlFor="password" className="block text-lg mb-2 text-white">
              Masukkan Password
            </label>
            <div className="relative mb-6">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded bg-white text-black pr-12"
              />
              {passwordVisible ? (
                <EyeSlashIcon className="absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
              ) : (
                <EyeIcon className="absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
              )}
            </div>

            <label htmlFor="confirmPassword" className="block text-lg mb-2 text-white">
              Masukkan Kembali Password
            </label>
            <div className="relative mb-6">
              <input
                type={passwordVisible ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Masukkan password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 rounded bg-white text-black pr-12"
              />
              {passwordVisible ? (
                <EyeSlashIcon className="absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
              ) : (
                <EyeIcon className="absolute right-3 top-3 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4"
            >
              Ganti Password
            </button>
          </form>

         {/* Popup for Ganti Password */}
{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
      <img src="checkmark.png" alt="Checkmark" className="w-24 h-24 mb-4" /> {/* Checkmark Image */}
      <h2 className="text-2xl mb-4 font-bold">Perubahan Berhasil</h2>
      <p className="mb-4">Ubah password berhasil.</p>
      <Link to="/akun-berhasil-dipulihkan">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
          Lanjut Masuk
        </button>
      </Link>
    </div>
  </div>
)}
        </div>
      </div>
    </>
  );
};

export default PulihkanAkun;
