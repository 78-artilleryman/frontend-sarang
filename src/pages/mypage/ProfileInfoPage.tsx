import {EditInfoCard,MyHeader} from "@/features/mypage";
import { useNavigate } from "react-router";
import { useCoupleBirthDay } from "@/entities/couple_birthday";
import { useCoupleNickname } from "@/entities/couple_nickname";

export const ProfileInfoPage = () => {
  const navigate = useNavigate();
  const { data: coupleBirthDayData } = useCoupleBirthDay();
  const { getNickName } = useCoupleNickname();
  const nicknameData = getNickName.data;

  return (
    <div className="pt-11">
      <MyHeader title="프로필 정보" onBack={() => navigate("/mypage")} />
      <div className="w-full ">
        <EditInfoCard 
          title={nicknameData?.result.userNickname || "-"} 
          onEdit={() => navigate("/mypage/nicknameedit")} 
        />
        <EditInfoCard 
          title={coupleBirthDayData?.result.myBirthDay || "-"} 
          onEdit={() => navigate("/mypage/birthdayedit")} 
        />
        <div className="border-b-10 border-gray-50 my-3" />

        <div className="mx-5 my-3 py-5 bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-2">
          <div className="text-gray-500 text-md font-medium">
            {nicknameData?.result.coupleNickname || "-"}
          </div>
        </div>
        <div className="mx-5 my-3 py-5 bg-gray-50 rounded-lg p-4 flex items-center justify-between mb-2">
          <div className="text-gray-500 text-md font-medium">
            {coupleBirthDayData?.result.partnerBirthday || "-"}
          </div>
        </div>
        <div className="border-b-10 border-gray-50 my-3" />

        <EditInfoCard 
          title="입대 및 전역일" 
          onEdit={() => navigate("/mypage/militarydayedit")} 
        />
        <EditInfoCard 
          title="처음 만난 날" 
          onEdit={() => navigate("/mypage/firstmeetedit")} 
        />
      </div>
    </div>
  );
};

