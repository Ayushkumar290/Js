const user = {
    _username: "hitesh",
    _email: "h@hitesh.com",
    _password: "123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value

    }
}

const tea = Object.create(user)

console.log(tea.email);
tea.email = "tea@hitesh.com"
console.log(tea.email);

