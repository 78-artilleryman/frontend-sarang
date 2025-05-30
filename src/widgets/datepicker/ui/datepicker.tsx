import React, { useState } from "react";
import Picker from "react-mobile-picker";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../../../shared/ui/sheet";
import { Button } from "../../../shared/ui/button";

interface DatePickerSheetProps {
  onConfirm: (date: Date) => void;
  children?: React.ReactNode;
}

export const DatePickerSheet: React.FC<DatePickerSheetProps> = ({ onConfirm, children }) => {
  const [open, setOpen] = useState(false);
  const today = new Date();
  const years = Array.from({ length: 100 + 3 }, (_, i) => String(today.getFullYear() + 2 - i));
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));

  const [pickerValue, setPickerValue] = useState({
    year: String(today.getFullYear()),
    month: String(today.getMonth() + 1),
    day: String(today.getDate()),
  });

  const handleConfirm = () => {
    const { year, month, day } = pickerValue;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    onConfirm(date);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="w-full">{children}</div>
      </SheetTrigger>
      <SheetContent 
        side="bottom" 
        className="w-full pc:w-[375px] rounded-t-[20px] mx-auto"
      >
        <div className="w-full">
          <div className="relative flex h-[200px] w-full items-center justify-center">
            <div className="absolute inset-x-0 top-1/2 h-11 -translate-y-1/2 rounded-[10px] bg-gray-100" />
            <div className="relative w-full rounded-[10px]">
              <Picker
                value={pickerValue}
                onChange={setPickerValue}
                height={180}
                itemHeight={44}
                className="bg-transparent">
                <Picker.Column name="year" className="min-w-0 flex-1 px-4">
                  {years.map(year => (
                    <Picker.Item key={year} value={year}>
                      <div className="text-center text-xl text-gray-800">{year}</div>
                    </Picker.Item>
                  ))}
                </Picker.Column>
                <Picker.Column name="month" className="min-w-0 flex-1 px-4">
                  {months.map(month => (
                    <Picker.Item key={month} value={month}>
                      <div className="text-center text-xl text-gray-800">{month}</div>
                    </Picker.Item>
                  ))}
                </Picker.Column>
                <Picker.Column name="day" className="min-w-0 flex-1 px-4">
                  {days.map(day => (
                    <Picker.Item key={day} value={day}>
                      <div className="text-center text-xl text-gray-800">{day}</div>
                    </Picker.Item>
                  ))}
                </Picker.Column>
              </Picker>
            </div>
          </div>
          <SheetHeader>
            <Button variant="active" size="onicon" onClick={handleConfirm} className="w-full">
              확인
            </Button>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
};
