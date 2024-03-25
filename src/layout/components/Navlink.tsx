import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";

interface NavItemProps {
    children: ReactNode;
    path: string;
    icon: IconType
}

const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
  const bgColor = useColorModeValue("white", "gray");
  const textColor = useColorModeValue("gray.700", "white");
  const iconBgColor = useColorModeValue("teal.400", "teal");
  const iconColor = useColorModeValue("white", "grey");

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

useEffect(() => {
  setIsActive(location.pathname.startsWith(path));
}, [location.pathname, path]);

  return (
    <NavLink
      to={path}
      style={{
        backgroundColor: isActive ? bgColor : "transparent",
        borderRadius: isActive ? "12px" : "0px",
      }}
    >
      <Flex
        color={isActive ? textColor : "gray.400"}
        borderRadius="lg"
        align="center"
        py="4"
        pl="2"
        columnGap="10px"
        justify="flex-start"
        mx="4"
        fontWeight="bold"
        role="group"
        cursor="pointer"
        {...rest}
      >
        {icon && (
          <Box
            h="40px"
            w="40px"
            display="flex"
            p="5px"
            borderRadius="15px"
            alignItems="center"
            bg={isActive ? iconBgColor : "white"}
            _groupHover={{
              bg: "teal.400",
            }}
            justifyContent={"center"}
          >
            <Icon
              color={isActive ? iconColor : "teal.400"}
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          </Box>
        )}
        {children}
      </Flex>
    </NavLink>
  );
};

export default NavItem;
