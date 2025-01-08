# 반복문
# print("대기번호 1번")
# print("대기번호 2번")
# print("대기번호 3번")
# print("대기번호 4번")

# for waitingNum in [0,1,2,3,4] :
#   print("대기번호 {0}번".format(waitingNum))

# range 를 사용하였을때 0 부터 시작
# for waitingNum in range(5) :
#   print("대기번호 {0}번".format(waitingNum))
 

# for waitingNum in range(1,6) : # 1,2,3,4,5
#   print("대기번호 {0}번".format(waitingNum))


# starbucks = ["ironMan", "thor", "groot"]
# for customer in starbucks : 
#   print("{0}, 커피가 준비되었습니다.".format(customer))

# while
# customer = "Thor"
# index = 5
# while index >= 1:
#   print("{0}, 커피가 준비 되었습니다. {1}번 남았어요.".format(customer, index))
#   index -= 1
#   if (index == 0):
#     print("커피가 폐기처분 되었슴돠")


# customer = "Thor"
# person = "Unknown"
# index = 5
# while person != customer : 
#   print("{0}, 커피가 준비 되었습니다.".format(customer))
#   person = input("이름이 어떻게 되세요?")



# absent = [2,5]
# no_book = [7]

# for student in range(1,11) : # 1,2,3,4,5,6,7,8,9,10
#   # print("{0} 책 읽어봐".format(student))
#   if (student in absent): # absent 의 들어 있는 수가 student 에 있으면 skip
#     continue # 계속 진행해라
#   elif student in no_book :
#     print("오늘 수업은 여기까지고. {0}은 교무실로 따라와 넌 뒤졌어".format(student))
#     break
#   print("{0}, 책을 읽어봐".format(student))

## 한 줄 for문 
# 출석번호가 1 2 3 4, 앞에 100을 붙이기로 함 -> 101, 102, 103, 104

# students = [1,2,3,4,5]
# print(students) 
# students = [i+100 for i in students]
# print(students) 

students = ["Iron Man", "Thor", "I am groot"]
students = [len(i) for i in students]
# students = [i+100 for i in students]
print(students) 
