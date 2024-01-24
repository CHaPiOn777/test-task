'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Burger from 'components/shared/header/burger';
import Link from 'components/shared/link';
import MobileMenu from 'components/shared/mobile-menu';
import MENUS from 'constants/menus';
import logo from 'svgs/logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50 h-20 px-safe pt-safe bg-transparent">
        <nav
          className="container flex h-full items-center justify-between py-4"
          aria-label="Global"
        >
          <Link href="/">
            <Image src={logo} width={173} height={48} alt="DevOptima logo" priority />
          </Link>
          <ul
            className="flex space-x-12 justify-between items-center md:hidden min-w-[343px]
           absolute translate-x-[-50%] left-1/2"
          >
            {MENUS.header.map(({ to, text }, index) => (
              <li key={index} className="inline-block text-[0]">
                <Link
                  className="inline-block text-center text-base before:block before:h-0 before:font-medium before:overflow-hidden before:invisible before:content-[attr(title)]"
                  href={to}
                  theme="default"
                  size="md"
                  title={text}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          <Button theme="primary-blue-outline" size="md" className="flex md:hidden">
            Get started
          </Button>

          <Burger
            className="hidden md:block"
            isToggled={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
};

export default Header;
