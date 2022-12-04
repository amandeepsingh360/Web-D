import matplotlib.pyplot as plt
import math
def f_org(x):
    return 1-math.exp(-10*x)

def f(x,y):
    return 10-10*y

b=int(input("Enter final value of x : "))
n=int(input("Enter number of iterations : "))
h=b/n
x=[0]
y_org=[0]
y_cal=[0]
i=0
count=0
while(i<=b):
    x.append(i)
    y_org.append(f_org(i))
    k1=f(x[count],y_cal[count])
    k2=0.5*(k1+f(x[count+1],y_cal[count]+h*k1))
    y_cal.append(y_cal[count]+k2*h)
    i=i+h
    count=count+1
plt.plot(x,y_cal,'r',"Calculated RK2")
plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.legend()
plt.plot(x,y_org,'b',"EXACT")
plt.show()