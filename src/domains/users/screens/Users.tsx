/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { ProfileCard } from "../components/ProfileCard";
import NoData from "../../../components/NoData";
import { useGetUsersQuery } from "../apis";
import Paginator from "../../../components/pagination/Paginator";
import { useAppDispatch } from "../../../store/hooks";
import { useEffect } from "react";
import { setTotalUsers } from "../slices/userSlice";


const Users = () => {
  //api call to get the users data.
  const { data: users, isLoading, isError, isSuccess, error, endpointName } = useGetUsersQuery(null);
  
  //this hook is used to dispatch an action to store data in the global redux store.
  const dispatch = useAppDispatch();
  
  //this side-effect is used to set the global state.
  useEffect(()=>{
    if(isSuccess){
      const totalUsers = users?.length?? 0
      dispatch(setTotalUsers({totalUsers}))
    }
    if(isError){
      console.log(error, 'error in', endpointName)
    }

  }, [users, isLoading, isError, isSuccess])

  return (
    <>
      {isLoading ? (
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
          {users && users?.length > 0 ? (
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
                xl: "repeat(5, 1fr)",
              }}
              gap={6}
              mx={6}
            >
              {users?.map((user, index) => {
                return (
                  <GridItem w="100%" id={index.toString()}>
                    <ProfileCard
                      name={user?.name}
                      designation={user?.company?.name}
                      email={user?.email}
                      number={user?.phone}
                      userId={user?.id}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          ) : (
            <NoData />
          )}
        </>
      )}

      {/* this is a dummy paginator as the api used returns only 10 records */}
      <Paginator
        pages={[1]}
        pagesCount={1}
        setCurrentPage={()=>{ }}
        currentPage={1}
      />
    </>
  );
};

export default Users;
