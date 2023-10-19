n = int(input())
x = n
for z in range(n):
    stars = "* " * x
    space = " " * z
    print(space + stars)
    x -= 1

x = 0
n = n - 2
for z in range(2, n+3):
    stars = "* " * z
    space = " " * (n - x)
    print(space + stars)
    x += 1
