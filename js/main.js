var emplaye=[
{
    name:"david carlson",
    age:30
},
{
    name:"john cena",
    age:34,
},
{

    name:"mike sheridan ",
    age:25,
},
{
    name:"john carte",
    age:50
}
]

var ans=emplaye.filter(function(e){
    var a=e.age>30;
    return a
})
var b=ans;
document.write(JSON.stringify(b));