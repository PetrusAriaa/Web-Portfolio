import {useMediaQuery} from "@chakra-ui/react";

import {MobileDrawer} from "./MobileDrawer";
import MediumNavbar from "./MediumNavbar";

export const MyNavbar = () => {
  const [isMedium] = useMediaQuery("(min-width: 768px)");

  return !isMedium ? (
    <>
      <nav className="bottom-10 right-5 fixed z-[999] md:hidden">
        <MobileDrawer />
      </nav>
    </>
  ) : (
    <MediumNavbar />
  );
};
