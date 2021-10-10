#include <bits/stdc++.h>

using namespace std;

void groupSep(vector<int> &b)
{
    int i=0, j=b.size()-1;
    while(i<j){
        while(b[j]<0) j--;
        while(b[i]>0) i++;
        if(i<j){
            swap(b[i], b[j]);
        }
    }
}

void alternate(vector<int> &z)
{
    groupSep(z);
    int i=0, j=z.size()-1;
    while(z[i]>0 && z[j]<0){
        swap(z[i], z[j]);
        i+=2;
        j-=2;
    }
}
int main()
{
    vector<int> a;
    int N;
    cin>>N;
    int x;
    for(int i=0; i<N; ++i)
    {
        cin >> x;
        a.push_back(x);
    }
    alternate(a);
    for(int i=0; i<N; ++i)
        cout << a[i] << " ";
    return 0;
}
