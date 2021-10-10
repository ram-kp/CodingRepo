#include <iostream>

using namespace std;

class Node{
    public:
        int data;
        Node* lchild;
        Node* rchild;
        int height;
};

class AVL
{
    public:
        Node* root;
        //constructor fn
        AVL(){root = NULL;}
        // member functions
        Node* insertNode(Node* p,int key);
        int setHeight(Node* p);
        int balanceFactor(Node* p);
        Node* LLRotation(Node* p);
        //traversal
        void Inorder(Node* p);
        void Inorder(){ Inorder(root); }
        Node* getRoot(){return root;}

};
void AVL::Inorder(Node* p){
    if(p)
    {
        Inorder(p->lchild);
        cout << p->data << ", " << flush;
        Inorder(p->rchild);
    }
}

int AVL::setHeight(Node* p)
{
    int hl, hr;
    hl = (p && p->lchild)?p->lchild->height:0;
    hr = (p && p->rchild)?p->rchild->height:0;
    return (hl>hr)?hl+1:hr+1 ;
}

int AVL::balanceFactor(Node* p)
{
    int hl, hr;
    hl = (p && p->lchild)?p->lchild->height:0;
    hr = (p && p->rchild)?p->rchild->height:0;
    return hl-hr;
}

Node* AVL::LLRotation(Node* p)
{
    Node* plr;
    Node* pl;
    pl = p->lchild;
    plr = pl->rchild;

    pl->rchild = p;
    p->lchild = plr;

    p->height = setHeight(p);
    pl->height = setHeight(pl);
    if(root == p){
        root = pl;
    }
    return pl;
}

Node* AVL::insertNode(Node* p,int key)
{
    if(p==NULL){
        Node* t;
        t = new Node;
        t->data = key;
        t->lchild = t->rchild = NULL;
        t->height = 1;
        return t;
    }
    else if(key < p->data){
        p->lchild = insertNode(p->lchild, key);
    }
    else{
        p->lchild = insertNode(p->lchild, key);
    }
    // newHeight
    p->height = setHeight(p);

    if(balanceFactor(p) == 2 && balanceFactor(p->lchild)==1){
        return LLRotation(p);
    }
    return p;
}
int main()
{
    AVL tre;
    tre.root = tre.insertNode(tre.root, 4);
    tre.root = tre.insertNode(tre.root, 2);
    tre.root = tre.insertNode(tre.root, 1);
    tre.Inorder();
    cout << endl;
    return 0;
}
