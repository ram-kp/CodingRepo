#include <bits/stdc++.h>

using namespace std;

// all subset generation ( duplicates not allowed)
vector<vector<int> > subSetsGen(vector<int> &a)
{
    int bitNum = a.size();
    int sz = 1<<bitNum;

    vector<vector<int> > fin;
    for(int i=0; i<sz; ++i){
        vector<int> subset;
        for(int j=0; j<bitNum; ++j){
            if( ((1<<j)&i) != 0){
                subset.push_back(a[j]);
            }
        }
        sort(subset.begin(), subset.end());
        if(find(fin.begin(), fin.end(), subset) == fin.end())
            fin.push_back(subset);
    }
    return fin;
}
int main()
{
    vector<int> nums = {1,2,2};
    vector<vector<int>> subSets = subSetsGen(nums);
    // print all subsets
    for(int i=0; i<subSets.size(); ++i){
        for(int j=0; j<subSets[i].size(); ++j){
            cout << subSets[i][j] << " ";
        }
        cout << "\n";
    }

    int maxXor =0 ;
    vector<int> maxXorL;
    for(int i=0; i<subSets.size(); ++i){
        int xr =0;
        for(int j=0; j<subSets[i].size(); ++j){
            xr = xr^subSets[i][j];
        }
        if(xr > maxXor){
            maxXor = xr;
            maxXorL = subSets[i];
        }
    }
    cout << "\nThe max Xor value and the corresponding subarray is: \n" << maxXor << "\n";
    for(int i=0; i<maxXorL.size(); ++i){
        cout << maxXorL[i] << " ";
    }

    return 0;
}


