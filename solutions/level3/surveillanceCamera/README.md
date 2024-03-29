# [여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164)

## 문제 설명

주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 `"ICN"` 공항에서 출발합니다.

항공권 정보가 담긴 2차원 배열 `tickets`가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
- 주어진 공항 수는 3개 이상 10,000개 이하입니다.
- `tickets`의 각 행 `[a, b]`는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
- 주어진 항공권은 모두 사용해야 합니다.
- 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
- 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

## 입출력 예

| tickets                                                                         | return                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------ |
| [["ICN", "JFK"], ["HND", "IAD"], ["K", "HND"]]                                  | ["ICN", "JFK", "HND", "IAD"]               |
| [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]] | ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"] |

## 입출력 예 설명

### 예제 #1

`["ICN", "JFK", "HND", "IAD"]` 순으로 방문할 수 있습니다.

### 예제 #2

`["ICN", "SFO", "ATL", "ICN", "ATL", "SFO"]` 순으로 방문할 수도 있지만 `["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]` 가 알파벳 순으로 앞섭니다.

## 문제 풀이

출발지는 항상 `"ICN"`으로 고정이다. 그리고 현재의 출발지와 연결된 도착지는 항상 주어진 배열의 두 번째 원소이므로, 현재 출발지와 연결이 된 도착지를 우선순위로 남색하며 정답을 찾는 과정이 요구되므로 DFS 방식과 굉장히 흡사하다.

이 문제에서 주의할 점은 문제의 조건에 의해서 현재 출발역이 여러 개가 들어오는 경우엔 알파벳 순으로 앞서는 도착열을 우선 방문해야 한다. 또한 문제 조건에 의해 모든 도시를 방문할 수 없는 경우는 주어지지 않기 때문에 이에 대한 처리는 신경쓰지 않아도 된다.

여기서는 주어진 `tickets`를 순회하면서 이미 방문한 도시를 기록한 `path`의 마지막 원소와 주어진 `tickets`, 방문한 도시를 기록하는 `check`르 확인하면서 `path`를 계속 업데이트 해준다. 만약 `path`의 길이가 방문해야 하는 도시의 갯수와 같다면 정답 후보로 등록해준다. 한 도시에서 갈 수 있는 도시는 여러개일 수 있으므로, `check`를 통해 사용할 항공권의 사용여부를 미리 기록하고, 해당 건이 끝나면 다시 항공권 사용 여부를 해제해준다.

마지막으로 가능한 모든 경우가 `results`에 담겨 있는데, 문제의 조건에 의해 알파벳 순서가 앞서는 경로를 반환해야 하므로 정렬 후 첫 번째 원소를 반환해준다.
