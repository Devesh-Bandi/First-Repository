n = int(input())

space = " " * (n-1)
print(space + "A")

order = 66
x = 1
for z in range(1, n):
    left = " " * ((n-1) - z)
    middle = " " * (x)
    letter = chr(order)
    order += 1
    x += 2
    print(left + letter + middle + letter)

order -= 2
x -= 2
for z in range(1, n-1):
    x -= 2
    left = " " * z
    middle = " " * (x)
    letter = chr(order)
    order -= 1
    print(left + letter + middle + letter)

space = " " * (n-1)
print(space + "A")
