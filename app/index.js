function handleJoin() {
  const userId = document.querySelector("input[name=userId]").value.trim();
  const userPw = document.querySelector("input[name=userPw]").value.trim();
  const userPw2 = document.querySelector("input[name=userPw2]").value.trim();
  const userNick = document.querySelector("input[name=userNick]").value.trim();

  //id(영어 숫자 허용, 4~8글자)
  const idOK = /^[a-z0-9]{4,8}$/.test(userId);
  if (!idOK) {
    alert("아이디 확인바람");
    return false;
  }
  //pw
  const pwOK1 = /^[0-9]{4,8}$/.test(userPw);
  const pwOK2 = userPw === userPw2;
  const pwOK = pwOK1 && pwOK2;
  if (!pwOK) {
    alert("비밀번호 확인바람");
    return false;
  }

  //nick
  const nickOK = /^[가-힣]{2,4}$/.test(userNick);
  if (!nickOK) {
    alert("닉네임 확인바람");
    return false;
  }
}
