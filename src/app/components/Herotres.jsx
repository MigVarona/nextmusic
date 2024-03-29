import Image from "next/image";
import Link from "next/link";

function Herotres() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Gallery
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Explora una colección seleccionada de fotos de conciertos, retratos de artistas y portadas de álbumes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-8">
          <Link
            href="live"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              src="/Caribou.jpeg"
              width={600}
              height={600}
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              LIVE
            </span>
          </Link>

          <Link
            href="covers"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              src="/Discos/Moderat-III.jpg"
              width={600}
              height={600}
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              COVERS
            </span>
          </Link>

          <Link
            href="music"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              src="/Artistas/3673.webp"
              width={600}
              height={600}
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              ARTISTAS
            </span>
          </Link>

          <Link
            href="instruments"
            className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
          >
            <Image
              src="/7-synths-header.jpg"
              width={600}
              height={600}
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              SYNTH
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herotres;
