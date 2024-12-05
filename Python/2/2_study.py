# String
print("Hello")
print()
# Number
print(5)
print(-10)
print(3.14)
# boolean
print(5>3) # True
print(5<3) # False
print(True)
print(not True) # javascript 에서는 !true 이다 > 로그는 False

# 변수 
# 애완 동물을 소개해주세요
animal = "강아지"
name = "연탄이"
age = 3
hobby = "산책"
is_adult = age >= 3 

# Num -> String >> String(age) > str(age)
print("우리집 "+ animal +"의 이름은 " + name )

# python 에는 변경 가능한 Variable -> mutable 한 변수이다
hobby ="공놀이"
print(name + "는 "+str(age)+"살이며, "+hobby+"을 아주 좋아해요")
print(name ,"는",str(age),"살이며, ",hobby,"을 아주 좋아해요")

print(name+ "는 어른일까요? " + str(is_adult))

station = "사당"
print(station + "행 열차가 들어오고 있습니다.")
station = "신도림"
print(station + "행 열차가 들어오고 있습니다.")

station = "인천공항"
print(station + "행 열차가 들어오고 있습니다.")
