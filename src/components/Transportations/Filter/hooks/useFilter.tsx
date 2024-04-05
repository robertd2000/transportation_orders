import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { setFilters } from "../../../../redux/transportation/slice";
import { TransportationFilter } from "../../../../types/filter.interface";

export const useFilter = () => {
  const { filters } = useAppSelector((state) => state.transportationReducer);
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const handleSubmit = (
    values: TransportationFilter,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    dispatch(
      setFilters({
        ...values,
        loadingDate: new Date(values?.loadingDate || 0).getTime(),
      })
    );

    queryClient.invalidateQueries({
      queryKey: ["getTransportationsInit", filters],
    });
    setSubmitting(false);
  };

  return {
    handleSubmit,
  };
};
