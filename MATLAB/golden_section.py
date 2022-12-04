import matplotlib.pyplot as plt
import math

def f(x):
    return pow(x,2)-6*x-16

a=int(input("Enter first guess"))
b=int(input("Enter second guess"))
tol=float(input("Enter tolerance"))
l=b-a
while(abs(l)>tol):
    x1=a+1.618*l
    x2=b-1.618*l
    if(f(x1)>f(x2)):
        b=x2
    
    else:
        a=x1
    l=b-a
print(a," ",b)