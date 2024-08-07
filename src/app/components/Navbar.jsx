
// 'use client';
// import { useContext, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FaBars, FaTimes, FaUser, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
// import { UserContext } from '../context/usercontext';
// import './Navbar.css';  
// import { CartContext } from '../context/cartcontext';
// import Image from 'next/image';
// import { assets } from '@/assets/assets';
// import Loading from '../loading';
// const Navbar = () => {
//   const context = useContext(UserContext);
//   const cartcontexts =useContext(CartContext)
//   const {cart} = cartcontexts
//   if (!context||!cartcontexts) {
//     return <h1>Context is not available</h1>; 
//   }
//   const { user, loading, isLoggedIn, setLoading } = context;
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const handleSignInClick = () => {
//     if (user) {
//       router.push(`/pages/profile/${user._id}`);
//     } else {
//       router.push(`/pages/login`);
//     }
//   };
// function homes(){
//   setLoading(true)
//   router.push('/')
//   setLoading(false)
// }
// function menu(){
//   setLoading(true)
//   router.push('/pages/menu')
//   setLoading(false)
// }
// function contacts(){
//   setLoading(true)
//   router.push('/pages/contact')
//   setLoading(false)
// }
// function app(){
//   setLoading(true)
//   router.push('/pages/app')
//   setLoading(false)
// }
 
// function carts(){
//   setLoading(true)
//   router.push('/pages/cart')
//   setLoading(false)
// }
// if (loading) {
//   return <Loading/>
// }
//   return (
//     <>
//       <nav className='navbar-container'>
//         <div className='logo'><Image src={assets.logo} alt='' width={90} height={30}></Image></div>
//         <div className='nav-links'>
//           <a className='button nav-link' onClick={homes}>Home</a>
//           <a className='button nav-link' onClick={menu}>Menu</a>
//           <a className='button nav-link' onClick={app}>Dev</a>
//           <a className='button nav-link'  onClick={contacts}>Contact</a>
//         </div>
//         <div className='icon-container'>
//           <div className='icon' onClick={carts}>
//             <FaShoppingCart /><span className='cartlength'>{user ? cart.length : 0}</span>
//           </div>
//           <div className='icon' onClick={handleSignInClick}>
//             {isLoggedIn ? <FaUser /> : <FaSignInAlt />}
//           </div>
//         </div>
//         <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>
//         <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//           <a className='button' href='/' onClick={() => setIsOpen(false)}>Home</a>
//           <a className='button' href="/pages/menu" onClick={() => setIsOpen(false)}>Menu</a>
//           <a className='button' href="/pages/app" onClick={() => setIsOpen(false)}>Dev</a>
//           <a className='button' href="/pages/contact" onClick={() => setIsOpen(false)}>Contact</a>
//           <a className='button' onClick={handleSignInClick}>
//             {isLoggedIn ? 'Profile' : 'Sign In'}
//           </a>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
'use client';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes, FaUser, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import { UserContext } from '../context/usercontext';
import './Navbar.css';  
import { CartContext } from '../context/cartcontext';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Loading from '../loading';

const Navbar = () => {
  const context = useContext(UserContext);
  const cartcontexts = useContext(CartContext);
  const router = useRouter();
  
  // Check context availability and loading status early
  const [isOpen, setIsOpen] = useState(false);
  
  if (!context || !cartcontexts) {
    return <h1>Context is not available</h1>;
  }

  const { user, loading, isLoggedIn, setLoading } = context;
  const { cart } = cartcontexts;

  // Handle navigation with loading state
  const handleNavigation = (path) => {
    setLoading(true);
    router.push(path);
    setLoading(false);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <nav className='navbar-container'>
        <div className='logo'>
          <Image src={assets.logo} alt='' width={90} height={30} />
        </div>
        <div className='nav-links'>
          <a className='button nav-link' onClick={() => handleNavigation('/')}>Home</a>
          <a className='button nav-link' onClick={() => handleNavigation('/pages/menu')}>Menu</a>
          <a className='button nav-link' onClick={() => handleNavigation('/pages/app')}>Dev</a>
          <a className='button nav-link' onClick={() => handleNavigation('/pages/contact')}>Contact</a>
        </div>
        <div className='icon-container'>
          <div className='icon' onClick={() => handleNavigation('/pages/cart')}>
            <FaShoppingCart /><span className='cartlength'>{user ? cart.length : 0}</span>
          </div>
          <div className='icon' onClick={() => handleNavigation(user ? `/pages/profile/${user._id}` : `/pages/login`)}>
            {isLoggedIn ? <FaUser /> : <FaSignInAlt />}
          </div>
        </div>
        <div className='hamburger' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <a className='button' href='/' onClick={() => setIsOpen(false)}>Home</a>
          <a className='button' href="/pages/menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a className='button' href="/pages/app" onClick={() => setIsOpen(false)}>Dev</a>
          <a className='button' href="/pages/contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a className='button' onClick={() => handleNavigation(user ? `/pages/profile/${user._id}` : `/pages/login`)} >
            {isLoggedIn ? 'Profile' : 'Sign In'}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;