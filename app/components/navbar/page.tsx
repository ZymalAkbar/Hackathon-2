import Image from "next/image";  // Import Image from next/image
import Link from "next/link";     // Import Link for navigation

function Navbar() {
  return (
    <>
      {/* Apply bg-black class to the body */}
      <div > {/* This makes the entire page have a black background */}
        <div className="w-full flex justify-center absolute top-[45px] left-0 right-0">
          <div className="w-full max-w-[1320px] h-[87px]">
            {/* Logo Section - Centered for all screen sizes */}
            <div className="flex flex-col items-center justify-center text-center pb-4 md:pb-0">
              <h1 className="text-bold text-[24px] text-primary">Food<b className="text-white">tuck</b></h1> {/* Combined Food and tuck */}
            </div>

            {/* Navbar - Flex layout */}
            <nav className="flex flex-wrap justify-between items-center h-auto px-6 py-4 md:py-0 text-white text-[16px]">
              {/* Navbar Links - Hidden on mobile, shown on medium screens and above */}
              <div className="flex space-x-6 md:flex">
                <Link href="#">Home</Link>
                <Link href="#">Menu</Link>
                <Link href="#">Blog</Link>
                <Link href="#">Pages</Link>
                <Link href="#" className="flex items-center">
                  About
                  <img
                    src="/CaretRight.png"  // Path to the icon image in the public folder
                    alt="About Icon"
                    className="w-[12px] h-[12px] ml-2" // Size the icon and add margin on the left
                  />
                </Link>
                <Link href="#">Shop</Link>
                <Link href="#">Contact</Link>
              </div>

              {/* Hamburger menu for mobile (Hidden on larger screens) */}
              <div className="block md:hidden">
                <button className="text-white text-xl">☰</button> {/* Hamburger menu icon */}
              </div>

              {/* Container for search icon and additional icon */}
              <div className="relative ml-auto flex items-center">
                {/* Search icon */}
                <Image
                  src="/search.png"  // Path to the search icon image in the public folder
                  alt="Search Icon"
                  width={230}         // Set width (in pixels)
                  height={40}         // Set height (in pixels)
                  className="w-[230px] h-[40px] sm:w-[230px] sm:h-[40px] md:w-[230px] md:h-[40px]" // Adjust size on smaller screens
                />
                {/* Additional icon next to search */}
                <Image
                  src="/Handbag.png"  // Path to the additional icon image in the public folder
                  alt="Additional Icon"
                  width={24}          // Set width (in pixels)
                  height={24}         // Set height (in pixels)
                  className="ml-2"    // Add margin-left to create space between the icons
                  style={{ width: "auto", height: "auto" }} // Ensure proper aspect ratio handling
                />
                {/* Overlay text aligned to the left inside the search icon */}
                <div className="absolute top-[50%] left-[10%] transform -translate-y-[50%] text-white text-[18px] font-semibold hidden md:block">
                  Search
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
