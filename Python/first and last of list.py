n = int(input())
list_ = []
for z in range(n):
    num = int(input())
    list_ += [num]
first_2 = list_[:2]
last_2 = list_[-2:]
final = first_2 + last_2
print(final)
