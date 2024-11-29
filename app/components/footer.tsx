import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mx-auto">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1: Trustpilot */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trustpilot</h3>
            <div className='text-gray-400'>
            Trustpilot is a trusted online review community that empowers consumers to share their experiences and helps businesses improve their services. Join millions of users in building trust worldwide.

            </div>
          </div>

          {/* Section 2: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-gray-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200">
                  System Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          © 2024 Trustpilot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
