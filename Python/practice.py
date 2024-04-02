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

# print("""백문이 불여일견 
#       하이
#       백견이 불여일타""")
# 탈출문자
print("백문이 불여일견 \n백견이 불여일타")
print("백문이 '불여일견' 백견이 불여일타") # 백문이 '불여일견' 백견이 불여일타
print("백문이 \'불여일견\' 백견이 불여일타") # 백문이 '불여일견' 백견이 불여일타

# \\ : 문장 내에 \ 넣기
print("C:\Python312\Doc\html") # C:\Python312\Doc\html
print("C:\\Python312\\Doc\\html") # C:\Python312\Doc\html

# \r : 맨 앞으로 이동
print("red Apple \rPine") # Pine Apple

# \b : 백 스페이스
print("하이이이\b하하하") # 하이이하하하

# \t : 탭
print("Pine\tApple") # Pine    Apple

# \n 줄바꿈


# 예 ) http://naver.com

# 규칙 1 : http:// 제외 -> naver.com
# 규칙 2 : 처음 만나는 점 (.) 이후 부분은 제외 => naver
# 규칙 3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 글자 내 e 갯수  + ! 로구성
# 예시로 생성된 비밀번호 : nav51!

url = "http://naver.com"
print(url.split("/")[2].split(".")[0])
pw = url.split("/")[2].split(".")[0] # 규칙 1, 규칙 2 를 만들어주는 역할을 함
print(f"{pw[:3]}{len(pw)}{pw.find("e")}!", pw) # find 는 e의 위치를 파악해준다. 

youPw = url.replace("http://", "") # http:// 를 "" 빈칸으로 바꿔버린다. 
youPw = youPw[:youPw.index(".")] # 점까지 확인 한 것까지 확인하여 그 앞까지 보여줌
password = str(youPw[0:3]) + str(len(youPw))  + str(youPw.count("e")) +"!"
print(youPw,password)
