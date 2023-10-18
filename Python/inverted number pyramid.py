n = int(input())
for row in range(1, n+1):
    left_spaces = " " * (row-1)
    i = n - (row-1)
    numbers = ""
    for j in range(1, i+1):
        numbers = numbers + (str(j) + " ")
    print(left_spaces + numbers)
