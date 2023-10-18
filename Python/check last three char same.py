word1=input()
word2=input()
last_letters_word1 = word1[-3:]
last_letters_b = word2[-3:]
if last_letters_word1 == last_letters_b:
    print("True")
else: 
    print("False")