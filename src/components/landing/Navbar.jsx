import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  {
    label: 'À propos de nous',
    dropdown: [
      { label: 'Notre Histoire', href: '/notre-histoire' },
      { label: 'Nos Valeurs', href: '/nos-valeurs' },
    ],
  },
  { label: 'Services', href: '#services' },
  { label: 'Nos Clients', href: '#clients' },
  { label: 'Rendez-vous', href: '#booking' },
  { label: 'Blog', href: '/blog', isLink: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const mainColor = '#727f2d';

  const goHome = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector('#hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl shadow-md"
        style={{ backgroundColor: mainColor }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-24">

          {/* LOGO */}
          <a href="#hero" onClick={goHome} className="flex items-center">
            <img
              src="https://media.base44.com/images/public/69e63cfe37163cac729de2ea/99044bf05_Capture_d_cran_2026-05-18_104616-removebg-preview.png"
              alt="logo"
              className="h-28 md:h-32 w-auto"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-white">

            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 font-semibold hover:text-white/80">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-3 w-56 bg-white text-black rounded-xl shadow-xl overflow-hidden"
                      >
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            className="block px-5 py-3 hover:bg-gray-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.isLink ? (
                <Link key={link.href} to={link.href} className="font-semibold">
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={link.href === '#hero' ? goHome : undefined}
                  className="font-semibold"
                >
                  {link.label}
                </a>
              )
            )}

            {/* CTA */}
            <a
              href="#contact"
              className="bg-white text-[#727f2d] px-6 py-3 rounded-full font-bold hover:bg-white/90 transition"
            >
              Devis Gratuit
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: mainColor }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="w-8 h-8" />
            </button>

            {/* LINKS */}
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="text-center">
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="text-2xl font-bold"
                    >
                      {link.label}
                    </button>

                    {mobileAboutOpen && (
                      <div className="mt-3 flex flex-col gap-2">
                        {link.dropdown.map((sub) => (
                          <Link key={sub.href} to={sub.href}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : link.isLink ? (
                  <Link key={link.href} to={link.href} className="text-2xl font-bold">
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={link.href === '#hero' ? goHome : undefined}
                    className="text-2xl font-bold"
                  >
                    {link.label}
                  </a>
                )
              )}

              {/* CTA */}
              <a
                href="#contact"
                className="bg-white text-[#727f2d] px-8 py-4 rounded-full font-bold"
              >
                Devis Gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}