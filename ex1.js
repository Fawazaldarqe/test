///Create  array  prints  row of letters a,b......,h
const letters =['a','b','c','d','e','f','g','h']
///create objects prints bar
const game = [
	['|', '|', '|','|', '|', '|','|', '|'],
	['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
    ['|', '|', '|','|', '|', '|','|', '|'],
];
//this is function is print letters
function print_letters(){
    for(let i=0;i<letters.length;i++){
        //console.log(` ${letters[i]}`)
    process.stdout.write(` ${letters[i]} -`);
    }
    console.log("\n")
}
//this is function is print '|'and '----'
function printGame() {
    let i=0
	for (const row of game) {
		const line = row.join(' | ');
        i++
		console.log(line,i);
		console.log('------------------------------');
	}
}
print_letters()
printGame()