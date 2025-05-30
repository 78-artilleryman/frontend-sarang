import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Input, Button, ProgressHeader } from "@/shared/ui";
import { useOnboardingAlarmStore } from "@/features/onboarding/model/OnboardingStore";
import { getMyInfo } from "@/entities/mypage_info/service";
import LoadingSpinner from "@/shared/ui/loading"; // 로딩 컴포넌트가 있다면 import

export const Nickname: React.FC = () => {
  const navigate = useNavigate();
  const { nickname, setNickname, isLoading, error, setError } = useOnboardingAlarmStore();
  const [isCheckingRole, setIsCheckingRole] = useState(true);

  // ✅ GUEST 체크 및 리디렉션 로직
  useEffect(() => {
    const checkUserRole = async () => {
      try {
        setIsCheckingRole(true);
        const response = await getMyInfo();
        if (response.result.role !== "GUEST") {
          navigate("/", { replace: true }); // 이미 온보딩이 된 사용자면 메인으로 보냄
        }
      } catch (error) {
        console.error("사용자 정보 확인 중 오류 발생:", error);
      } finally {
        setIsCheckingRole(false);
      }
    };

    checkUserRole();
  }, [navigate]);

  const handleNicknameChange = (value: string) => {
    setNickname(value);
    if (value.length > 3) {
      setError("닉네임은 3글자 이내로 입력해주세요.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (nickname.trim()) {
      try {
        if (nickname.length > 3) {
          setError("닉네임은 3글자 이내로 입력해주세요.");
          return;
        }
        setError("");
        navigate("/onboarding/birthday");
      } catch (error) {
        console.error("닉네임 처리 중 오류 발생:", error);
      }
    }
  };

  if (isCheckingRole) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <LoadingSpinner  text= "회원님의 정보를 확인중이에요!" />
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-white pt-11">
      <ProgressHeader
        title="사용할 닉네임을 입력해주세요"
        highlight="닉네임임"
        subtitle="3글자 이내로 입력이 가능해요."
        progress={1 / 3}
        onBack={() => navigate(-1)}
        onClose={() => navigate("/")}
      />

      <div className="flex-1 px-4">
        <div className="mt-4 relative">
          <Input
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="클릭하여 입력해주세요"
            onClear={() => {
              setNickname("");
              setError("");
            }}
            status={error ? "error" : undefined}
          />
          {error && (
            <p className="absolute left-2 -bottom-6 text-red-0 text-sm">{error}</p>
          )}
        </div>
      </div>

      <div className="p-4">
        <Button
          variant={nickname.trim() ? "active" : "inactive"}
          onClick={handleSubmit}
          disabled={!nickname.trim() || isLoading}
          size="onicon"
        >
          다음
        </Button>
      </div>
    </div>
  );
};
