# Write a function with the name calculate_bill that takes the bill amount as an argument.
# If the bill amount is less than 500, the discount should be 5%.
# If the bill amount is greater than or equal to 500 and less than 2500, the discount should be 10%.
# If the bill amount is greater than or equal to 2500, the discount should be 20%.
# Calculate the bill amount with the appropriate discount and print it.

def calculate_bill(amount):
    discount = 0
    if amount < 500:
        discount = (5 * amount)/100
        final = amount - discount
        print(final)
    elif (amount >= 500) and (amount < 2500):
        discount = (10 * amount)/100
        final = amount - discount
        print(final)
    elif amount >= 2500:
        discount = (20 * amount)/100
        final = amount - discount
        print(final)


amount = int(input())
# Call the calculate_bill function
calculate_bill(amount)
