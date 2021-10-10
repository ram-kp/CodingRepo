#include <bits/stdc++.h>

using namespace std;

void kadane(vector<int> &a){
    int sum=0, maxSum = -6335;
    for(int i=0; i<a.size(); ++i){
        sum+= a[i];
        if(sum>maxSum){
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    cout << "The max sum : " << sum << endl;
}
int main()
{
    vector<int> nums;
    int n, x;
    cin >> n;
    for(int i=0; i<n; ++i){
        cin >> x;
        nums.push_back(x);
    }

    kadane(nums);

    return 0;
}
