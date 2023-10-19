# You are given a string S . Write a program to replace each letter of the string
# with the next letter that comes in the English alphabet.
# Note: Ensure that while replacing the letters, uppercase should be
# replaced with uppercase letters, and lowercase should be replaced with lowercase letters.


s = input()
sentence = ""
for each in s:
    if each == " ":
        sentence += " "
        continue
    order = ord(each)
    order += 1
    char = chr(order)
    sentence += char
print(sentence)
