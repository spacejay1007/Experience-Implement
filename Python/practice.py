jumin = "990120-1234567"
print(jumin[7]) # 첫번째 자리는 0 번째 부터 시작하여 7번째 자리 수를 출력한다.
print(jumin[0:2]) # 첫번째에서 두번째 자리까지의 숫자를 불러온다 

print("성별 : " + jumin)

python = "Python is Ama-zing"
print(python.upper())
print(python.lower())
print(python[0].isupper()) # 첫번 째 글자가 대문자 인지 확인 # True
print(len(python)) # 문자 길이  # 18

# replace
print(python.replace("Python", "Java"))

index = python.index("n") # n 의 위치 확인
indexSecond = python.index("n", index + 1 ) # n 의 위치 확인 , 다음 n 도 확인

print(index, indexSecond)
print(python.find("n")) # 5
print(python.find("Python")) # 0

# 문자열 포맷
# 1
print("나는 %d살 입니다." % 20)
# print("나는 %s살 %d입니다." % (20, "파이썬"))
print("나는 %s살 %s입니다." % (20, "파이썬")) 
# 2
print("난 {}살입니다." .format(20))
print("난 {}살 {}입니다." .format(20,"파이썬"))
print("난 {0}살 {1}입니다." .format(20,"파이썬"))
print("난 {1}살 {0}입니다." .format(20,"파이썬"))
# 3
print("난 {age}살 {lang}입니다." .format(age= 20, lang="Python"))

# 4 (v3.6 이상~)
age = 20
color = "Red"
print(f"나는 {age}이며, {color}색을 좋아해요.")