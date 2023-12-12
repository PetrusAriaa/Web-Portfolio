import {useMediaQuery} from "@chakra-ui/react";

import MobileDrawer from "./MobileDrawer";
import MediumNavbar from "./MediumNavbar";

const Navbar = () => {
  const [isMedium] = useMediaQuery("(min-width: 768px)");

  return !isMedium ? <MobileDrawer /> : <MediumNavbar />;
};

export default Navbar;
