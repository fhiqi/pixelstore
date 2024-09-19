import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Import Heroicons
import { useNavigate } from 'react-router-dom';
import { firebaseAuthentication } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from 'firebase/auth';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); // State for Remember Me

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();

      signInWithEmailAndPassword(firebaseAuthentication, email, password)
      .then((res) => {
        console.log('Login berhasil:', res);
        if (res.user.emailVerified) {
          navigate('/daftar-akun2'); // Navigasi ke halaman dashboard atau halaman lain setelah login berhasil
        } else{
          alert('Verifikasi email anda terlebih dahulu!')
          signOut(firebaseAuthentication)
        }
      })
      .catch((err) => {
        console.error('Error saat login:', err);
        alert('Login gagal: ' + err.message);
      });

    if (email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Login Info:");
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Remember Me: " + rememberMe);
  };

  return (
    <>
      {/* Import Google Font Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="min-h-screen flex" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Left Section with Image Background */}
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

        {/* Right Section for Login Form */}
        <div className="w-1/2" style={{ backgroundColor: "#212121" }}>
          <div className="flex flex-col justify-center items-center p-10">
            <h1 className="text-4xl text-white mb-4 font-bold">Selamat Datang!</h1>
            <p className="text-lg text-white mb-8">
              Jelajahi ribuan footage menarik di website kami!
            </p>

            <form onSubmit={handleSubmit} className="w-full">
              <label htmlFor="email" className="block text-white mb-2">
                Email / username
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 rounded bg-white text-black"
              />

              <label htmlFor="password" className="block text-white mb-2">
                Password
              </label>
              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded bg-white text-black pr-12"
                />
                {showPassword ? (
                  <EyeSlashIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
                ) : (
                  <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 cursor-pointer" onClick={handleTogglePassword} />
                )}
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-white">
                  Remember Me
                </label>
              </div>

              <a href="LupaPassword.jsx" className="block text-right text-red-500 text-sm mb-4 underline">
                <Link to="/lupa-password">Lupa Password?</Link>
              </a>

              <button
                type="button"
                className="w-full bg-gray-300 text-black font-bold py-3 rounded flex items-center justify-center mb-4"
              >
                <img
                  src="google.png"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Masuk menggunakan Google
              </button>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded"
              >
                <a href="DaftarAkun2.jsx">
                  <Link to="/daftar-akun2">Masuk</Link>
                </a>
              </button>
            </form>

            <p className="text-white mt-4 font-bold">
              Belum punya akun?{" "}
              <a href="DaftarAkun1.jsx" className="text-red-500 underline">
                <Link to="/daftar-akun1">Daftar</Link>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
