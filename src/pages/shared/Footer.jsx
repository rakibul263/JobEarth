const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white">JobEarch</h2>
          <p className="mt-3 text-sm leading-relaxed">
            JobEarch is your trusted job portal to find the right job or the
            perfect candidate. Simple, fast, and reliable.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Find Jobs</li>
            <li className="hover:text-white cursor-pointer">Create Resume</li>
            <li className="hover:text-white cursor-pointer">Job Alerts</li>
            <li className="hover:text-white cursor-pointer">Career Tips</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Post a Job</li>
            <li className="hover:text-white cursor-pointer">
              Browse Candidates
            </li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Employer Guide</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} JobEarch. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ for job seekers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
