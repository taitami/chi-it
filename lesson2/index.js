function addParamsToRequest(params) {
    let count = 0;

    return function(data) {

        const result = {
            ...params,
            ...data,
            count: count
        };
        
        count++;
        return result;
    }
}

const sendData = addParamsToRequest({ 'access-token': 'qwerty' });

const result1 = sendData({ payload: 'some data 1' });
console.log(result1);

const result2 = sendData({ payload: 'some data 2' });
console.log(result2);

console.log("--------------------------------------------------------------------------------");

const obj = {
    getData: function () {
        console.log(`Person name is: ${this.name} and age ${this.age}`);
    }
}

const person = { name: "Alice", age: 30 };

console.log("--- Call ---");
obj.getData.call(person);

console.log("--- Bind ---");
const boundGetData = obj.getData.bind(person);

boundGetData(); 
boundGetData();

console.log("--------------------------------------------------------------------------------");

const root = {
    name: 'name', type: 'folder',
    children: [
        {
            name: 'folder 1', type: 'folder',
            children: [
                {
                    name: 'folder 2', type: 'folder',
                    children: [
                        { name: 'file 3', type: 'file', size: 30 }
                    ]
                }
            ]
        },
        { name: 'file 1', type: 'file', size: 10 },
        { name: 'file 2', type: 'file', size: 20 }
    ]
};

function findFiles(node) {
    let files = [];

    if (node.type === 'file') {
        files.push(node.name);
    }

    if (node.children) {
        for (const child of node.children) {
            files = files.concat(findFiles(child));
        }
    }

    return files;
}

const result = findFiles(root);
console.log(result);

console.log("--------------------------------------------------------------------------------");

class HumanES6 {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    introduce() {
        console.log(`hi my name is ${this.name}, my phone is ${this.phone}.`);
    }
}

class StudentES6 extends HumanES6 {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }

    study() {
        console.log(`i study on ${this.course} course.`);
    }
}

class TeacherES6 extends HumanES6 {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }

    teach() {
        console.log(`i teach ${this.subject}.`);
    }
}

const student6 = new StudentES6("oleh", "099-123-45-67", 3);
student6.introduce();
student6.study();

const teacher6 = new TeacherES6("maria ivanivna", "098-765-43-21", "mathematics");
teacher6.introduce();
teacher6.teach();

function HumanES5(name, phone) {
    this.name = name;
    this.phone = phone;
}

HumanES5.prototype.introduce = function() {
    console.log("hi my name is " + this.name + ", my phone is " + this.phone + ".");
};

function StudentES5(name, phone, course) {
    HumanES5.call(this, name, phone); 
    this.course = course;
}

StudentES5.prototype = Object.create(HumanES5.prototype);
StudentES5.prototype.constructor = StudentES5;

StudentES5.prototype.study = function() {
    console.log("i study on " + this.course + " course.");
};

function TeacherES5(name, phone, subject) {
    HumanES5.call(this, name, phone);
    this.subject = subject;
}

TeacherES5.prototype = Object.create(HumanES5.prototype);
TeacherES5.prototype.constructor = TeacherES5;

TeacherES5.prototype.teach = function() {
    console.log("i teach " + this.subject + ".");
};

var student5 = new StudentES5("andriy", "050-111-22-33", 1);
student5.introduce();
student5.study();

var teacher5 = new TeacherES5("viktor petrovych", "067-999-88-77", "physics");
teacher5.introduce();
teacher5.teach();