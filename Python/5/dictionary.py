# 사전 > key 와 value 를 뜻한다. (객체)

cabinet = {3:"Yoo", 100:"Kim"}
print(cabinet)

# value 값을 얻기 위함 > key 를 넣어준다. 
print(cabinet[3])
print(cabinet.get(3))
# 대괄호와 get 의 차이점은 >  오류가 생기면 대괄호는 더이상 진행 하지 않지만 get 은 진행하고 오류난 부분에 None 이라고 나온다. 

print(3 in cabinet) # True
print(5 in cabinet) # False

# 객체에 Key, Value 추가
cabinet[4] = "Na"
print(cabinet) # {3: 'Yoo', 100: 'Kim', 4: 'Na'}

# 기존에 있던 것 수정
cabinet[3] = "Ok"
print(cabinet) # {3: 'Ok', 100: 'Kim', 4: 'Na'}

# 간 손님
del cabinet[3]
print(cabinet)

# Key 들만 출력, value 들만 출력, key,Value 쌍으로 출력
print(cabinet.keys(), cabinet.values(), cabinet.items()) # dict_keys([100, 4]) dict_values(['Kim', 'Na']) dict_items([(100, 'Kim'), (4, 'Na')])