# 튜플
# 리스트와는 다르게 내용 변경이나 추가를 할 수는 없지만 리스트보단 속도가 빠르다.

menu = ("돈가스", "치즈가스") # 튜플은 () 으로 묶어준다.
print(menu[0]) # 돈가스
print(menu[1]) # 치즈가스

# menu.add("생선가스")  # Error

# name = "Kim"
# age = 20
# hobby = "Coding"
# print(name, age, hobby)
name , age , hobby = "Kim", 20, "Coding" # 한꺼번에 선언 가능
# name , age , hobby = ("Kim", 20, "Coding") # 한꺼번에 선언 가능
print(name, age, hobby)



