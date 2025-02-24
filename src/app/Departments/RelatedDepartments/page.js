import Link from "next/link";

const links = [
  { id: 1, name: "Dean", path: "#" },
  { id: 2, name: "Chemistry", path: "#" },
  { id: 3, name: "Computer Science & Applications", path: "/Departments/RelatedDepartments/Computer" },
  { id: 4, name: "Mathematics", path: "#" },
  { id: 5, name: "Physics", path: "#" },
  { id: 6, name: "Statistics", path: "#" },
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
