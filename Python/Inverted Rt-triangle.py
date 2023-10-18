n = int(input())
for z in range(n):
    stars = "* " * (n - z)
    left = "  " * z
    print(left + stars)
