export default function Footer() {
  return (
    <footer className="bg-[#002870] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-lg font-semibold">Gerardo Yepes Caro - Cámara C-106</p>
        <p className="text-sm text-gray-300">Partido Conservador Colombiano | El Partido del ORDEN</p>
        <p className="text-xs text-gray-400 pt-4">
          Web desarrollada por{" "}
          <a
            href="https://magnificpec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline font-medium"
          >
            magnificpec.com
          </a>
        </p>
      </div>
    </footer>
  )
}
