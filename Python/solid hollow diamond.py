n = int(input())
x = n-1
y = n-1
for z in range(1, n+1):
    left = " " * (x)
    stars = "* " * z
    x -= 1
    print(left + stars)
for i in range(1, n-1):
    left = " " * i
    space = " " * (((y*2)-1) - 2)
    y -= 1
    print(left + "*" + space + "*")
print((" " * (n - 1)) + "*")
