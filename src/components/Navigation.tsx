import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
  <nav className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 glass-card px-2 sm:px-6 py-2 sm:py-3 rounded-full w-[95%] max-w-4xl sm:w-auto${menuOpen ? ' extra-blur' : ''}`}> 
      {/* Hamburger for small screens */}
      <div className="flex sm:hidden justify-between items-center w-full">
        <span className="font-bold text-accent text-lg">Menu</span>
        <button
          className="p-2 rounded-full text-accent focus:outline-none focus:ring-2 focus:ring-accent"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>
      {/* Backdrop blur for mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)} />
      )}
      
      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div className={`absolute backdrop-blur-2xl left-0 top-full mt-2 w-full glass-card rounded-xl shadow-lg flex flex-col items-center py-4 border border-accent animate-fade-in`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
              className={`nav-link w-full py-2 ${activeSection === item.id ? 'active text-accent font-bold' : 'text-muted-foreground hover:text-accent'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
      {/* Normal nav for larger screens */}
      <div className="hidden sm:flex justify-center space-x-1 sm:space-x-2 overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;