'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';

const menuItems = [
  {href: '/', label: 'Home'},
  {href: '/blog', label: 'Blog'},
  {href: '/about', label: 'About'},
  {href: '/contact', label: 'Contact'},
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold text-foreground">
            BinarySUST
          </Link>
          <div className="hidden md:flex space-x-4">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
