var instructionStack = [];
var ip = 0;
var pause=false;
codeComplete=false;
function compile(){
  stdout.value=""
  instructionStack = [];
  ip = 0;
  codeComplete=false;
  code = compiler.codeBox.value;
  codeSegmented=code.split("\n");
  while(!codeComplete){
    console.log(codeSegmented[ip]);
    if(codeSegmented[ip]=="hlt"){
      codeComplete=true;
    }
    if(codeSegmented[ip]=="push"){
      ip++;
      instructionStack.push(codeSegmented[ip]);
    }
    if(codeSegmented[ip]=="exec"){
      var instruction = instructionStack.pop();
      if(instruction == "out"){
        stdout.value+=instructionStack.pop();
      }
      if(instruction == "in"){
        pause=true;
        document.getElementById("inputting").style.display="block";
      }
    }
    console.log(ip);
    if(!pause){
      ip++;
    }
  }
}
function send(){
  pause=false;
  document.getElementById("inputting").style.display="none";
  instructionStack.push(stdin.input.value);
}
