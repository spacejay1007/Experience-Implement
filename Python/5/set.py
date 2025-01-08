# 집합 (set)
# 중복이 안되고 순서가 없음
my_set = {1,2,3,3,3}
print(my_set) # {1,2,3}

java = {"Yoo", "Kim", "Yang"}
python = set(["Yoo", "Park"])

# 교집합
print(java & python, java.intersection(python))

# 합칩합
print(java | python, java.union(python))

# 차집합
print(java-python, java.difference(python))

# python 을 배워서 python 할 줄 아는 사람이 늘었을때 > 추가
python.add("Kim")
print(python)

# 제외
java.remove("Kim")
print(java)