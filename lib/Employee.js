// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        if(!name) {
            throw new Error("Enter a valid name")
        }
        if(!id) {
            throw new Error("Enter a valid id")
        }
        if(!email) {
            throw new Error("Enter a valid email")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee'
    }
}

export default Employee;