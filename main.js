function Qs(obj)
{
    return document.querySelector(obj);
} 
function Qss(obj)
{
    return document.querySelector(obj).style;
} 

let calc = Qs("#ap-pay");
calc.addEventListener("click", function(e){
    e.preventDefault();
    let amount = Number(Qs("#amount").value);
    let percent = Number(Qs("#an-int").value);
    let period = Number(Qs("#rep").value);
    let tot_int = period*amount*percent/100;
    let tot_pay = amount + tot_int;
    let month_pay = tot_pay/(period*12);
    Qs("#month-pay").innerHTML = "Monthly Payment   $"+month_pay;
    Qs("#tot-pay").innerHTML = "Total Payment     $"+tot_pay;
    Qs("#tot-int").innerHTML = "Total interest    $"+tot_int;
});
