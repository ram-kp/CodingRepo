#include <bits/stdc++.h>

using namespace std;

int waterTrap(vector<int> &a)
{
    int i=0, j=a.size()-1;
    int ctr=0;
    cout << "Operation begins\n" ;
    while(i<j)
    {
        cout << "show" << endl;
        if(a[i] == 0){
            i++;
            continue;
        }
        cout << i << endl;

        if(a[j] == 0){
            j--;
            continue;
        }
        cout << j << endl;
        for(int m=i+1; m<j; m++){
            if(a[m] == 0)
                ctr++;
        }
        cout << ctr << endl;;
        for(int m=0; m<a.size(); m++)
            if(a[m]>0)
                a[m]--;
    }
    return ctr;
}
int waterTrap1(vector<int> &arr)
{
    int left=0,right=arr.size()-1;
    int leftmax=0,rightmax=0;
    int res=0;
    while(left<=right){

    if(arr[left]<=arr[right]){
    if(arr[left]>=leftmax) leftmax=arr[left];
    else res+=leftmax-arr[left];
    left++;
    }
    else{
    if(arr[right]>=rightmax) rightmax=arr[right];
    else res+=rightmax-arr[right];
    right--;
    }
    }
    return res;
}
int main()
{
    vector<int> a = {3,1,0,2,0,4};
    vector<int> a1 = {3,1,0,2,0,4};
    int k = waterTrap(a);
    cout << "The water blocks is/are: " << k << endl;
    int k1 = waterTrap1(a1);
    cout << "The water blocks is/are: " << k1 << endl;
    return 0;
}
