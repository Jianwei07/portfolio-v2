import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px from the top
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gray-50 py-8 px-4 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="mb-4 text-center">
          <p className="text-gray-600 mb-2">Created by Jayden Liaw</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="text-xs text-gray-400 mt-2">
          Built with Next.js, TailwindCSS & Notion CMS 🚀
        </div>
      </div>

      {showScrollButton && (
        <Button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 h-10 w-10 p-0 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg transition-all duration-300"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </footer>
  );
}
