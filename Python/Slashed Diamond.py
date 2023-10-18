n = int(input())
q = n

first = " " * (n-1)
print(first + "/\\")

for z in range(1, n):
    left = " " * ((n-1) - z)
    middle = "  " * z
    print(left + "/" + middle + "\\")

for z in range(0, n-1):
    left = " " * z
    middle = "  " * (q-1)
    q -= 1
    print(left + "\\" + middle + "/")

first = " " * (n-1)
print(first + "\\/")
