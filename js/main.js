console.log("Hello World!");
function fullname(firstname, lastname) {
    return firstname + " " +lastname;
}

const res = fullname("Lourdes", "Nguyen");
console.log(res);

function avg(...args) {
    let sum = 0;
    for (const item of args) {
        sum += item;
    }
    return sum / args.length;
}

const avgres = avg(2, 3, 4, 5)
console.log(avgres);

const arrayOfNotes = [];
let id = 0;

const add = function(text, priority) {
    arrayOfNotes.push({
        text,
        priority, //low,medium,high
        author: "Lourdes"
    });
};

const list = function() {
    arrayOfNotes.forEach(item => console.log(item));
};

const remove = function(index) {

};