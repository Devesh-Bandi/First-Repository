n=int(input("Total money: "))
a=0 
b=0 
c=0 
d=0
e=0
f=0
g=0
h=0
if n>=2000:
    a=int(n/2000)
    n=n%2000
if n>=500:
    b=int(n/500)
    n=n%500
if n>=200:
    c=int(n/200)
    n=n%200
if n>=50:
    d=int(n/50)
    n=n%50
if n>=20:
    e=int(n/20)
    n=n%20
if n>=5:
    f=int(n/5)
    n=n%5
if n>=2:
    g=int(n/2)
    n=n%2
h=n
print("2000: "+str(a)+" ; "+"500: "+str(b)+" ; "+"200: "+str(c)+" ; "+"50: "+str(d)+" ; "+"20: "+str(e)+" ; "+"5: "+str(f)+" ; "+"2: "+str(g)+" ; "+"1: "+str(h))