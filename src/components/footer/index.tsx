const Footer= () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm p-6 md:p-10">
      <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end">
        {/* Left Section */}
        <div className="flex flex-col space-y-3">
          <div className="text-lg font-semibold text-blue-600">vedora.AI</div>
          <p className="text-xs">&copy; 2025 VedoraAI. All Rights Reserved.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex flex-col space-x-6 mt-4 md:mt-0">
          {['About', 'Features', 'Token', 'FAQ', 'Use Cases'].map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>
        {/* Middle Section - Links */}
        <div className="flex flex-col space-x-6 mt-4 md:mt-0">
        <div className="flex space-x-4 text-gray-500 text-lg">
            <span className="cursor-pointer">🎮</span>
            <span className="cursor-pointer">✖️</span>
            <span className="cursor-pointer">🐙</span>
          </div>
        </div>

        {/* Right Section - Icons & Legal Notice */}
        <div className="flex flex-col items-center md:items-end space-y-4 mt-4 md:mt-0">
          
          <p className="text-xs text-justify max-w-md">
            This content is for informational purposes only and is not legal, tax, investment, financial, or other advice...
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}
export default Footer;
