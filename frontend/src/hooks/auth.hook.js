import { getCurrentUser, login, logout, register } from "@/api/auth.api";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

// custom hook for calling login method
export const useLogin = () => {
  const queryClient = useQueryClient();
  // console.log("use login");
  return useMutation({
    mutationFn: (user) => login(user),
    onSuccess: (data) => {
      queryClient.invalidateQueries("currentUser");
    },
    retry: 0,
  });
};

// custom hook for calling logout method

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logout(),
  });
};

// custom hook for calling registered method
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: (user) => register(user),
  });
};

// custom hook for calling current user method

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => getCurrentUser(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
