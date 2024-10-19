import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center mb-[45px]">
        <p className="text-sm text-[#999999]"> © Konstantin Zhigaylo 2024.</p>
        <p className="text-sm text-[#999999] text-center">
          The source code is available on{" "}
          <Link
            href="https://github.com/kostya-zero/homepage"
            className="hover:text-neutral-50 transition duration-200"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </>
  );
}

