t = input()
if t[-1] == "M":
    hours = int(t[:-1])/60
    print(str(round(hours, 2)) + "H")
elif t[-1] == "S":
    hours = int(t[:-1])/3600
    print(str(round(hours, 2)) + "H")
