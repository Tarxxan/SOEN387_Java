
let passwordpattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
let postalcodepattern=/^[A-Z][1-9][a-zA-Z]\s[1-9][A-Z][1-9]$/g;
let namespattern=/[a-zA-Z\s]+(\.)?[a-zA-Z]+/g;
let phonepattern=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
let emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let datepattern = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/

function validatenpformForm() {

    let name = document.forms ["npform"] ["npname"].value;
    let lastname = document.forms ["npform"] ["nplastname"].value;
    let streetnumber = document.forms ["npform"] ["npestreetnumber"].value;
    let streetname = document.forms ["npform"] ["npstreetname"].value;
    let city = document.forms ["npform"] ["npcity"].value;
    let province = document.forms ["npform"] ["npprovince"].value;
    let country = document.forms ["npform"] ["npcountry"].value;
    let postalcode = document.forms ["npform"] ["npostalcode"].value;
    let email = document.forms ["npform"] ["npemail"].value;
    let phone = document.forms ["npform"] ["npphone"].value;
    let dateofbirth = document.forms ["npform"] ["npdateofbirth"].value;
    let password = document.forms ["npform"] ["nppassword"].value;
    let confirmpassword = document.forms ["npform"] ["npconfirmpassword"].value;


    if(!email.match(emailpattern)){
        alert("This is not an email address try again");
        return false;
    }
    if(!phone.match(phonepattern)){
        alert("wrong phone number, try again ");
        return false;
    }
    if(!name.match(namespattern)  ){
        alert( "Invalid Name, try again");
        return false;
    }
    if(!lastname.match(namespattern)  ){
        alert( "Invalid Last Name, try again");
        return false;
    }
    if(!streetnumber.match( /^\d+$/) ){
        alert("Invalid street number, try again");
        return false;
    }
    if(!streetname.match( namespattern)   ){
        alert("Invalid street name, try again");
        return false;
    }
    if(!city.match( namespattern )){
        alert( "Invalid city name, try again");
        return false;
    }
    if(!province.match(namespattern)){
        alert( "Invalid province name, try again" + province);
        return false;
    }
    if(!postalcode.match(postalcodepattern )){
        alert("Invalid postal code, try again");
        return false;
    }

    if(!dateofbirth.match(datepattern)){
        alert( "wrong dob, try again ");
        return false;
    }

    let match = password.match(passwordpattern);
    if (!match) {
        alert("Invalid Password complexity, try again");
        return false;
    }

    if(confirmpassword!==password){
        alert("Password confirmation does not match the password chosen try again");
        return false;
    }
}