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
print(python[0].isupper()) # true
print(len(python)) # 17 > 스페이스인 빈칸까지 포함해서 length 가 나온다.
print(python.replace("Python","Java")) # Java is Amazing > 첫번째 파라미터는 찾을거 두번때 파라미터는 바꿀것

index = python.index("n") 
print(index) # 5 > P:0,y:1,t:2, h:3, o:4, n:5 
index = python.index("n",index+1) # 두번째 n 을 찾는것
print(index) # 15

