// import Link from "next/link";

// const routes = [
//   {
//     path: "/terms-conditions",
//     name: "Terms & Conditions",
//   },
//   {
//     path: "/privacy-policy",
//     name: "Privacy Policy",
//   },
// ];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-center h-[5vh] border-t border-white/10 px-3 sm:px-9 text-xs text-white/75 bg-black/65">
      <small className="text-xs justify-self-center">
        &copy; 2025 Victor Aguiar. All rights reserved.
      </small>

      {/* <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul> */}
    </footer>
  );
}
