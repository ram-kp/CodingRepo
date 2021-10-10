#include <bits/stdc++.h>

using namespace std;


int longestCoenSeq(vector<int> &a)
{
    int mx = *max_element(a.begin(), a.end());
    vector<int> h(mx, 0);
    int i=0, st, ctr;
    for(int j=0; j<a.size(); j++)
    {
        h[a[j]] = 1;
    }

    while(i<a.size())
    {
        if(h[i]){
            st = 1;
            ctr++;
        }
        else if(st == 1){
            break;
        }
        i++;
    }
    return ctr;
}

int main()
{
    vector<int> a;
    int n, x;
    cin >> n;
    for(int i=0; i<n; i++){
        cin >> x;
        a.push_back(x);
    }

    int len = longestCoenSeq(a);
    cout << len << endl;
    return 0;
}
