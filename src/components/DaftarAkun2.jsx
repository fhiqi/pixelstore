import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DaftarAkun2 = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(270); // 4 minutes 30 seconds
  const [canResend, setCanResend] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showFailurePopup, setShowFailurePopup] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    let otpValues = [...otp];
    otpValues[index] = element.value;
    setOtp(otpValues);
    // Focus on the next input box if available
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    
    // Dummy OTP validation logic, replace with actual API call
    const correctOtp = "123456"; // Example OTP for testing
    if (otpCode === correctOtp) {
      setShowSuccessPopup(true);  // Trigger success popup
    } else {
      setShowFailurePopup(true);  // Trigger failure popup
    }
  };

  // Resend OTP logic
  const handleResend = () => {
    if (canResend) {
      setOtp(["", "", "", "", "", ""]);
      setResendTimer(270); // Restart the timer
      setCanResend(false);
      // Trigger OTP resend API call here if needed
    }
  };

  // Timer countdown logic
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
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

          {/* Semi-transparent Container */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
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
          <h1 className="text-4xl mb-6 text-white font-bold">Daftar Akun</h1>
          <p className="text-lg mb-8 text-white">
            Kode OTP telah terkirim. Masukkan 6 kode unik yang kami kirim di email Anda!
          </p>
          <form onSubmit={handleSubmit} className="w-full text-center">
            <div className="flex justify-center mb-6">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    name="otp"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    className="w-12 h-12 mx-2 text-2xl text-center bg-white rounded border border-gray-300"
                  />
                );
              })}
            </div>

            <div className="text-sm mb-4 text-white">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-red-500 hover:underline"
                >
                  Kirim ulang
                </button>
              ) : (
                <span className="text-gray-400">
                  Masukkan kode OTP dalam waktu {formatTime(resendTimer)}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4"
            >
              Verifikasi
            </button>
          </form>

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
                <img src="checkmark.png" alt="Checkmark" className="w-24 h-24 mb-4" />
                <h2 className="text-2xl mb-4 font-bold">Verifikasi Berhasil</h2>
                <p className="mb-4">Pendaftaran akun berhasil</p>
                <Link to="/main-page">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                    Lanjut Masuk
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Failure Popup */}
          {showFailurePopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center">
                <img src="error.png" alt="Error" className="w-24 h-24 mb-4" />
                <h2 className="text-2xl mb-4 font-bold">Verifikasi Gagal</h2>
                <p className="mb-4">Kesalahan Input Kode OTP</p>
                <button
                  onClick={() => setShowFailurePopup(false)}
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Coba Lagi
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DaftarAkun2;
