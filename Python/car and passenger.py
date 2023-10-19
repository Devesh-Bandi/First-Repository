def number_of_cars_needed(people):
    # Complete this function
    count = 0
    cars = 0
    for each in range(1, people+1):
        count += 1
        if count == 5:
            cars += 1
            count = 0
    if count == 0:
        print(cars)
    elif count != 0:
        print(cars + 1)


no_of_people = int(input())
# Call the number_of_cars_needed function
number_of_cars_needed(no_of_people)
