"use client"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Correct import
import { ReactNode } from "react";

export function TopBar() {
  const session = useSession();
  const router = useRouter();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">EventMast</Link>
      </div>
      <nav className="flex space-x-4">
        <Link href="/events/new" className="text-slate-600">
          Organize
        </Link>
        <Link href="/events" className="text-gray-600">
          Discover
        </Link>
        <Link href="/trending" className="text-gray-600">
          Trending
        </Link>
      </nav>
      <div className="flex space-x-4">
        {session.data?.user ? (
          <Button
            onClick={async () => {
              await signOut();
              router.push("/api/auth/signin");
            }}
          >
            Sign Out
          </Button>
        ) : (
          <Button onClick={() => signIn()}>Login</Button>
        )}
      </div>
    </header>
  );
}

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="bg-white hover:bg-black text-black font-semibold hover:text-white py-1.5 px-3 text-sm border border-black hover:border-transparent rounded"
    >
      {children}
    </button>
  );
};

export default TopBar;
