//setter and getter methods
class Contact{

    get id()
    {
        return this._id;
    }

    set id(id)
    {
        this._id = id;
    }

    get firstName()
    {
        return this._firstName;
    }

    //setting validation or regex for firtname
    set firstName(firstName)
    {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(firstNameRegex.test(firstName))
        this._firstName = firstName;
        else
        throw 'First Name Invalid'
    }

    //setting validation or regex for lastname
    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else
        throw 'Last Name Invalid'
    }

    get address()
    {
        return this._address;
    }

    //setting validation or regex for address
    set address(address)
    {
        let words = address.split(" ");
        if(words.length>1){
            let addressRegex = RegExp('^[A-Za-z,.0-9]{3,}$');
            for(const word of words){
                if(!addressRegex.test(word))
                throw 'Address Invalid';
            }
            this._address = address;
        }
        else{
            throw 'Address Invalid';
        }
    }

    get city()
    {
        return this._city;
    }

//setting validation or regex for city
    set city(city)
    {
        let cityRegex = RegExp('^[A-Za-z\\s]{2,}$')
        if(cityRegex.test(city))
        this._city = city;
        else
        throw 'City Invalid'
    }

    get state()
    {
        return this._state;
    }

    //setting validation or regex for state
    set state(state)
    {
        let stateRegex = RegExp('^[A-Za-z\\s]{4,}$')
        if(stateRegex.test(state))
        this._state = state;
        else
        throw 'State Invalid'
    }

    get zip()
    {
        return this._zip;
    }

    //setting validation or regex for zip code
    set zip(zip)
    {
        let zipRegex = RegExp('^[0-9]{3}[\\s]*[0-9]{2,}$');
        if(zipRegex.test(zip))
        this._zip = zip;
        else
        throw 'Zip Invalid'
    }

    get phone()
    {
        return this._phone;
    }

    //setting validation or regex for 
    set phone(phone)
    {
        let phoneRegex1 = RegExp('^[1-9][0-9]{9}$');
        let phoneRegex2 = RegExp('^[0-9]{2}[1-9][0-9]{9}$');
        let phoneRegex3 = RegExp('^[+][0-9]{2}[1-9][0-9]{9}$');
        if(phoneRegex1.test(phone) || phoneRegex2.test(phone) || phoneRegex3.test(phone))
        this._phone = phone;
        else
        throw 'Phone Number Invalid'
    }

    get email()
    {
        return this._email;
    }

    //setting validation or regex for firtname
    set email(email)
    {
        let emailRegex = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+([.][a-zA-Z]{2,}){1,2}$");
        if(emailRegex.test(email))
        this._email = email;
        else
        throw 'Email Incorrect';
    }

    toString()
    {
        return "Id = "+this.id+", FirstName = "+this.firstName+", LastName = "+this.lastName+", Address = "+this.address+
                ", City = "+this.city+", State = "+this.state+", Zip = "+this.zip+", Phone = "+this.phone+", Email = "+this.email;
    }

}