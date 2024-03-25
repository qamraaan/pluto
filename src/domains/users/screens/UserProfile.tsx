/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../types";
import UserNotFound from "../../../components/UserNotFound";
import { useLazyGetUserByIdQuery } from "../apis";
import { useAppSelector } from "../../../store/hooks";

const UserProfile = () => {
  const params = useParams();

  //this hook is used to get the value from the global state.
  const { totalUsers } = useAppSelector((store) => store.reducer.userSlice);
  const [userData, setUserData] = useState<User>();
  const id = params?.id;

  //api call to a particular user by id
  const [
    getUserById,
    { data: user, isError, error, isFetching, isLoading, isSuccess },
  ] = useLazyGetUserByIdQuery();

  //this side-effect is used to trigger the function.
  useEffect(() => {
    if (id) {
      getUserById({ id: +id });
    }
  }, [id]);

  //this side-effect is used to set the response to a local state.
  useEffect(() => {
    if (isSuccess) {
      console.log(user, "user");
      if (user) {
        setUserData(user);
      }
    }
    if (isError) {
      console.log(error, "error");
    }
  }, [isError, isFetching, error, user, isSuccess]);

  return (
    <>
      <Flex alignItems="center" justifyContent="center" mb={4}>
        {/* this value is being read from the global store. */}
        <Heading size="md">Total Users: {totalUsers}</Heading>
      </Flex>
      {isFetching || isLoading ? (
        <Box
          alignItems="center"
          justifyContent="center"
          w="80vw"
          display="flex"
          h="80vh"
          bg="rgba(255, 255, 255, 0.1)"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
          />
        </Box>
      ) : (
        <>
          {userData && userData !== null && userData !== undefined ? (
            <Box
              maxW="2xl"
              mx="auto"
              p={8}
              borderRadius="2xl"
              borderWidth="1px"
              bg="primary.bgWhite"
            >
              <Flex alignItems="center" justifyContent="center" mb={4}>
                <Heading size="md">User Profile</Heading>
              </Flex>
              <Flex alignItems="center" mb={4}>
                <Avatar size="xl" />
                <VStack ml={4} spacing={2}>
                  <Heading size="md">{userData?.name}</Heading>
                  <Text color="gray.500">@{userData?.username}</Text>
                </VStack>
              </Flex>
              <Box mb={4}>
                <Heading size="sm" mb={2}>
                  Contact Information
                </Heading>
                <Flex alignItems="center" mb={2}>
                  <Text fontSize="sm" mr={2}>
                    Email:
                  </Text>
                  <Text>{userData?.email}</Text>
                </Flex>
                <Flex alignItems="center" mb={2}>
                  <Text fontSize="sm" mr={2}>
                    Phone:
                  </Text>
                  <Text>{userData?.phone}</Text>
                </Flex>
                <Flex alignItems="center" mb={2}>
                  <Text fontSize="sm" mr={2}>
                    Website:
                  </Text>
                  <Text>{userData?.website}</Text>
                </Flex>
              </Box>
              <Box mb={4}>
                <Heading size="sm" mb={2}>
                  Address
                </Heading>
                <Text fontSize="sm">{userData?.address?.city}</Text>
              </Box>
              <Box>
                <Heading size="sm" mb={2}>
                  Company
                </Heading>
                <Text fontSize="sm">{userData?.company?.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {userData?.company?.catchPhrase}
                </Text>
              </Box>
            </Box>
          ) : (
            <UserNotFound />
          )}
        </>
      )}
    </>
  );
};

export default UserProfile;
