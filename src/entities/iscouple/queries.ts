import { useQuery } from "@tanstack/react-query";
import { iscoupleQueries } from "./service";

export const useIscouple = () => {
  const checkCoupleConnect = useQuery({
    queryKey: ["checkCoupleConnect"],
    queryFn: () => iscoupleQueries.checkCoupleConnect(),
    retry: false,
    gcTime: Infinity,
  });

  return {
    checkCoupleConnect,
  };
};
