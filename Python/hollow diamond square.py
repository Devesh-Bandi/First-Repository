n = int(input())
count1 = n * 2
first_row = "* " * count1
print(first_row)

b = n
for z in range(1, n):
    stars = "* " * (b - 1)
    b -= 1
    spaces = ("  " * z) * 2
    print(stars + spaces + stars)

for x in range(1, n+1):
    stars_count = n - x
    left_stars = "* " * x
    hollow_spaces = "  " * (2 * stars_count)
    right_stars = "* " * x
    print(left_stars + hollow_spaces + right_stars)
