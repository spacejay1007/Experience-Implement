#### 기본 문자열
sentence = "나는 소년이다."
print(sentence)
sentence2 = 'python is Easy'
print(sentence2)
sentence3 = """
하이하이하이
python is Easy
"""
print(sentence3)

#### 함수 문자열

jumin = "990120-1234567"
personSex = ""
if jumin[7] == "1" : personSex = "남자"
else : personSex = "여자"


introduce = "성별 : " + personSex
year = "연 : " +  jumin[0:2] # 0 ~ 2 직전까지
month = "월: " + jumin[2:4] # 2 부터 4직전까지
day = "일: " + jumin[4:6] # 4 부터 6 직전까지
print(introduce,year,month,day)


#### 문자열 처리함수
python = "Python is Amazing"
# lower() > 소문자 , upper() > 대문자
print(python.lower()) # python is amazing
print(python.upper()) # PYTHON IS AMAZING
print(python[0].isupper()) # true > 대문자인지 소문자 인지 확인해준다. 
print(len(python)) # 17 > 스페이스인 빈칸까지 포함해서 length 가 나온다.
print(python.replace("Python","Java")) # Java is Amazing > 첫번째 파라미터는 찾을거 두번때 파라미터는 바꿀것

index = python.index("n") 
print(index) # 5 > P:0,y:1,t:2, h:3, o:4, n:5 
index = python.index("n",index+1) # 두번째 n 을 찾는것
print(index) # 15


# 문자열 작성법
# 1. 
print("나는 %d살입니다." % 20)
print("나는 %s을 좋아해요" % "Python")
print("Apple은 %c로 시작해요." % "A")
print("나는 %s색과 %s색을 좋아합니다." % ("빨간","파란"))

# 2.
print("나는 {}살입니다.".format(20)) # 나는 20살입니다.
print("나는 {}색과 {}색을 좋아합니다.".format("빨간" ,"파란"))
print("나는 {0}색과 {1}색을 좋아합니다.".format("0번째 빨간" ,"1번째 파란"))
print("나는 {1}색과 {0}색을 좋아합니다.".format("0번째 빨간" ,"1번째 파란"))

# 3.
print("나는 {age}살이며, {color}색을 좋아합니다.".format(age = 20, color="빨간"))
age = 20
color ="빨간"
print("나는 {age}살이며, {color}색을 좋아합니다.".format(age = age, color=color))

# 4. Python v.3.6 이상
age = 20
color ="빨간"
print(f"나는 {age}살이며, {color}색을 좋아합니다.//")


# 탈출문자
# \n : 줄바꿈
print("백문이 불여일견\n 벽견이 불여일타")
# \"누구누구\" : 문장 내에서 따옴표를 사용할 수 있다. 
print("저는 \"누구누구\" 입니다.")
# \\ : 문장내에서는 '\' 로 보인다. > 경로 작성할때 사용하는것 
print("나는야 깔깔 \\") 
# \r : 커서를 맨 앞으로 이동 > 맨 앞으로 이동해서 다시 작성해주는것
print("Red Apple\rPine")
# \b : 백스페이스 (한 글자 삭제)
print("Redd\bApple")
# \t : 탭 역할
print("Red\tApple")