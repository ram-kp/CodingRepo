#include <bits/stdc++.h>

using namespace std;

void cntInversion(vector<int> &a)
{
    int ctr=0;
    for(int i=0; i<a.size()-1; i++){
        for(int j= a.size()-1 ; j>i; j--){
            if(a[j]<a[i]){
                cout <<a[i]<<" "<<a[j]<<endl;
                ctr++;
            }
        }
    }
    cout << "Number of inversions are : "<<ctr;
}

int maxProfit(vector<int>& prices) {
        int minprice = INT_MAX;
        int maxprofit = 0;
        for (int i = 0; i < prices.size(); i++) {
            if (prices[i] < minprice)
                minprice = prices[i];
            else if (prices[i] - minprice > maxprofit)
                maxprofit = prices[i] - minprice;
        }
        return maxprofit;
}

int main()
{
    vector<int> A;
    int N, x;
    cin >> N;
    for(int i=0; i<N; i++){
        cin >> x;
        A.push_back(x);
    }
    int k = maxProfit(A);
    cout << k;


    return 0;
}
