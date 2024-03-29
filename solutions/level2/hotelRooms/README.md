# [호텔 대실](https://school.programmers.co.kr/learn/courses/30/lessons/155651)

## 문제 설명

호텔을 운영 중인 코니는 최소한의 객실만을 사용하여 예약 손님들을 받으려고 합니다. 한 번 사용한 객실은 퇴실 시간을 기준으로 10분간 청소를 하고 다음 손님들이 사용할 수 있습니다.
예약 시각이 문자열 형태로 담긴 2차원 배열 book_time이 매개변수로 주어질 때, 코니에게 필요한 최소 객실의 수를 return 하는 solution 함수를 완성해주세요.

## 제한사항

- 1 ≤ book_time의 길이 ≤ 1,000
  - book_time[i]는 ["HH:MM", "HH:MM"]의 형태로 이루어진 배열입니다
    - [대실 시작 시각, 대실 종료 시각] 형태입니다.
  - 시각은 HH:MM 형태로 24시간 표기법을 따르며, "00:00" 부터 "23:59" 까지로 주어집니다.
    - 예약 시각이 자정을 넘어가는 경우는 없습니다.
    - 시작 시각은 항상 종료 시각보다 빠릅니다.

## 입출력 예

| book_time                                                                                            | result |
| ---------------------------------------------------------------------------------------------------- | ------ |
| [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]] | 3      |
| [["09:10", "10:10"], ["10:20", "12:20"]]                                                             | 1      |
| [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]]                                         | 3      |

## 입출력 예 설명

### 입출력 예 #1

example1
위 사진과 같습니다.

### 입출력 예 #2

첫 번째 손님이 10시 10분에 퇴실 후 10분간 청소한 뒤 두 번째 손님이 10시 20분에 입실하여 사용할 수 있으므로 방은 1개만 필요합니다.

### 입출력 예 #3

세 손님 모두 동일한 시간대를 예약했기 때문에 3개의 방이 필요합니다.

## 문제 풀이

주어진 시간을 모두 분으로 변환한 후 시작 시간을 기준으로 오름차순 정렬한다. 그리고 방 정보를 저장할 `rooms` 배열을 선언하고 첫 시간을 집어 넣는다. 이후 정렬한 시간들을 순회하면서 `rooms` 배열에 있는 모든 시간의 종료 시간 + 10분과 현재 입실해야 하는 시간의 시작시간과 비교한 후 방이 모두 차 있으면 `rooms`에 새 시간을 추가한다. 만약 비교해서 빈 방이 있을 경우엔 해당 방에 순회중인 현재 시간으로 값을 업데이트 한다.

정렬된 시간을 모두 순회하고 나면 `rooms`에는 필요한 방 갯수만큼의 요소가 있을 것이므로 `rooms`의 길이가 필요한 방의 갯수가 된다.
