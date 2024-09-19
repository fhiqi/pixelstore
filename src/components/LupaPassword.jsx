import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LupaPassword = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '') {
      alert('Please fill in the email field.');
      return;
    }

    console.log('Email: ' + email);
    // Submit form or handle login logic here
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
          <img
            src="background.jpg"
            alt="Background Image"
            className="w-full h-full object-cover"
          />

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
        
      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10" style={{ backgroundColor: '#212121', fontFamily: "'Poppins', sans-serif" }}>
        <h1 className="text-4xl font-bold mb-6 text-white">Lupa Kata Sandi?</h1>
        <p className="text-lg text-white mb-8 text-center">
          Jangan khawatir, kami akan membantu anda mengatur ulang kata sandi anda!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
          <label htmlFor="email" className="text-lg text-white mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-6 rounded bg-white text-black border border-gray-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold text-lg py-3 rounded w-full"
          ><Link to="/pulihkan-akun">Masuk</Link>
          </button>
        </form>

        <p className="mt-6 font-bold text-white">
          Belum punya akun? <a href="DaftarAkun1.jsx" className="text-red-500 underline"><Link to="/daftar-akun1">Daftar</Link></a>
        </p>
      </div>
    </div>
    </>
  );
};

export default LupaPassword;
