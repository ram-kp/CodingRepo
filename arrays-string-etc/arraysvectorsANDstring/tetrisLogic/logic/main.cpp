#include <bits/stdc++.h>

using namespace std;

struct potent{
    int ele;
    int ctr;
};

void effSol(vector<int> &a, int k){
    struct potent temp[k-1];
    for(int i=0; i<k-1; ++i)
        temp[i].ctr = 0;
    int i, j;
    for(i=0; i<a.size(); ++i)
    {
        for(j=0; j<k-1; j++){
            if(a[i] == temp[j].ele){
                temp[j].ctr += 1;
                break;
            }
        }
        if(j == k-1){
            int l;
            for(l=0; l<k-1; l++){
                if(temp[l].ctr == 0){
                    temp[l].ele = a[i];
                    temp[l].ctr += 1;
                    break;
                }
            }
            if(l==k-1){
                for(l=0; l<k-1; l++)
                    temp[l].ctr -= 1;
            }
        }
    }
    for(i=0; i<k-1; i++){
        int ac=0;
        for(j=0; j<a.size(); j++){
            if(temp[i].ele == a[j]){
                ac++;
            }
        }
        if(ac > a.size()/k){
            cout << temp[i].ele << " " << endl;
        }

    }

}
int main()
{
    vector<int> a;
    int n, x, k;
    cout << "Enter no of elements :" << endl;
    cin >> n;
    cout << "Enter the elements one by one \n" ;
    for(int i=0; i<n; ++i){
        cin >> x;
        a.push_back(x);
    }
    cout << "Enter k: \n" ;
    cin >> k;
    effSol(a, k);
    return 0;
}
