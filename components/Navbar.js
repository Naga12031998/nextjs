import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        {/* src path will automatically fetched from public folder */}
        <Image src="/a.png" width={128} height={120} alt="navLogo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/characters">Char Listing</Link>
    </nav>
  );
};

export default NavBar;
