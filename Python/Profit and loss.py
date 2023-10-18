cost=int(input("Cost Price: "))
sell=int(input("Selling Price: "))
if sell>cost:
    print("It's a Profit of {}".format(sell - cost))
elif cost>sell:
    print("It's a Loss of {}".format(cost - sell))
elif cost==sell:
    print("It's neither Profit nor Loss.")