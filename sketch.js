var database;
var so_far = [];
var visited = [];
var from,to;
var submit;


make_database();

from = document.getElementById('from');
to = document.getElementById('to');
submit = document.getElementById('make');
submit.onclick = begin_process;

let optionString = "";

for(let compound in database) {
	optionString += "<option>" + compound + "</option>";
}

from.innerHTML = optionString;
to.innerHTML = optionString;



function begin_process() {
	let given = from.value;
	let target = to.value;
	make(given,target);	
}



function make_database() {
  database = {
        "Alkane" : ["Alkyl Halide", "Ketone"],
        "Alkene" : ["Alkane", "Alkyl Halide", "Alcohol", "Aldehyde", "Acid"],
        "Alkyne" : ["Alkane", "Alkene", "Aldehyde", "Ketone", "Benzene"],
        "Alkyl Halide" : ["Alkane", "Alkene", "Alkyne", "Ether", "Alcohol", "Amine"],
        "Aryl Halide" : ["Phenol", "Anniline", "Toluene", "Phenol"],
        "Alcohol" : ["Alkene", "Alkyl Halide", "Aldehyde", "Ketone", "Ether"],
        "Ether" : ["Easter"],
        "Aldehyde" : ["Alkane", "Alcohol", "Acid", "Salt"],
        "Ketone" : ["Alkane", "Alcohol", "Acid"],
        "Acid" : ["Ketone", "Salt"],
        "Easter" : ["Alcohol"],
        "Amine" : [],
        "Amide" : ["Amine"],
        "Salt" : ["Alkane", "Aldehyde", "Ketone", "Amide"],
        "Phenol" : ["Aryl Halide", "Anniline"],
        "Benzene" : ["Aryl Halide", "Phenol"],
        "Anniline" : ["Aryl Halide"],
        "Toluene" : ["Aldehyde"]
    };
}

function make(given,target) {
  so_far.push(given);
  if(given != target) {
    visited.push(given);
    let p_so_far = so_far.slice();
    let p_visited = visited.slice();

    for(let str of database[given]) {

      if(!visited.includes(str)) {
        make(str,target);
      }
      if(so_far.includes(target)) {
        display();
      }
      so_far = p_so_far.slice();
      visited = p_visited.slice();
    }
  }
}

function display() {
  let str = "";
  for(let i = 0; i < so_far.length; i ++) {
    str += so_far[i];
    if(i + 1 != so_far.length) str += " ---> ";
  }
  
  // createP(str).style('font-size','14pt').style('background-color','rgb(230,230,230)');
  console.log(str);
}
