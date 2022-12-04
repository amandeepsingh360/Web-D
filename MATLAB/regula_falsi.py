import matplotlib.pyplot as plt
import math

def f(x):
    return pow(2,x)-5*x+2 

a=int(input("Enter the first guess : "))
b=int(input("Enter the second guess : "))
tol = float(input("Enter tolerance value : "))
count=0
while(abs(f(a))>tol and abs(f(b))>tol and count<1000):
    x=(f(a)*(a-b)/(f(b)-f(a)))+a
    if(f(x)<0):
        b=x
    else:
        a=x
    count+=1
if(abs(f(b))<tol):
    print(b," ",f(b))
else:
    print(a," ",f(a))