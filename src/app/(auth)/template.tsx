"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
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
