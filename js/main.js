document.querySelector("#enter").addEventListener('click', addOne)
document.querySelector("#leave").addEventListener('click', removeOne)
let count = 0;
let maxCapacity = 1000;
let oneThird = 333;
let twoThird = 666;


function addOne() {
    if (count+1 > maxCapacity) {
        document.querySelector("#showCount").innerHTML = "You have reached max capacity.";
    } 
    else {
        count +=1;
        document.querySelector("#showCount").innerHTML = count;
        let progressBar = document.querySelector(".progress-bar")
        if (count < oneThird) {
            progressBar.setAttribute("style","width: 33%")
        }
        else if (count < twoThird) {
            progressBar.setAttribute("style","width: 66%")
        }
        else {
            progressBar.setAttribute("style","width: 90%")
        }
    }

}

function removeOne() {
    if (count-1 < 0) {
        count=0;
    }
    else {
        count -=1;
        document.querySelector("#showCount").innerHTML = count;
    }
    
}