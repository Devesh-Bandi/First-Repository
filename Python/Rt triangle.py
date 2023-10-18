n = int(input())

for z in range(1, n+1):
    left = " " * (n - z)
    stars = "* " * z
    print(left + left + stars)
