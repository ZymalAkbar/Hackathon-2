import Image from "next/image";
import Navbar from "../navbar/page";

function Page1() {
  return (
    <>
      <Navbar/>
      <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6">
       {/* first Image Section (header.png) */}
       <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/header.png"
            alt="header Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>
        {/* Third Image Section (about.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/about.png"
            alt="About Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Fourth Image Section (food.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/food.png"
            alt="Food Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Fifth Image Section (why.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/why.png"
            alt="Why Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Sixth Image Section (Clients.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/Clients.png"
            alt="Clients Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Seventh Image Section (menu.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/menu.png"
            alt="Menu Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Eighth Image Section (chef.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/chef.png"
            alt="Chef Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Ninth Image Section (review.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/review.png"
            alt="Review Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Tenth Image Section (process.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/process.png"
            alt="Process Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* Eleventh Image Section (Blog.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/Blog.png"
            alt="Blog Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>

        {/* twelveth Image Section (footer.png) */}
        <div className="flex justify-center items-center w-full py-6">
          <Image
            src="/Footer.png"
            alt="footer Image"
            height={600} // Larger zoomed size
            width={1200} // Larger zoomed size
            className="w-[1200px] sm:w-[1400px] h-auto max-w-[90%]"
          />
        </div>
      </div>
    </>
  );
}

export default Page1;



