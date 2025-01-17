
'use client'
import { UserContext } from '@/app/context/usercontext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa6';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Loading from '@/app/loading';
import '@/app/styles/login.css';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(UserContext);
  const { setUser, setIsLoggedIn, setLoading, loading } = context;
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post('/api/users/login', { email, password });
    console.log('Login Response:', res);
    if (res.data && typeof res.data.message === 'string') {
      toast.success(res.data.message);
    } else {
      toast.error('Unexpected response format');
    }
    if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_NAME){
      toast.success("Admin Verified")
      router.push('/pages/admin')
      setUser(res.data.user)
      setIsLoggedIn(true)
    }
    else{
    setUser(res.data.user); // Adjust based on your API response structure
    setIsLoggedIn(true);
    router.push('/');
    location.reload()
    }
  } catch (err) {
    console.error('Login Error:', err);
    toast.error(err.response?.data?.message || 'Login failed');
  } finally {
    setLoading(false);
  }
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   axios.post('/api/users/login', { email, password })
  //     .then(res => {
  //       console.log(res);
  //       toast.success(res.data);
  //       setUser(res.data)
  //       setIsLoggedIn(true);
  //       toast.success("Login success");
  //       router.push('/pages/menu')
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       toast.error(err.response.data.message);
  //       setLoading(false);
  //     });
  // };

  if (loading) {
    return <Loading />;
  }

  function createAccount() {
    router.push('/pages/signup');
  }
  function forgotPASS() {
    router.push('/pages/forgotpassword');
  }

  return (
    <>
      <title>Login - Foodify</title>
      <Navbar />
      <br /><br />
      <div className="container">
        <div className="form-wrapper">
          <h1 className="title">Hey welcome back !</h1>
          <div className="divider">
            <FaGoogle color='red' size={30} cursor='pointer' />
            <FaGithub size={30} cursor='pointer' color='black' />
            <FaFacebook color='blue' cursor='pointer' size={30} />
          </div>
          <hr />
          <p className="para">OR</p>
          <form onSubmit={handleSubmit}>
            <input type="email" className="input" placeholder="Email" required name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="input" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="buttonlogin">Login</button>
          </form>
          <p className="para" onClick={forgotPASS}>Forgot Password?</p>
          <hr />
          <p className="para">OR</p>
          <button onClick={createAccount} className="buttonlogin">Create Account</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
