#Write a program that reads two numbers A and B and checks if the sum of A and B is less than 10.
#Print the sum of A and B if the sum of A and B is less than 10. 
#Otherwise, print the product of A and B .

a=int(input())
b=int(input())
if a+b<10:
    print(a+b)
else:
    print(a*b)