export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="transition hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Press</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="transition hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="transition hover:text-gray-900">FAQ</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Community</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="transition hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Terms of Service</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Cookie Policy</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Disclaimer</a></li>
            </ul>
          </div>

          {/* Follow Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="transition hover:text-gray-900">Twitter / X</a></li>
              <li><a href="#" className="transition hover:text-gray-900">LinkedIn</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Instagram</a></li>
              <li><a href="#" className="transition hover:text-gray-900">Facebook</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-500">&copy; 2025 PropertyHub. All rights reserved.</p>
          <p className="text-sm text-gray-500">Made with ❤️ for communities building wealth together</p>
        </div>
      </div>
    </footer>
  );
}
