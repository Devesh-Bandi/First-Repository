def printW(N):
    print("* " * (2 * N - 1))
    for k in range(1, N):
        print(" " * k, end="")
        print("* " * (N - k), end="")
        print("  " * (k - 1), end="")
        print("* " * (N - k))


N = int(input())
printW(N)
