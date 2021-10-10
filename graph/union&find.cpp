#include<bits/stdc++.h>
using namespace std;
// Global arrays
int parent[100];
int Rank[100];

void makeSet(){
    for(int i=0; i<100; i++){
        parent[i] = i;
        Rank[i] = 0;
    }
}

int findParent(int u){
    if(parent[u] == u){
        return u;
    }
    return parent[u]= findParent(parent[u]);    // path compression :) 0(alpha(4)) T.C.
}

void Union(int u, int v){
    u = findParent(u);   // ammortized 0(1)
    v = findParent(v);
    if(Rank[u]>Rank[v]){
        parent[v] = u; 
    }
    else if(Rank[u]<Rank[v]){
        parent[u] = v; 
    }
    else{
        parent[v] = u; 
        Rank[u]++;
    }
}

int main(){
    int m;
    cin>>m;
    while(m--){
        int u, v;
        cin >> u >> v;
        Union(u, v);  // 0(4*alpha) when path comp is done , otherwise 0(logn)
    }
    // To Find elements are in same component
    if(findParent(2) != findParent(3)){
        cout << "They are not in the same component\n";
    }
}