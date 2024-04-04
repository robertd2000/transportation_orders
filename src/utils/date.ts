import dayjs from "dayjs";

/**
 * Функция - форматирует UNIX время в секундах в строку формата ДД.ММ.ГГ ЧЧ:мм:сс
 * @param time - UNIX время в секундах
 */
export const formatMsToDate = (time: number): string => {
  return dayjs(time).format("DD.MM.YY HH:mm:ss");
};

/**
 * Функция - форматирует UNIX время в секундах в строку формата ДД.ММ.ГГ ЧЧ:мм:сс
 * @param time - UNIX время в секундах
 */
export const formatDate = (time: string): string => {
  return dayjs(time).format("DD.MM.YY HH:mm:ss");
};
