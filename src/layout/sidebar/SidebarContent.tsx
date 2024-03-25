import { Box, BoxProps, CloseButton, Flex } from "@chakra-ui/react";
import NavItem from "../components/Navlink";
import { IconType } from "react-icons";
import { FiUser } from "react-icons/fi";


interface LinkItemProps {
  name: string;
  icon: IconType;
  path?: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Users", icon: FiUser, path: "/users" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {

  return (
    <Box
      overflow="scroll"
      w={{ base: "full", md: 60 }}
      h="full"
      {...rest}
    >
      <Flex
        my="8"
        px="30px"
        justifyContent="space-between"
      >
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex justifyContent="center" direction="column" px="4">
        {LinkItems.slice(0, 5).map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path ?? "/"}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};