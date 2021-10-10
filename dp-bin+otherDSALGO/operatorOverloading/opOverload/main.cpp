#include <bits/stdc++.h>

using namespace std;


class Math{
    int a, b;
    public:
    Math(int a, int b){
        this->a = a;
        this->b = b;
    }
    Math operator +(Math c){
        Math temp(0,0);
        temp.a = a + c.a;
        temp.b = b + c.b;
        return temp;
    }
    void operator ++(){
        a+=1;
        b+=1;
    }
    void show(){
        cout << a << " " << b << "\n";
    }
};
int main()
{
    Math a(2,3), b(4,5), c(0,0);
    c = a+b;
    c.show();
    ++a;
    a.show();
    return 0;
}
