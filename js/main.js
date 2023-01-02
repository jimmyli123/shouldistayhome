document.querySelector("#enter").addEventListener('click', addOne)
document.querySelector("#leave").addEventListener('click', removeOne)
let count = 0;
let maxCapacity = 10;
let oneFourth = maxCapacity/4;
let twoFourth = oneFourth * 2;
let threeFourth = oneFourth * 3;


function addOne() {
    if (count+1 === maxCapacity) {
        document.querySelector("#showCount").innerHTML = "You have reached max capacity.";
        count +=1;
        let progressBar = document.querySelector("#progress_bar")
        checkCounter(count)
    } 
    else if (count+1 > maxCapacity) {
        document.querySelector("#showCount").innerHTML = "You have reached max capacity.";
    } 
    else {
        count +=1;
        document.querySelector("#showCount").innerHTML = count;
        let progressBar = document.querySelector("#progress_bar")
        checkCounter(count)
    }
}

function removeOne() {
    if (count-1 < 0) {
        count=0;
    }
    else {
        count -=1;
        document.querySelector("#showCount").innerHTML = count;
        checkCounter(count)
    }
    
}

function checkCounter(counter) {
    let progressBar = document.querySelector("#progress_bar")
    if (counter ===0) {
        progressBar.setAttribute("style","width: 0%")
        progressBar.className=""
    }
    else if (counter <= oneFourth) {
        progressBar.setAttribute("style","width: 25%")
        progressBar.className="progress-bar bg-success"
    }
    else if (counter <= twoFourth) {
        progressBar.setAttribute("style","width: 50%")
        progressBar.className="progress-bar bg-info"
    }
    else if (counter <=threeFourth) {
        progressBar.setAttribute("style","width: 75%")
        progressBar.className="progress-bar bg-warning"
    }
    else {
        progressBar.setAttribute("style","width: 100%")
        progressBar.className="progress-bar bg-danger"
    }
}