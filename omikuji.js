let username;
let userresult;

username = prompt("�����O�������ĉ������B");
document.getElementById("name").innerHTML = username;

let rand = Math.floor( Math.random() * 5) ;
if (rand == 0) {
  userresult = "��g";
}
if (rand == 1) {
  userresult = "���g";
}
if (rand == 2) {
  userresult = "���g";
}
if (rand == 3) {
  userresult = "�g";
}
if (rand == 4) {
  userresult = "��";
}