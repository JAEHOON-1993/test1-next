import React from 'react';

import NavType1Container from 'components/Navigation/example/TextNavigation_1';
import NavType2Container from 'components/Navigation/example/TextNavigation_2';
import NavType3Container from 'components/Navigation/example/TextNavigation_3';
import NavType4Container from 'components/Navigation/example/TextNavigation_4';
import NavType5Container from 'components/Navigation/example/TextNavigation_5';

const NavigationPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#ddd' }}>
      <NavType1Container />
      <div style={{ height: 10 }} />
      <NavType2Container />
      <div style={{ height: 10 }} />
      <NavType3Container />
      <div style={{ height: 10 }} />
      <NavType4Container />
      <div style={{ height: 10 }} />
      <NavType5Container />
    </div>
  );
};

// export async function getStaticProps() {
//   const backgroundColor = '#000';

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: { backgroundColor }, // will be passed to the page component as props
//   };
// }
export default NavigationPage;
