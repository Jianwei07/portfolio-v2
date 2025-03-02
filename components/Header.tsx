// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, User, FolderGit2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  name: string;
  icon: React.FC<{ className?: string }>;
  onClick?: () => void;
  route?: string;
}

interface HeaderProps {
  activeSection: string;
  scrollToHome: () => void;
  // Remove scrollToAbout since About is now a separate route.
  scrollToProjects: () => void;
  scrollToContact: () => void;
}

const Header = ({
  activeSection,
  scrollToHome,
  scrollToProjects,
  scrollToContact,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems: NavItem[] = [
    { id: "home", name: "Home", icon: Home, onClick: scrollToHome },
    { id: "about", name: "About", icon: User, route: "/about" },
    {
      id: "projects",
      name: "Projects",
      icon: FolderGit2,
      onClick: scrollToProjects,
    },
    { id: "contact", name: "Contact", icon: Mail, onClick: scrollToContact },
  ];

  const handleNavClick = (callback?: () => void) => {
    setIsOpen(false);
    if (callback) callback();
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 lg:hidden text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
              {navItems.map((item) =>
                item.route ? (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-all duration-200 relative hover:text-gray-900",
                      activeSection === item.id
                        ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                        : "text-gray-600"
                    )}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.onClick)}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-all duration-200 relative hover:text-gray-900",
                      activeSection === item.id
                        ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                        : "text-gray-600"
                    )}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-sm font-medium text-gray-900">
              Navigation
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="p-4">
            {navItems.map((item) =>
              item.route ? (
                <Link
                  key={item.id}
                  href={item.route}
                  onClick={() => handleNavClick()}
                  className={cn(
                    "flex items-center gap-3 w-full p-3 rounded-lg transition-colors duration-200 text-sm font-medium",
                    activeSection === item.id
                      ? "bg-gray-50 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.onClick)}
                  className={cn(
                    "flex items-center gap-3 w-full p-3 rounded-lg transition-colors duration-200 text-sm font-medium",
                    activeSection === item.id
                      ? "bg-gray-50 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </button>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
