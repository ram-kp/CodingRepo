#include <bits/stdc++.h>

using namespace std;
void sortedCommon(vector<int> &a1, vector<int> &a2, vector<int> &a3)
{
    vector<int> temp;
    vector<int> temp1;
    int i=0,j=0;
    while(i<a1.size() && j<a2.size()){
        if(a1[i] < a2[j])
            i++;
        else if(a1[i] > a2[j])
            j++;
        else
        {
            temp.push_back(a1[i]);
            i++;
            j++;
        }
    }
    for(int i=0; i<temp.size(); ++i){
        cout << temp[i] << " ";
    }
    cout<< endl;
    i=j=0;
    while(i<temp.size() && j<a3.size()){
        if(temp[i] < a3[j])
            i++;
        else if(temp[i] > a3[j])
            j++;
        else
        {
            temp1.push_back(temp[i]);
            i++;
            j++;
        }
    }
    for(int i=0; i<temp1.size(); ++i){
        cout << temp1[i] << " ";
    }
}
int main()
{
    vector<int> a1;
    vector<int> a2;
    vector<int> a3;
    int n1,n2, n3, x;
    cin >> n1;
    cin >> n2;
    cin >> n3;
    for(int i=0; i<n1; ++i){
        cin >> x;
        a1.push_back(x);
    }
    for(int i=0; i<n2; ++i){
        cin >> x;
        a2.push_back(x);
    }
    for(int i=0; i<n3; ++i){
        cin >> x;
        a3.push_back(x);
    }
    vector<int> temp;
    sortedCommon(a1, a2, a3);

    return 0;
}
