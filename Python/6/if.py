# if

# weather = "Rain"
# weather = "Fine Dust"
# weather = "sun"
# input 은 terminal에서 실행하고 사용자 입력을 기다리고 있다.
weather= input("How's today's weather?")

# if 조건 : 
#     실행 명령문
if weather == "Rain" or weather == "Snow" :
    print("take your umbrella")
elif weather == "Fine Dust" :
    print("take your mask")
else : 
    print("No material are required")


temp = int(input("How's today's temp?"))
if 30 <= temp : 
    print("너무 더워요. 나가지 마세요.")
elif 10 <= temp and temp < 30 : 
    print("괜찮은 날씨에요")
elif 0 <= temp < 10:
    print("외투를 챙기세요")
else :
    print ("괜찮은 날씨에요")