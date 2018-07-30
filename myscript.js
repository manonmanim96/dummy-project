/*let allUseradd = []

let firstaddress = {
	street: "kamaraj",
	city: "Chennai",
	state: "Tamil Nadu",
    country: "India"
}

let secondaddress = {
	street: "netaji",
	city: "Tirunelveli",
	state: "Tamil Nadu",
    country: "India"
}


let storeAddress = (userId,...firstaddress)=>{
	let customeradd = {
		userId: userId,
		userAdd: firstaddress
	}
	allUseradd.push(customeradd)

	console.log(allUseradd)
	return allUseradd
}


storeAddress("Mano345",firstaddress,secondaddress)*/

/*let allpeople = []

let pushtopartylist = (...people)=>{
	console.log(people)
	allpeople = allpeople.concat(people)
	console.log(allpeople)
	return allpeople
}

pushtopartylist("mani","siva","ram")

pushtopartylist("pavi","lav","madhu")
*/

/*let sum = (x,y,z)=>{
	return x+y+z;
}

var number = [1,2,3]

console.log(sum(...number))
*/

/*let sort = (...v)=>{
	console.log(v.sort())
}

sort(3,7,9,4)
*/
/*
let first = "Manonmani"

let last = "Murugan"

let name = {
	first,
	last,
	//this is called as method not function
	//don't ever use arrow method in this
	//the method is defined inside object
	calculateName(){
		return first+" "+last
	}
}
console.log(name)
console.log(name.calculateName())
*/
/*
let first = "Manonmani"
let last = "Murugan"

let name = {
	first: last
}

console.log(name)//o/p: first: "Murugan"

let name = {
	[first]: last
}

console.log(name)//o/p: Manonmani: "Murugan"
*/
/*var sentence =
 `Hi this is Manonmani. I am a fresher. I studied in R.M.K Engineering college.
  Learning Front-end course at edwisor. It's nice to see me learning new technologies to improve myself.
  This is an online paid course. I paid the money during struggle period of my family.`
console.log(sentence)

var a = "Hi this is Manonmani"

var b = "I am a fresher."

var c = `${a} and ${b}`

console.log(c)


let generate = function(firstname,lastname,message){
	var email = `Hi ${firstname+lastname}\n 
	this is ur message:\n
	${message}`
	return email
}

console.log(generate("Manonmani","Murugan","welcome to edwisor"))

let c = `${1+2} numbers are present`

console.log(c)

var c = `hi \${here is the text}`
console.log(c)
*/
/*
var customers = [{
	id: 123,
	signedupdate: '2018-01-21'
},{
	id: 456,
	signedupdate: '2017-11-10'
}]

for(customer of customers){
	console.log(customer)
}
*/
var user = {
	name: "Mano",
	phno: 9941157663
}

for(x of user){
	console.log(x)
}