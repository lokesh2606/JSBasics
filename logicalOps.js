// && - AND Operator
// || - OR Operator
// ! - NOT Operator - used to give the opostive of the dervived value. For example if the derived 
// value is true, then not operator is used to give out false 
// & - bitwise AND Operartion
// | - bitwise OR Operation

a=true;
b=false;
c=true;

if(a && b && c)
    console.log("true");
else
    console.log("false");


if(a && !b && c)
    console.log("true");
else
    console.log("false");
