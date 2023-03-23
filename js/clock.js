const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //1자리 수 앞에 0이 붙게끔 padding을 부여
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시간이 바로 적용되게 함수를 먼저 실행(00:00:00 부터 시작되지 않게)
setInterval(getClock, 1000); //1초에 한 번씩 작동
