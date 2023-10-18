N = int(input())
K = int(input())
counter = N-1
for i in range(K):
    for j in range(i+1):
        counter += 1
for i in range(K):
    for j in range(i+1):
        print(counter, end=" ")
        counter -= 1
    print()
