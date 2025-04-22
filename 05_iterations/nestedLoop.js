// stop the column loop is jack is founded
const dataSet = [
  ['Alice', 'Bob', 'Jack'],
  ['John', 'Mary', 'Steve'],
  ['Tom', 'Jack', 'Harry']
];


for(i = 0; i<dataSet.length;i++){
	for(x = 0; x < dataSet[i].length;x++){
	if(dataSet[i][x] === 'Jack'){
	console.log( `Jack is found on row ${i} and position ${x}`)
	break;
	}
}
}
// it is itareting like 

//         i - x
// dataset[0][0]
// dataset[0][1]
// dataset[0][2]
// dataset[1][0]
// dataset[1][1]
// dataset[1][2]
// dataset[2][0]
// dataset[2][1]
// dataset[2][2]