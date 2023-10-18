ab = input("Abhinav Plays: ")
an = input("Anjali Plays: ")
if ab == an:
    print("Tie")
elif ab == "Rock":
    if an == "Paper":
        print("Anjali Wins")
    else:
        print("Abhinav Wins")
elif ab == "Paper":
    if an == "Scissors":
        print("Anjali Wins")
    else:
        print("Abhinav Wins")
elif ab == "Scissors":
    if an == "Rock":
        print("Anjali Wins")
    else:
        print("Abhinav Wins")