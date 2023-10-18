n = int(input())
x = n
box = []
for z in range(1, n+1):
    box += [str(z)]
    left = " " * (x-1)
    x -= 1
    ans = ' '.join(box)
    print(left + ans)

for z in range(1, n):
    left = " " * z
    box = box[:-1]
    ans = ' '.join(box)
    print(left + ans)
