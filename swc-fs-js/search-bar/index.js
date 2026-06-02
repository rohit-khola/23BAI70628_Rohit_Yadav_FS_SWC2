
const data = [
    "hello",
    "here",
    "home",
    "lonely",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "black",
    "white",
    "computer",
    "laptop",
    "keyboard",
    "mouse",
    "monitor",
    "mobile",
    "internet",
    "javascript",
    "python",
    "java",
    "cpp",
    "database",
    "mysql",
    "developer",
    "engineer",
    "student",
    "school",
    "college",
    "university",
    "book",
    "notebook",
    "pen",
    "pencil",
    "apple",
    "banana",
    "mango",
    "grapes",
    "watermelon",
    "car",
    "bike",
    "train",
    "airplane",
    "bus",
    "hospital",
    "market",
    "restaurant",
    "football",
    "cricket"
];

const input=document.getElementById('in');
const output=document.getElementById('output');

input.addEventListener('input', ()=>{
    const str=input.value;
    let string="";
    if (str === "") {
        output.textContent = string;
        return;
    }

for(let i=0;i<data.length;i++){
    if(data[i].includes(str)){
        string+=data[i]+" ";
    }
}
output.textContent=string;  
});