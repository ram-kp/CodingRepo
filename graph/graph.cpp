#include<bits/stdc++.h>
using namespace std;

// struct node{
//     int val;
//     struct node* left;
//     struct node* right;
//     node(int v){
//         val = v;
//         left = right = NULL;
//     }
// };


// void bfs(int u, vector<int> adj[]){
//     vector<int> visited(u+1, 0);
//     vector<int> bfs;

//     for(int i = 1; i <= u; i++) {
//         if(!visited[i]){
//             queue<int> Q;
//             Q.push(i);

//             while(!Q.empty()){
//                 int x = Q.front();
//                 Q.pop();
//                 visited[x] = 1;
//                 bfs.push_back(x);
//                 for(auto it : adj[x]) {
//                     if(!visited[it]){
//                         Q.push(it);
//                         visited[it] = 1;
//                     }
//                 }
//             }
//         }
//     }
//     for(auto e : bfs) {
//         cout << e << " ";
//     }
//     cout << endl;
// }

// void dfs(int i, vector<int> adj[], vector<int> &visited, vector<int> &list){
//     visited[i] = 1;
//     list.push_back(i);
//     for(auto it: adj[i]){
//         if(!visited[it]){
//             dfs(it, adj, visited, list);
//         }
//     }
// }

// bool cycleDfs(int i, int par, vector<int> adj[], vector<int> &visited){
//     for(auto a : adj[i]){
//         if(!visited[a]){
//             if(cycleDfs(a, i , adj, visited)) return true;
//             else if(par!=a)
//                 return true;
//         }
//     }
//     return false; 
// }


// bool isCycleBfs(int i, vector<int> adj[], vector<int> &visited){
//     queue<pair<int, int>> q;
//     q.push({i, -1});
//     visited[i] = true;
//     while(!q.empty()){
//         int cur = q.front().first;
//         int par = q.front().second;
//         q.pop();
//         for(auto it: adj[cur]){
//             if(!visited[it]){
//                 visited[it] = true;
//                 q.push({it, cur});
//             }
//             else if(par != it){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// bool isBipartite(int i, vector<int> adj[], vector<int> &color){
//     queue<int> q;
//     q.push(i);
//     color[i] = 0;
//     while(!q.empty()){
//         int cur = q.front();
//         q.pop();
//         for(auto it: adj[cur]){
//             if(color[it] == -1){
//                 q.push(it);
//                 color[it] = !color[cur];
//             }
//             else if(color[it] == color[cur]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// bool isBipartiteDFS(int i, vector<int> adj[], vector<int> &color){
//     if(color[i] == -1){color[i] = 1;} // Initial condition

//     for(auto it : adj[i]){
//         if(color[it]==-1){
//             color[it] = 1-color[i];
//             if(!isBipartiteDFS(it, adj, color)){return false;}
//         }
//         else if(color[it] == color[i]){
//             return false;;
//         }
//     }
//     return true;
// }
    
// bool checkDirCycle(int i, vector<int> adj[], int vis[], int dfsVis[]){
//     vis[i] = 1;
//     dfsVis[i] = 1;
//     for(auto it : adj[i]){
//         if(!vis[it]){
//             if(checkDirCycle(it, adj, vis, dfsVis)) return true;
//         }
//         else if(dfsVis[it]) return true;
//     }
//     dfsVis[i] = 0;
//     return false;
// }

// void topologicalSortBFS(queue<int> &q, vector<int> &indeg, vector<int> &ans, vector<int> adj[]){ 
//     while(!q.empty()){
//         int temp = q.front();
//         ans.push_back(temp);
//         q.pop();
//         for(auto e : adj[temp]){
//             indeg[e] -= 1;
//             if(indeg[e]=0)  q.push(e);
//         }
//     }
// }

// void findShortestDistancesDAG(int src, vector<int> &dis, priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>> > pq, vector<pair<int, int>> adj[]){
//     dis[src] = 0;
//     pq.push(make_pair(0,src));
//     while(!pq.empty()){
//         int cur_dis = pq.top().first;
//         int cur = pq.top().second;
//         pq.pop();
//         for(auto e : adj[cur]){
//             if(dis[cur]+e.second < dis[e.first]){
//                 dis[e.first] = dis[cur]+e.second;
//                 pq.push({dis[e.first], e.first});
//             }
//         }
//     }
// }

