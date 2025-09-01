import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex  justify-end items-center p-4">
      <p className="dark:text-neutral-400 text-zinc-500">Made by &nbsp;</p>
      <Link
        href=""
        target="_blank"
        className="text-neutral-600 dark:text-neutral-200 cursor-pointer">
        @LaibaSarfraz
      </Link>
    </footer>
  );
};

export default Footer;
