#include <bits/stdc++.h>

using namespace std;
int chocolate(vector<int> &a, int m)
{
    int minimum = INT_MAX;
    sort(a.begin(), a.end());
    for(int i=0, j=m-1; i<a.size()-m; i++, j++)
    {
        int diff = abs(a[i]-a[j]);
        if(minimum > diff)
            minimum = diff;
    }
    return minimum;
}
int main()
{
    vector<int> a = {7, 3, 2, 4, 9, 12, 56};
    int k = chocolate(a, 3);
    cout << "The diff b/w max and min chocolates " << k << endl;
    return 0;
}
