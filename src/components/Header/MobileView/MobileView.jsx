import { useState } from 'react';

import { MainDiv, MainDivLoggedIn } from './MobileView.Styled';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Logo } from '../Logo/Logo';
import { UserBar } from '../UserBar/UserBar';


export const MobileView = ({ isLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <MainDivLoggedIn>
          <Logo />

          <UserBar openMenu={() => setIsOpen(!isOpen)} />

          <MobileMenu closeMenu={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </MainDivLoggedIn>
      ) : (
        <MainDiv>
          <Logo />
        </MainDiv>
      )}
    </>
  );
};
