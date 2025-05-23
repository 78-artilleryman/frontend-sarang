import { InfoCard } from "@/shared/ui";
import heart from "@/assets/icons/heart.svg";
import calendar from "@/assets/icons/calendar.svg";
import cake from "@/assets/icons/cake.svg";
import travel from "@/assets/icons/travel.svg";
import { calculateDday } from "@/shared/utils";
import type { Dday } from "@/entities/d-day";
import { useLocation, useNavigate } from "react-router";

interface DdayCardProps extends Dday {
  className?: string;
  onClick?: () => void;
}

const emojiIconMap: Record<string, string> = {
  HEART: heart,
  CALENDAR: calendar,
  CAKE: cake,
  TRAVEL: travel,
};

export const DdayCard = (props: DdayCardProps) => {
  const location = useLocation();
  const iconSrc = emojiIconMap[props.emoji];
  const navigate = useNavigate();

  const goEditDdayPage = () => {
    navigate(`/calendar/dday/${props.id}/edit`, {
      state: { from: location.pathname },
    });
  };

  return (
    <InfoCard className={`justify-between bg-gray-50 ${props.className}`} onClick={goEditDdayPage}>
      <InfoCard.Content>
        <InfoCard.IconTitle iconSrc={iconSrc}>{props.title}</InfoCard.IconTitle>
        <div className="flex flex-col gap-1 text-end">
          <InfoCard.Title>{calculateDday(props.anniversaryDate)}</InfoCard.Title>
          <InfoCard.Text>{props.anniversaryDate}</InfoCard.Text>
        </div>
      </InfoCard.Content>
    </InfoCard>
  );
};
