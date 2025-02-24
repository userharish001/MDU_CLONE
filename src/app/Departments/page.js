import Link from "next/link";

const links = [
  { id: 1, name: "Education", path: "#" },
  { id: 2, name: "Engg & Technology", path: "#" },
  { id: 3, name: "Humanities & Arts", path: "#" },
  { id: 4, name: "Interdisciplinary Studies", path: "#" },
  { id: 5, name: "Life Science", path: "#" },
  { id: 6, name: "Law", path: "#" },
  { id: 7, name: "Management Science & Commerce", path: "#" },
  { id: 8, name: "Physical Science", path: "/Departments/RelatedDepartments" },
  { id: 9, name: "Pharmaceutical Sciences", path: "#" },
  { id: 10, name: "Social Science", path: "#" },
];

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-4xl">
        <ul className="grid grid-cols-3 gap-4">
          {links.map((link) => (
            <li key={link.id} className="w-full">
              <Link
                href={link.path}
                className="block w-full px-4 py-3 bg-gray-500 text-white rounded-lg text-center hover:bg-blue-600 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
