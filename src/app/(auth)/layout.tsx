"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((el) => {
        const isActive = pathname.startsWith(el.href);
        return (
          <Link href={el.href} key={el.name} className={isActive ? "font-bold mr-4" : "text-blue-400 mr-4"}>
            {el.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
