a = input()
a = a.lower()
rev = ""
for char in a:
    rev = char+rev
if a == rev:
    print("Palindrome")
else:
    print("Not a Palindrome")
