"use client"
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function TopBar() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">EventMast</div>
      <nav className="flex space-x-4">
        <Link href="/organize" className="text-slate-600">
          Organize
        </Link>
        <Link href="/discover" className="text-gray-600">
          Discover
        </Link>
        <Link href="/trending" className="text-gray-600">
          Trending
        </Link>
      </nav>
      <div className="flex space-x-4">
        <Button onClick={() => { }}>
          Register
        </Button>
        <Button onClick={() => { }}>
          Login
        </Button>
      </div>
    </header>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
