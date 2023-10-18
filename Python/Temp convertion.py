t = input()
a = float(t[:-1])
if t[-1] == "C":
    C = a
    F = (a * 1.8) + 32
    K = C + 273
    print(str(round(C, 2)) + "C")
    print(str(round(F, 2)) + "F")
    print(str(round(K, 2)) + "K")
elif t[-1] == "F":
    C = (a - 32) / 1.8
    F = a
    K = C + 273
    print(str(round(C, 2)) + "C")
    print(str(round(F, 2)) + "F")
    print(str(round(K, 2)) + "K")
elif t[-1] == "K":
    C = a - 273
    F = (C * 1.8) + 32
    K = a
    print(str(round(C, 2)) + "C")
    print(str(round(F, 2)) + "F")
    print(str(round(K, 2)) + "K")
