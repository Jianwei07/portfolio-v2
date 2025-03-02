import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Connect With Me
      </h2>

      <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
        <a
          href="mailto:liawjianwei@outlook.com"
          className="flex items-center justify-center md:justify-start p-4 flex-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-5 h-5 mr-3 text-gray-600" />
          <span>liawjianwei@outlook.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/liawjianwei/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-start p-4 flex-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Linkedin className="w-5 h-5 mr-3 text-gray-600" />
          <span>LinkedIn Profile</span>
        </a>

        <a
          href="https://github.com/Jianwei07"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center md:justify-start p-4 flex-1 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Github className="w-5 h-5 mr-3 text-gray-600" />
          <span>GitHub</span>
        </a>
      </div>

      <p className="text-gray-500 text-center mt-8 text-sm">
        Feel free to connect with me through any of these platforms
      </p>
    </section>
  );
}
