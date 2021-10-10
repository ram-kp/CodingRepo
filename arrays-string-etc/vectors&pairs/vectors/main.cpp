#include <bits/stdc++.h>

using namespace std;

void printVec(vector<int> &v){
    cout << "Size : " << v.size() << endl;
    for(int i=0; i<v.size(); ++i){
        cout << v[i] << " " ;
    }
    cout << "\n" ;
}
int main()
{
//    vector<vector<int>> myvecs;
//    int N,n;
//    cin >> N;
//    for(int i=0; i<N; ++i){
//        vector<int> temp;
//        cin >> n;
//        for(int j=1; j<=n; ++j){
//            temp.push_back(j);
//        }
//        myvecs.push_back(temp);
//    }
//
//    for(int i=0; i<N; ++i){
//        printVec(myvecs[i]);
//    }
    int N;
    vector<pair<int, int>> pa;
    cin >> N;
    for(int i=0; i<N; ++i){
        int x,y;
        cin >> x >> y;
        pa.push_back({x,y});
    }
    for(int i=0; i<N; ++i){
        cout << pa[i].first << " " << pa[i].second << endl;;
    }
    return 0;
}
