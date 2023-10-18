#Divisiblity check of numbers

a=int(input("check if the number:"))
b=int(input("is divisible by:"))
if a%b==0:
    print("Yes, {} is divisible by {}.".format(a,b))
else:
    print("No, {} is not divisible by {}.".format(a,b))