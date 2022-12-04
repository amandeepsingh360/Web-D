import matplotlib.pyplot as plt
import math

def f(x):
    return pow(2,x)-5*x+2 

def f_diff(x):
    return math.log(2)*pow(2,x)-5

x=int(input("Enter the value of x : "))
tol=float(input("Enter tolerance : "))
count=0
while(abs(f(x))>tol and count<1000):
    newx=x-f(x)/f_diff(x)
    x=newx

print(x)