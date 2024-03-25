// import { useRoutes } from "react-router-dom";
// import Provider from "../layout/Provider";
// // Import components without lazy loading (for initial render)
// import Users from "../domains/users/screens/Users";
// import UserProfile from "../domains/users/screens/UserProfile";

// const AppRoutes = () => {

//   return useRoutes([
//     {
//       path: "",
//       element: <Provider />,
//       children: [
//         {
//           path: "users",
//           element: <Users />,
//           index: true,
//         },
//         {
//           path: "users/:id",
//           element: <UserProfile />,
//         },
//       ],
//     },
//   ]);
// };

// export default AppRoutes;

import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Provider from "../layout/Provider";
import { Box } from "@chakra-ui/react";

// Lazy-loaded components
const Users = lazy(() => import("../domains/users/screens/Users"));
const UserProfile = lazy(() => import("../domains/users/screens/UserProfile"));
const NotFound = lazy(() => import("../components/NotFound")); // Assuming NotFound component exists

const AppRoutes = () => {
  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      {useRoutes([
        {
          path: "/",
          element: <Navigate to="/users" replace />, // Redirect root path to /users
        },
        {
          path: "",
          element: <Provider />,
          children: [
            {
              path: "users",
              element: <Users />,
              index: true,
            },
            {
              path: "users/:id",
              element: <UserProfile />,
            },
            // Wildcard route
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
      ])}
    </Suspense>
  );
};

export default AppRoutes;
