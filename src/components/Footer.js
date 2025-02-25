import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLabelImportant } from "react-icons/md";

const Footer = () => {
  let randomNumber = Math.floor(Math.random() * 1000 + 1);

  return (
    <div className="bg-black text-white">
      {/* Social Media Links */}
      <div className="flex justify-center gap-3 py-3">
        <Link href="#" className="hover:text-blue-600 text-2xl"><FaFacebook /></Link>
        <Link href="#" className="hover:text-blue-600 text-2xl"><FaTwitter /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><FaInstagramSquare /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><FaYoutube /></Link>
        <Link href="#" className="hover:text-red-600 text-2xl"><MdEmail /></Link>
      </div>

      {/* Quick Links, MDU Portals, and Important Links */}
      <div className="flex flex-col md:flex-row justify-between px-4 gap-8 py-6">
        {/* Quick Links */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              Quick Links <MdLabelImportant />
            </h2>
            {[
              "Home", "Online Links", "Forms", "Student Corner", "LMS Portal", "Seminar/Conference/Workshop",
              "Policies", "Advertisement", "Associations/Council", "Contact Us", "Online Reappear Form Links",
              "Union of India", "Haryana Sarkar (Acts)", "Pay Fee Online through SB Collect", "Admission Helpdesk- MDU",
              "Admission Helpdesk- CPAS MDU", "MDU Email", "Admission Helpdesk -Foreign Students", "Mobile App Privacy Policy"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* MDU Portals */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              MDU Portals <MdLabelImportant />
            </h2>
            {[
              "NAAC", "Journals", "DSW", "Syllabi", "Tenders", "NIRF", "IQAC",
              "Faculty Development Centre--Malaviya Mission Training Centre",
              "Department Of Alumni Relations", "GIAN", "Anti Sexual Harassment Cell",
              "Prevention Caste Based Discrimination", "Human Ethics Committee",
              "Centre for Innovation, Incubation & Entrepreneurship", "Administrative Staff College"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div className="flex-1">
          <ul className="py-2">
            <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
              Imp. Links <MdLabelImportant />
            </h2>
            {[
              "Search Panel", "Exam Notification", "Admission", "Notices", "Datesheet", "Result Gazette",
              "Sports", "RTI", "E-Repository", "Anti-Ragging Committee", "Term & Conditions/Disclaimer",
              "UGC", "AICTE", "PCI", "BCI", "Mechanism for Redressing Grievances of Students", "MoE"
            ].map((link, index) => (
              <li key={index} className="mb-2">
                <Link href="#" className="hover:text-blue-300 text-sm md:text-base">{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Notice */}
      <p className="text-center py-1 text-sm md:text-base">
        Copyright © 2024 MDU ROHTAK. All rights Reserved
      </p>
      <p className="text-center py-3 text-sm md:text-base px-4">
        The University Logo is property of the University. If anyone uses the University Logo without written permission in any form, fully or partially, they can face Legal Consequences.
      </p>

      {/* Online Users and Developer Info */}
      <div className="bg-gray-800 text-center py-3">
        <p className="text-sm md:text-base">Total Online Users: {randomNumber}</p>
        <p className="text-sm md:text-base">Designed & Developed By: Harish (M.Sc Computer Science)</p>
      </div>
    </div>
  );
};

export default Footer;