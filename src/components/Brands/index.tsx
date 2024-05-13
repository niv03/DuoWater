import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section
    id="home"
    className="bg-white dark:bg-gray-dark mt-10"
    style={{ minHeight: '10vh', width: '100vw', overflowX: 'hidden' }}
  >
    <div className="w-full h-full overflow-auto flex justify-center items-start md:items-center"> 
      <img
        src="/images/hero/waves.png"
        alt="Image"
        className="min-h-full min-w-full md:h-auto md:max-w-none object-cover object-center"
      />
    </div>
  </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={imageLight} alt={name} fill className="hidden dark:block" />
        <Image src={image} alt={name} fill className="block dark:hidden" />
      </a>
    </div>
  );
};
