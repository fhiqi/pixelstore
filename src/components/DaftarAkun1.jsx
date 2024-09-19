import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { firebaseAuthentication } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { sendEmailVerification } from 'firebase/auth';


const DaftarAkun1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formState, setFormState] = useState({
    emailOrPhone: '',
    password: ''
  });

  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault();
    const { emailOrPhone, password } = formState;

    createUserWithEmailAndPassword(firebaseAuthentication, emailOrPhone, password)
      .then((res)=>{
        const user = res.user; // Mengambil user dari response
        sendEmailVerification(user)
          .then(()=>{
              alert('Mohon verifikasi email anda');
              navigate('/');
          })
          .catch((error)=>{
              alert(error.message)
          })
      })
      .catch(err=>{
          alert(err.message)
      })
    


    if (!firstName || !lastName || !username || !emailOrPhone || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Username: " + username);
    console.log("Email/Phone: " + emailOrPhone);
    console.log("Password: " + password);

    // Handle the complete form submission logic here, like sending data to the backend.
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
        {/* Left side image and text */}
        <div className="relative w-1/2">
          <img src="background.jpg" alt="Background Image" className="w-full h-full object-cover" />
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

        {/* Right side form */}
        <div className="w-1/2 bg-[#212121] flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl mb-6 text-white font-bold">Daftar Akun</h1>
          <p className="text-lg mb-8 text-white">Ayo Selesaikan Pendaftaran dan Segera bergabung ke Tomb Oati Market</p>
          <form onSubmit={handleSubmit} className="w-full">

            {/* First Name */}
            <label htmlFor="firstName" className="block text-lg mb-2 text-white">
              Nama Depan
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Masukkan nama depan"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Last Name */}
            <label htmlFor="lastName" className="block text-lg mb-2 text-white">
              Nama Belakang
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Masukkan nama belakang"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Username */}
            <label htmlFor="username" className="block text-lg mb-2 text-white">
              Username
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Email or Phone */}
            <label htmlFor="emailOrPhone" className="block text-lg mb-2 text-white">
              Email/No. Telepon
            </label>
            <div className="relative mb-6">
              <input
                type="text"
                id="emailOrPhone"
                name="emailOrPhone"
                placeholder="Masukkan email atau nomor telepon"
                value={formState.emailOrPhone}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    emailOrPhone: e.target.value
                  })
                }
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="block text-lg mb-2 text-white">
              Password
            </label>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukkan password"
                value={formState.password}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    password: e.target.value
                  })
                }
                className="w-full p-3 rounded bg-white text-black"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash text-gray-600"></i>
                ) : (
                  <i className="fas fa-eye text-gray-600"></i>
                )}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4"
            ><Link to="/">Daftar</Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DaftarAkun1;
