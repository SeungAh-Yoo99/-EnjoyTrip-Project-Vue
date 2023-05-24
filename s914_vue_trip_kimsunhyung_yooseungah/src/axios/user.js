// axios 선언한 것 가져오면 됨
import http from "./axios-common";

async function login(user, success, fail) {
  await http.post(`/api/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
	// header에 "access-token"을 담아서 보냄
  http.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await http.get(`/api/user/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) { // 토큰 재발급
	// 헤터에 refresh-token 담아서 보냄
  http.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await http.post(`/api/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await http.get(`/api/user/logout/${userid}`).then(success).catch(fail);
}

export { login, findById, tokenRegeneration, logout };