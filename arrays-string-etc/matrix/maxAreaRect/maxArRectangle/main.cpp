#include <iostream>

using namespace std;

int length(int M[],int j, int m){
        int i=j, cnt=0;
        while(M[i] == 1 && i<m){
            i++;
            cnt++;
        }
        return cnt;
    }
    int maxAreaRect(int M[4][4], int n, int m) {
        int maxArea = INT_MIN;
        cout << "Int_min :" << maxArea << endl;
        int i, j;
        for(j=0; j<m; j++){
            //cout << "iter " << j+1 << endl;
            for(i=0; i<n; i++){
                int k1=i, k2=i, l=length(M[i], j, m);
                //cout << "Block " << l << endl;

                for(; k1>=0; k1--){
                    //cout << "LB " << length(M[k1], j, m) << endl;
                    if( length(M[k1], j, m) < l)
                        break;
                }
                k1++;
                for(; k2<n; k2++){
                    //cout << "UB " << length(M[k2], j, m) << endl;
                    if( length(M[k2], j, m) < l)
                        break;
                }
                k2--;
                //cout << "k1 "<<  k1 << ","<< "k2 "<< k2 << endl;
                if(maxArea < ((k2-k1+1)*l))
                    maxArea = (k2-k1+1)*l;
                //cout << "current Area :" << (k2-k1+1)*l << endl;
                //cout << "maxArea untill now:" << maxArea << endl;
            }

        }
        return maxArea;
    }

int main()
{
    int M[4][4] = {{0, 1, 0, 0},
                    {1, 1, 1, 0},
                    {1, 1, 1, 1},
                    {1, 0, 0, 0}};
    int m = maxAreaRect(M, 4, 4);
    cout << "Maximum rectangle area using 1s are: " << m << endl;
    return 0;
}
