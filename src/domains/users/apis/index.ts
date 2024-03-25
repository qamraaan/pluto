import { baseApi } from "../../../store/baseQuery";
import { User } from "../types";
const users = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], null>({
      query: () => ({
        url: "users",
      }),
      keepUnusedDataFor: 0,
    }),
    getUserById: build.query<User, { id: number }>({
      query: ({ id }) => ({
        url: `users/${id}`,
      }),
      keepUnusedDataFor: 0,
    }),
  }),
});
export const { useGetUsersQuery, useLazyGetUserByIdQuery } = users;