int main(){
    int u,v;
    cin >> u >> v;
    // vector<int> adj[u+1];
    // cout << "Enter The respective edges in your graph\n";

    // for(int i = 1; i <= v; i++) {
    //     int x, y;
    //     cin >> x >> y;
    //     adj[x].push_back(y);
    //     adj[y].push_back(x);
    // }

    // BFS TRAVERSAL
    // bfs(u, adj);

    // cycle detection using BFS
    // bool found = false;
    // vector<int> visited(u+1, 0);
    // for(int i = 1; i <= u; i++){
    //     if(!visited[i]){
    //         if(isCycleBfs(i, adj, visited)){
    //             found = true;
    //             break;
    //         }
    //     }
    // }
    // if(found) 
    //     cout << "Cycle detected\n";
    // else 
    //     cout << "cycle not detected\n";

    // Bipartite graph BFS | graph coloring
    // vector<int> color(u+1, -1);
    // for(int i=1; i<=u; i++){
    //     if(color[i]==-1){
    //         if(!isBipartite(i, adj, color)) {
    //             cout << "Not Bipartite\n";
    //             break;
    //         }
    //     }
    // }
    // cout << "Bipartite graph\n";

    // Bipartite DFS | graph coloring
    // vector<int> color(u+1, -1);
    // for(int i=1; i<=u; i++){
    //     if(color[i]==-1){
    //         if(!isBipartiteDFS(i, adj, color))
    //             cout << "Not Bipartite\n";
    //     }
    // }
    // cout << "It is a Bipartite graph\n";

    // check cycle in directed graph DFS
    // int vis[u+1], dfsVis[u+1];
    // memset(vis, 0, sizeof vis);
    // memset(dfsVis, 0, sizeof dfsVis);

    // for(int i=1; i<=u; i++){
    //     if(!vis[i]){
    //         if(checkDirCycle(i, adj, vis, dfsVis)) {
    //             cout << "Cycle detected\n";
    //             break;
    //         }
    //     }
    // }

    // Topological sorting in directed graph kahn algo
    // queue<int> q;
    // vector<int> indeg(u, 0);
    // vector<int> ans;
    

    // for(int i=0; i<u; i++){
    //     int ct=0;
    //     for(auto e: adj[i]){
    //         ct++;
    //     }
    //     if(ct==0){
    //         q.push(i);
    //     }
    //     indeg[i] = ct;
    // }
    // topologicalSortBFS(q, indeg, ans, adj);

    // shortest distance from src to all other vertices in the undirected graph

    // vector<int> dis(u, INT_MAX);
    // queue<int> q;

    // dis[0] = 0;
    // q.push(0);

    // while(!q.empty()){
    //     int cur = q.front();
    //     q.pop();
    //     for(auto e : adj[cur]){
    //         if(dis[cur]+1 < dis[e]){
    //             dis[e] = dis[cur]+1;
    //             q.push(e);
    //         }
    //     }
    // }
    // for(int e: dis){
    //     cout << e << " ";
    // }
    // cout << endl;

    // shortest distance from src vertex to all other vertices
    // vector<pair<int, int>> adj[u];
    // // Taking the inputs
    // cout << "Enter The edges followed by the weights\n";
    // for(int i = 0; i<v; i++){
    //     int x, y, w;
    //     cin >> x >> y >> w;
    //     adj[x].push_back({y, w}); // can also be done using topologically sorted list traversals
    // }

    // vector<int> dis(u, INT_MAX);
    // priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>> > pq;
    // int src= 0;
    // findShortestDistancesDAG(src, dis, pq, adj);

    // int t;
    // cin >> t;
    // while(t--){
    //     int n;
    //     cin >> n;
    //     vector<int> s(n);
    //     for(int i = 0; i < n; i++){
    //         cin >> s[i];
    //     }
    //     // for(int i = 0; i < n; i++){
    //     //     cout <<  s[i];
    //     // }
        
    //     vector<int> v[100];
    //     for(int i=0; i<n; i++){
    //         for(int j=1; j<1001; j++){
    //             int sum = 0;
    //             int t = j;
    //             while(t!=0){
    //                 int rem = t%10;
    //                 sum+=rem;
    //                 t/=10;
    //             }
    //             // cout << sum << endl;
    //             if(s[i] == sum){
    //                 v[sum].push_back(j);
    //                 cout << "j " << j << endl;
    //             }
    //         }
    //     }
    //     int finA = 0;
    //         for(auto e : v[s[0]]){

    //             //cout << "entered\n";
    //             int ans = 1;
    //             int tmp = e;
    //             for(int j=1; j<n; j++){
    //                 int it = upper_bound(v[j].begin(), v[j].end(), tmp)-v[j].begin();
    //                 tmp = v[j][it];
    //                 int ct = v[j].size()-it;
    //                 //cout << ct <<endl;
    //                 ans *= ct;
    //                 //cout << ans << endl;
    //             }
    //             finA += ans;
    //         }
    //         cout << endl;
    //         cout << finA << endl;
    //     }

    vector<pair<int, int>> adj[u];
    // Taking the inputs
    cout << "Enter The edges followed by the weights\n";
    for(int i = 0; i<v; i++){
        int x, y, w;
        cin >> x >> y >> w;
        adj[x].push_back({y, w}); // can also be done using topologically sorted list traversals
    }
    primsAlgoOptimal(u, adj);
    
}
