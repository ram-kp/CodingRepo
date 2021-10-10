#include<bits/stdc++.h>

using namespace std;

using ll = long long;
using ld = long double;

#define mp   make_pair
#define pb   push_back
#define eb   emplace_back

#define sum(a)     ( accumulate ((a).begin(), (a).end(), 0ll))
#define mine(a)    (*min_element((a).begin(), (a).end()))
#define maxe(a)    (*max_element((a).begin(), (a).end()))
#define mini(a)    ( min_element((a).begin(), (a).end()) - (a).begin())
#define maxi(a)    ( max_element((a).begin(), (a).end()) - (a).begin())
#define lowb(a, x) ( lower_bound((a).begin(), (a).end(), (x)) - (a).begin())
#define uppb(a, x) ( upper_bound((a).begin(), (a).end(), (x)) - (a).begin())

#define vi vector<int>
#define vc vector<char>
#define vd vector<double>
#define vpi vector<pair<int,int> >
#define vvi vector<vector<int> >
#define si set<int>
#define mi map<int,int>
#define all(v) v.begin(),v.end()
// son
#define fo(i,a,b) ;for(int i=a; i<b; i++)
#define fd(i,a,b) ;for(int i=a; i>=b; i--)
#define MOD 1000000007
#define top(a,b,c,d) ((a==b)?c:d);
#define MI INT_MIN
#define MA INT_MAX
#define PI 3.14159265358979323846
#define yes cout<<"YES"<<endl;
#define no cout<<"NO"<<endl;
#define MAXN 100005

//template<typename T>             vector<T>& operator--            (vector<T> &v){for (auto& i : v) --i;            return  v;}
//template<typename T>             vector<T>& operator++            (vector<T> &v){for (auto& i : v) ++i;            return  v;}
template<typename T>             istream& operator>>(istream& is,  vector<T> &v){for (auto& i : v) is >> i;        return is;}
template<typename T>             ostream& operator<<(ostream& os,  vector<T>  v){for (auto& i : v) os << i << ' '; return os;}
/*template<typename T, typename U> pair<T,U>& operator--           (pair<T, U> &p){--p.first; --p.second;            return  p;}
template<typename T, typename U> pair<T,U>& operator++           (pair<T, U> &p){++p.first; ++p.second;            return  p;}
template<typename T, typename U> istream& operator>>(istream& is, pair<T, U> &p){is >> p.first >> p.second;        return is;}
template<typename T, typename U> ostream& operator<<(ostream& os, pair<T, U>  p){os << p.first << ' ' << p.second; return os;}
template<typename T, typename U> pair<T,U> operator-(pair<T,U> a, pair<T,U> b){return mp(a.first-b.first, a.second-b.second);}
template<typename T, typename U> pair<T,U> operator+(pair<T,U> a, pair<T,U> b){return mp(a.first+b.first, a.second+b.second);}
template<typename T, typename U> void umin(T& a, U b){if (a > b) a = b;}
template<typename T, typename U> void umax(T& a, U b){if (a < b) a = b;}*/

//ASCII
//'0' - 48
//'9' - 57
//'a' - 97
//'A' - 65

void test_case(int test) {

    int n;
    cin>>n;
    vector<int> a(n);
    cin >> a;
    int minele = mine(a);
    int maxele = maxe(a);
    //cout << minele << " " << maxele << endl;
    int i=0, j=n-1, fi=0, ctr=0;
    while(i<=n-1 && j>=0)
    {
        if(a[i]==minele || a[i]==maxele)
        {
            fi=1;
            break;
        }
        else if(a[j]==minele || a[j]==maxele){
            break;
        }
        i++;
        j--;
        ctr++;
        //cout << "ctr: " << ctr << endl;
    }
    //cout  << "fi "<< fi << endl;
    if(fi==1){
        int k=i+1, j=n-1;
        //cout << "k: " << k << endl;
        while(k<=n-1 && j>=i+1)
        {
            if(a[k]==minele || a[k]==maxele)
            {
                break;
            }
            else if(a[j]==minele || a[j]==maxele){
                break;
            }
            k++;
            j--;
            ctr++;
            //cout << "ctr = " << ctr << endl;
        }
        cout << ctr+2 << "\n";
    }
    else{
        int i=0, k=j-1;;
        while(k<=n-1 && j>=i+1)
        {
            if(a[i]==minele || a[i]==maxele)
            {
                break;
            }
            else if(a[k]==minele || a[k]==maxele){
                break;
            }
            k--;
            i++;
            ctr++;
        }
        cout << ctr+2 << "\n";
    }


}

int32_t main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL);

    int T;
    cin >> T;
    for (int test = 1; test <= T; ++test) {
        test_case(test);
    }

    return 0;
}
