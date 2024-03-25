import { Flex, FlexProps, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
  onClose: ()=>void;
}
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      style={{backgroundColor:"black"}}
      height="20"
      alignItems="center"
      bg={'primary.bg'}
      borderBottomWidth="1px"
      borderBottomColor='primary.bg'
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};
