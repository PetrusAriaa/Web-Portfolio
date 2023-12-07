import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {Button} from "@nextui-org/react";
import {MdDensityMedium} from "react-icons/md";
import Link from "next/link";
export const MobileDrawer = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        isIconOnly
        size="lg"
        className="bg-myBlack/15 backdrop-blur-sm"
      >
        <MdDensityMedium size={25} className="text-myWhite" />
      </Button>
      <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter>
            <Button>Cancel</Button>
            <Button>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
