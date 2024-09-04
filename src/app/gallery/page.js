import Image from "next/image";
// import nextImage from "../../assets/nextjs image.png"; //relative path
import nextImage from "@/assets/nextjs image.png"; //absulat path

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />

      <h2 className="text-center text-2xl">Next.Js Image component</h2>
      <Image
        className="mx-auto"
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="alt"
        width={500}
        height={500}
      />

      <h2 className="text-center text-2xl">Loval Image component</h2>
      <Image
        className="mx-auto"
        src={nextImage}
        alt="alt"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
