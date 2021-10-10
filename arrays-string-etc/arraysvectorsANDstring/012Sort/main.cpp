#include <iostream>

using namespace std;

void sort012(int a[], int n)
{
    int i, cnt0=0, cnt1=0, cnt2=0, k=0;
    for(i=0; i<n; i++){
        if(a[i] == 0)
            cnt0++;
        else if(a[i] == 1)
            cnt1++;
        else
            cnt2++;
    }
    for(; k<cnt0; k++){
        a[k] = 0;
    }
    for(; k<cnt1+cnt0; k++){
        a[k] = 1;
    }
    for(; k<cnt2+cnt1+cnt0; k++){
        a[k] = 2;
    }
}
void shiftNeg(int a[], int n)
{
    int i, j, temp;
    for(i=0 ; i<n; i++){
        if(a[i] < 0)
            for(j=n-1; j>=0; j--){
                if(a[j] > 0){
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
    }
}
 void MaxMin(int a[], int n)
 {
     int mn = a[0], mx = a[0];
     for(int i=1, j=1; i<n; i++, j++)
     {
         if(a[i] < mn)
            mn = a[i];
         else if(a[i] > mn)
            mn = a[i];
     }
     cout << " minimum : " << mn << endl;
     cout << " maximum : " << mx << endl;

 }

 void htDiff(int a[], int k, int n)
 {
     int i,j;
     int mn , mx;
     for(i=1, j=1; i<n; i++, j++)
     {
         if(a[i] < mn)
            mn = a[i];
         else if(a[i] > mn)
            mx = a[i];
     }
     int med = (mx+mn)/2;
     cout << "initial diff : " << mx-mn << endl;
     for(i=0; i<n; i++){
        if(a[i] < med)
            a[i] += k;
        else
            a[i] -= k;
     }
     cout << "min diff : " << (mx-k)-(mn+k) << endl;

 }
int main()
{
    /*int a[] = {0,1,0,1,2,2,1,0,2,0,1,2,1,0,2};
    int n = sizeof(a)/sizeof(int);
    sort012(a, n);
    for(int q : a){
        cout << q << " ";
    }*/
//    int a[] = {0,-3,1,9,-1,5,6,-7,9};
//    int n = sizeof(a)/sizeof(int);
//    sort012(a, n);
//    for(int q : a){
//        cout << q << " ";
//    }

    int a[] = {0,-3,1,9,-1,5,6,-7,9};
    int n = sizeof(a)/sizeof(int);
    htDiff(a, 3, n);
    for(int k:a)
        cout << k << " ";
    return 0;
}
