print(1+1) # 2
print(3-2) # 1
print(5*2) # 10
print(6/3) # 2.0 몫! 
print(6 % 4) # 2 나머지!
print(6//4 ) # 1 > 나머지 다 버리고 몫
print(2**3) # 8 -> 2^3  > 2의 3승
print(2^3) # 8 -> 2^3  > 2의 3승


# Boolean Test
print(not(1 != 3)) # False
print((3 > 0) and (3 < 5)) # True
print((3 > 0) & (3 < 5)) # True

print((3 > 0) and (3 > 5)) # False > Script 에서는 && 연산자와 동일한 것이다
print((3 > 0) & (3 > 5)) # False > Script 에서는 && 연산자와 동일한 것이다

print((3 > 0) or (3 < 5)) # True
print((3 > 0) | (3 < 5)) # True


# 숫자 처리 함수
print(abs(-5)) # 5 (절대값)
print(pow(4,2)) # 4^2  = 4* 4 = 16
print(max(5,12)) # 최대값 가져오기 =>  12
print(min(5,12)) # 최소값 가져오기 =>  5
print(round(3.14)) # 반올림 => 3 
print(round(4.99)) # 반올림 => 5

# from 
from math import *
print(floor(4.99)) # 내림 > 4
print(ceil(4.99)) # 올림 > 5
print(sqrt(4)) # 제곱근 > 2

# 랜덤함수
from random import *
print(random()) # 0.0 ~ 1.0 미만의 임의의 값 생성
print(random() * 10) # 0.0 ~ 10.0 미만의 임의의 값 생성
print(int(random()*10))  # 0 ~ 10 까지의 임의의 정수값 생성
print(int(random() * 10) + 1) # 1 ~ 10까지의 임의의 정수값 생성 > 덧샘을 해주는 이유는 0이 나오기 떄문에 0 을 지워주기 위해서 

print(randrange(1,45)) # 1 ~ 45 미만의 숫자의 임의의 값 생성 > randrange는 범위의 시작 값은 포함 종료값은 포함하지 않는다. 


print(randint(1, 45)) # 1 ~ 45 이하의 숫자의 임의의 값 생성 > randint는 시작값과 종료값을 모두 포함한다. 
print(randint(1, 45)) # 1 ~ 45 이하의 숫자의 임의의 값 생성


# 퀴즈
# 월 4회 스터디를 하는데 3번은 온라인으로 하고 1번은 오프라인으로 하기로 했습니다.
  # 조건 1 : 랜덤으로 날짜를 뽑아야함
  # 조건 2 : 월별 날짜는 다름을 감안하여 최소 일수인 28 이내로 정함
  # 조건 3 : 매월 1~3일은 스터디 준비를 해야 하므로 제외
  # 출력문 : 오프라인 스터디 모임 날짜는 매월 X 일로 선정되었습니다.


day = randint(4, 28)
print("오프라인 스터디 모임 날짜는 매월 ", day ," 일로 선정되었습니다.")
print("오프라인 스터디 모임 날짜는 매월 "+ str(day) +" 일로 선정되었습니다.")




