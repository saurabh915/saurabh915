#include <bits/stdc++.h>
using namespace std;

// here arr is array in which we inserting soln
// and herex and y are the positions where we are checking is it valid positon or not
// here n is no of queens or no of rows and columns in rows
bool isSafe(int **arr, int x, int y, int n)
{
    cout<<"i am inside is safe";
    for (int row = 0; row < x; row++)
    {
        if (arr[row][y] == 1)
        {
            return false; // for checking column of board
        }
    }
    int row = x;
    int col = y;
    while (row >= 0 && col >= 0)
    {
        if (arr[row][col] == 1) // for checking left diagonal of board
        {
            return false;
        }
        row--;
        col--;
    }
    row = x;
    col = y;
    while (row >= 0 && col < n)
    {
        if (arr[row][col] == 1) // for checking right diagonal of board
        {
            return false;
        }
        row--;
        col++;
    }

    return true; // this will give permission that it is safe to place
}

bool nQueen(int** arr, int x, int n)
{
    if (x >= n)
    {
        return true;
    }

    for (int col = 0; col < n; col++)
    {
        if (isSafe(arr, x, col, n))
        {
            arr[x][col] = 1;
           if( nQueen(arr, x + 1, n))
           {
                return true;
           }
           
        }  
         arr[x][col]=0; //this is backtracking
   
    }
  return false;
}

int main()
{
    int n;
    cin>>n;
    int** arr= new int*[n];
    for(int i =0;i<n;i++)
    {
        arr[i]= new int[n];
        for (int j = 0; j < n; j++)
        {
            arr[i][j]=0; 
        }
        
    }
    if(nQueen(arr,0,n)){
        cout<<"i am inside 1st calling to nQueen"<<endl;
        for(int i =0;i<n;i++)
        {
            for(int j =0;j<n;j++)
            {
                cout<<arr[i][j]<<" ";
            }cout<<endl;
        }
    }

}
