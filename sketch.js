var weights  = [35,38,40,45]
console.log(weights[1])
function average(){
  var sum = weights[0]+weights[1]+weights[2]+weights[3]
  console.log(sum)
  var divide = sum/weights.length
  console.log(divide)
}
function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

