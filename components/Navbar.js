import Link from "next/link";
import Image from "next/dist/client/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/ninjaa.png" height={128} width={128} objectFit="contain" />
      </div>

      <Link href="/">
        <a className="link">Home</a>
      </Link>
      <Link href="/about">
        <a className="link">About</a>
      </Link>
      <Link href="/ninjas">
        <a className="link">Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
