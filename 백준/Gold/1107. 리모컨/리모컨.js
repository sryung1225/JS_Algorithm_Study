const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const M = +input[1];
const brokenButtons = M === 0 ? [] : input[2].split(" ").map((v) => +v);

solution(N, brokenButtons);

// ------------------------------------------------------------------

function isPossible(channel, brokenButtons) {
  // 고장난 버튼이 채널 구성에 포함되어 있으면 false 반환
  const num = channel.toString();
  for (let i = 0; i < num.length; i++) {
    if (brokenButtons.includes(parseInt(num[i], 10))) {
      return false;
    }
  }
  return true;
}

function solution(N, brokenButtons) {
  // 현재에서 목표 채널까지 눌러야 하는 +/- 버튼 클릭 수에서 시작 (최대 치)
  let minClicks = Math.abs(N - 100);
  for (let i = 0; i <= 500000 * 2; i++) {
    // 숫자 버튼을 눌러 갈 수 있는 채널 i
    if (isPossible(i, brokenButtons)) {
      // i로 가는 버튼 클릭 수 + i에서 목표 채널까지 눌러야 하는 +/- 버튼 클릭 수
      const click = Math.abs(N - i) + i.toString().length;
      minClicks = Math.min(minClicks, click);
    }
  }
  console.log(minClicks);
}