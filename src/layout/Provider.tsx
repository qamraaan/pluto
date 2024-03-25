import {
  Box,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { FiLogOut, FiUser } from "react-icons/fi";
import Breadcrumbs from "./components/Breadcrumbs";

const Provider = () => {

  return (
    <Box display={"flex"} bg={'primary.bg'}>
      <Box height={"100vh"}>
        <Sidebar />
      </Box>
      <Box style={{ width: "100vw" }}>
        <Box
          width={{ base: "100%", md: "85%" }}
          p={2}
          bg={'primary.bg'}
          position="fixed"
          zIndex={"auto"}
          shadow={"unset"}
        >
          <Flex alignItems={"center"} justify={"end"} gap={10}>
            <Flex gap={2} alignItems={"center"}>
              <FiUser style={{ width: "24px", height: "24px" }} />
            </Flex>
            <IconButton
              variant="outline"
              onClick={() => {
              }}
              aria-label="open menu"
              icon={<FiLogOut />}
            />
          </Flex>
        </Box>
        {/* Breadcrumbs Component */}
        <Flex flexDirection={"column"} gap="8">
          <Breadcrumbs />
          <Outlet />
        </Flex>
      </Box>
    </Box>
  );
};

export default Provider;