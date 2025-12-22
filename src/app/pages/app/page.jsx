

// 'use client';

// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import Footer from '@/app/components/Footer';
// import Navbar from '@/app/components/Navbar';

// // Styled components
// const AppContainer = styled.div`
//   padding: 2rem;
//   text-align: center;
//   color: #1a1a1a;
// `;

// const MobileSection = styled(motion.div)`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 2rem;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   h1 {
//     font-size: 1.5rem;
//     margin-bottom: 1rem;
//   }

//   @media (max-width: 768px) {
//     padding: 1.5rem;

//     h1 {
//       font-size: 1.25rem;
//     }
//   }

//   @media (max-width: 480px) {
//     padding: 1rem;

//     h1 {
//       font-size: 1rem;
//     }
//   }
// `;

// const DeveloperSection = styled(motion.div)`
//   margin-top: 3rem;
//   background-color: #f9f9f9;
//   font-family: 'Arial', sans-serif;
//   padding: 2rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

//   h2 {
//     font-size: 1.5rem;
//     color: #333;
//     margin-bottom: 1rem;
//   }

//   p {
//     font-size: 1.2rem;
//     color: #666;
//     line-height: 1.6;
//   }
// `;

// const ProfileImage = styled(Image)`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 1rem;
// `;

// const Skills = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// const Skill = styled(motion.div)`
//   background-color: #0070f3;
//   color: #fff;
//   padding: 0.5rem 1rem;
//   border-radius: 20px;
//   cursor: pointer;
//   font-size: 1rem;
// `;

// const Appn = () => {
//   return (
//     <>
//       <title>Dev - Foodify</title>
//       <Navbar />
//       <AppContainer>
       
//         <DeveloperSection
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           <h2>Developer Information</h2>
//           <ProfileImage
//             src={assets.developer}
//             alt="Developer Profile"
//             initial={{ x: '-100vw' }}
//             animate={{ x: 0 }}
//             transition={{ type: 'spring', stiffness: 50 }}
//           />
//           <p>
//             Faizan Hameed is a Full Stack Developer experienced in developing high-performance web applications using React, Next.js, Node.js, and MongoDB. Passionate about learning new technologies and improving coding skills. Open-source enthusiast and contributor.
//           </p>
//           <Skills>
//             {['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB','TailwindCss','Python','React-Native','SQL','MySQL','Redux','Git','Postman'].map((skill, index) => (
//               <Skill
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {skill}
//               </Skill>
//             ))}
//           </Skills>
//         </DeveloperSection>
//         <br/>
//         <MobileSection
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1>For Better Experience Download <br /> Tomato App</h1>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <Image width={150} height={50} src={assets.play_store} alt='playstore' />
//             <Image width={150} height={50} src={assets.app_store} alt='appstore' />
//           </div>
//         </MobileSection>
//       </AppContainer>
//       <Footer />
//     </>
//   );
// };

// export default Appn;


'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import '@/app/styles/dev.css'; // Import dev.css

const Appn = () => {
  return (
    <>
      <title>Dev - Foodify</title>
      <Navbar />
      <div className="app-container">
        <div className="developer-section">
          <h2>Developer Information</h2>
          <Image
            className="profile-image"
            src={assets.developer}
            alt="Developer Profile"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          />
          <p>
            Faizan Hameed is a Full Stack Developer experienced in developing high-performance web applications using React, Next.js, Node.js, and MongoDB. Passionate about learning new technologies and improving coding skills. Open-source enthusiast and contributor.
          </p>
          <div className="skills">
            {['JavaScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'TailwindCss', 'Python', 'React-Native', 'SQL', 'MySQL', 'Redux', 'Git', 'Postman'].map((skill, index) => (
              <div
                key={index}
                className="skill"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="mobile-section">
          <h1>For Better Experience Download <br /> Tomato App</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image width={150} height={50} src={assets.play_store} alt='playstore' />
            <Image width={150} height={50} src={assets.app_store} alt='appstore' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appn;



