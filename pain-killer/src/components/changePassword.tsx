import React, { useState } from "react";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isResetComplete, setIsResetComplete] = useState(false);

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      setMessage("비밀번호가 일치합니다.");
      // 비밀번호 변경 API 호출
      // 여기서는 비밀번호 변경이 성공했다고 가정하고 처리합니다.
      // 실제로는 백엔드와의 통신이 필요하며, 비밀번호 변경 결과를 받아와야 합니다.
      // 비밀번호 변경이 성공하면 setMessage로 메시지를 설정하고, 실패하면 실패 메시지를 설정합니다.
      // 비밀번호 변경이 성공하면 원하는 페이지로 리다이렉트할 수 있습니다.
      setIsResetComplete(true);
    } else {
      setMessage("다시 입력하세요.");
    }
  };

  return (
    <React.Fragment>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호 확인"
        />

        <button>취소</button>{" "}
        <button onClick={handleChangePassword}>다음</button>

        {isResetComplete && <p>비밀번호 재설정 완료</p>}
        {message && !isResetComplete && <p>{message}</p>}
      </div>
    </React.Fragment>
  );
}

export default ChangePassword;
