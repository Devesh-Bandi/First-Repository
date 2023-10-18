#Given "A" number of days as input, 
#write a program to convert "A" number of days to years ( Y ), weeks ( W ) and days ( D ).

a=int(input("No. of Days: "))
years= int(a/365)
rem_days=a-(years)*365
weeks=int(rem_days/7)
days=int(rem_days-(weeks)*7)
print("That will be {0} years, {1} weeks and {2} days.".format(years, weeks, days))