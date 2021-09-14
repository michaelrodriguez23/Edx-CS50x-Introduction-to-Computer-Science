import sys 
try:
    x = int(input("x: "))
except ValueError:
    print("Please divde using ints")
    sys.exit(1)
y = int(input("y: "))

try:
    result = x / y 
except ZeroDivisionError:
    print("Error: Cannot divide by 0.")
    sys.exit(1)

print(f"{x} / {y} = {result}")