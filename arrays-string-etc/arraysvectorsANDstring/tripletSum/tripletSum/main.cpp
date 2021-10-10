#include <bits/stdc++.h>
// refrences , ++i usage
using namespace std;
bool tripletSum(vector<int> &a, int sum){
    sort(a.begin(), a.end());
    for(int i=0; i<a.size(); ++i){
        int pivot = a[i];
        int j=i+1, k=a.size()-1;
        while((j<a.size()-1) && (k>i+1)){
            int temp = pivot+a[j]+a[k];
            if(temp < sum)
                j+
                +;
            else if(temp > sum)
                k--;
            else
                return true;
        }
    }
    return false;

}
int main()
{
    vector<int> a={2,5,1,9,14,0,8,7,33};
    int sum = 500;
    if(tripletSum(a, sum)){
        cout << "The triplet exists in the array\n";
    }
    else
        cout << "The triplet does not exists in the array\n";
    return 0;
}
