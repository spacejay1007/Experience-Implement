# 리스트 []

sub1 = 10
sub2 = 20
sub3 = 30

subWay = [10, 20, 30]
subWay = ["kim", "lee", "Jo"]

print(subWay.index("lee") ) # index 는 배열 string 값에서 그 값의 위치를 알려준다 하지만 find라는 함수도 똑같은 역할을 하는데 find는 [] 에서는 불가능

subWay.append("Ha") # append 는 배열에 포함시키는 것이다.
# print(subWay) #['kim', 'lee', 'Jo', 'Ha']

# Jung 을 kim 과 lee 사이에 넣어 보자
# subWay.insert(1,"Jung") # 넣을 자리 번호를 넣어준다. 
subWay.insert(subWay.index("lee"), "Jung") # 위와 동일하지만 method를 한가지를 더 이용하여 구현
# print(subWay) # ['kim', 'Jung', 'lee', 'Jo', 'Ha']

# 뒤에서부터 차례대로 꺼내보자
subWay.pop()
print(subWay)

# 정렬도 가능
num_list = [5,2,4,3,1]
print(num_list) # [5,2,4,3,1]
num_list.sort()
print(num_list) # [1,2,3,4,5]
# 정렬 뒤집기
num_list.reverse()
print(num_list) # [5,4,3,2,1]

# 모두 지우기
# num_list.clear()
# print(num_list) # []

# 다양한 자료형 함께 사용 (String , number, boolean)
mix_list = ["Jo", 20, True]

print(mix_list) # ["Jo", 20, True]

# 리스트 확장
num_list.extend(mix_list)
print(num_list)