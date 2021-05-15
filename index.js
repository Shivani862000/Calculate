/* ----- Calculator ----- */

// in this insert function we take input in input fiew ..
function insert(num) {

    var a = document.form.textview;
//variable a take input using form and textview and store it in a.value
    a.value += num;
}
//In this opt function  in amd we pass argument / * when it fetch value from textview
function opt(amd) {
    var view = document.form.textview;
    // now view have input the if condition check that argument and given iput is same or not
    if (view.value != "") {
        view.value += amd;
    }
}
// In zero function also check argument value and input valueif same or not
function zero() {
    var view = document.form.textview;
    if (view.value != "") {
        view.value += '0';
    }
}
// in this equal function 
function equal() {
    //we in button variable we fetch the button data of every button with the help of none class name
    var button = document.getElementsByClassName('none');
    // in a we take the value of every button in a 
    var a = document.form.textview;
    // exp take value to from a
    var exp = a.value;
// now check the conditon 
    if (exp) {
        // exp value and a.value is equal if equal the evaluate
        try {a.value = eval(exp);}
        catch (e) {
            //after all syntax error
            alert ("Syntax Error!");
            document.form.textview.value = 'Syntax Error!';
            none();
        }
    }
    //
    if (a.value == 0) {
        a.value = "";
    }
    if(a.value == 'Infinity'){
        document.form.textview.value = "Can't divide by Zero!";
        button.onclick ='none()';
       alert('Can\'t divide by Zero!')
       none();
    }
}
function none() {
    alert('Press the Clear button!');
} 
function clean() {
    document.form.textview.value = '';
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);
}