// const heading = React.createElement
// ('h1',
// {id:'heading',xyz:'abc'},
// 'Hello World from React');
// console.log(heading)//object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
//react element is nothing but objecr
//this react element becomers the object that browser understand 
//root.render rendering parent tag 

{/* <div id="parent">
    <div id="child">
        <h1>I am  REACT</h1>
        <h2>I am  REACT</h2>
    </div>
</div> */}
//this createElement contains 3 tags->the name of tag(div,h1 tags)
//                                  ->the attribute which is object     
//                                  ->what u want to put if one child u can pass direcgtly but if more sibling then pass as array
               
const parent =React.createElement(
    'div',{id:'parent'},
[React.createElement(
'div',{id:'child'},
[React.createElement('h1',{},'I am from REACT'),
React.createElement('h2',{},'I am from REACT')]
),
React.createElement(
    'div',{id:'child2'},
    [React.createElement('h1',{},'I am from REACT div2'),
    React.createElement('h2',{},'I am from REACT div2')]
    )]

);
const root = ReactDOM.createRoot(document.getElementById('root'));//this createRoot is responsible to assign root inside reactdom
root.render(parent);//this render method helps to put object inside the page
   