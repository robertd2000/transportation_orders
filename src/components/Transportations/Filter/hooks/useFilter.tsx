import { useQueryClient } from "@tanstack/react-query";
import { FormikErrors } from "formik";
import { useAppDispatch } from "../../../../redux/store";
import { setFilters } from "../../../../redux/transportation/slice";
import { TransportationFilter } from "../../../../types/filter.interface";

export const useFilter = () => {
  const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const clearFilters = () => dispatch(setFilters({}));

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
      queryKey: ["getTransportationsInit"],
    });
    setSubmitting(false);
  };

  const swapFromAndTo = (config: {
    from: string;
    to: string;
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<TransportationFilter>>;
  }) => {
    const from = config.from;
    const to = config.to;
    config.setFieldValue("to", from);
    config.setFieldValue("from", to);
  };

  return {
    clearFilters,
    handleSubmit,
    swapFromAndTo,
  };
};
