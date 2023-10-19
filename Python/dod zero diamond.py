n = int(input())
x = n
y = 1
for z in range(n):
    dot = ". " * (x-1)
    zero = "0 " * y
    x -= 1
    y += 2
    print(dot + zero + dot)

y -= 4
for z in range(n-1):
    dot = ". " * (x+1)
    zero = "0 " * y
    x += 1
    y -= 2
    print(dot + zero + dot)
