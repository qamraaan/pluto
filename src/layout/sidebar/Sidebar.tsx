"use client";
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";

import { SidebarContent } from "./SidebarContent";

export default function Sidebar() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <Box minH={{ base: "auto", md: "100vh" }} bg="primary.bg">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} onClose={onClose}/> */}
      <Box ml={{ base: 0, md: 60 }}></Box>
    </Box>
  );
}


