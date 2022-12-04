def func_x(x,y):
    return 4*pow(x-y,3)-1+4*x

def func_y(x,y):
    return -4*pow(x-y,3)+2*y-2

x=int(input("Enter value of x"))
y=1
tol=int(input("Enter tolerance value"))
count=0
while(count<1000 and tol>0.001):
    temp_x=x-0.05*func_x(x,y)
    temp_y=y-0.05*func_y(x,y)
    tol=min(abs(func_x(temp_x,temp_y)),abs(func_y(temp_x,temp_y)))
    x=temp_x
    y=temp_y
    count+=1
print(x," ",y)