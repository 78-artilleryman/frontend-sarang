import { DatePickerSheet } from "@/widgets/datepicker/ui";
import BottomArrowIcon from "@/assets/icons/bottomArrow.svg";

interface CalendarBottomSheetProps {
  year: number;
  month: number;
  setCurrentDate: (date: Date) => void;
  setSelectedDay: (day: Date) => void;
}

export const CalendarBottomSheet = ({ year, month, setCurrentDate, setSelectedDay }: CalendarBottomSheetProps) => {
  const handleDateConfirm = (selectedDate: Date) => {
    setCurrentDate(selectedDate);
    setSelectedDay(selectedDate);
  };

  return (
    <DatePickerSheet onConfirm={handleDateConfirm}>
      <div className="flex cursor-pointer items-center justify-center gap-2.5">
        <h2 className="text-xl font-semibold text-gray-900">
          {year}년 {month + 1}월
        </h2>
        <button className="flex h-6 w-6 cursor-pointer items-center justify-center pb-1">
          <img src={BottomArrowIcon} alt="날짜 선택" />
        </button>
      </div>
    </DatePickerSheet>
  );
};
