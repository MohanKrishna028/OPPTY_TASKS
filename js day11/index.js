/* MAP IMAGE CLICK */
function openMap() {
    var mapApiLink = "https://www.google.com/maps?q=San+Francisco+CA";
    window.location.href = mapApiLink;
}

/* TOGGLE MAP */
function toggleMap(id) {
    var mapDiv = document.getElementById(id);

    if (mapDiv.style.display === "none") {
        mapDiv.style.display = "block";
    } else {
        mapDiv.style.display = "none";
    }
}

/* TODO LIST */
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
var list = document.getElementById("taskList");

function renderTasks() {
    list.innerHTML = "";

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = tasks[i] +
            ' <button onclick="removeTask(' + i + ')">Remove</button>';
        list.appendChild(li);
    }
}

function addTask() {
    var input = document.getElementById("taskInput");

    if (input.value.trim() !== "") {
        tasks.push(input.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        renderTasks();
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function clearTasks() {
    tasks = [];
    localStorage.clear();
    renderTasks();
}

renderTasks();

/* TIMER */
var seconds = 0;
var running = true;

setInterval(function () {
    if (running) {
        seconds++;
        var time = new Date(seconds * 1000).toISOString().substr(11, 8);
        document.getElementById("timer").innerText = "Time elapsed: " + time;
        document.getElementById("timer2").innerText = "Time elapsed: " + time;
    }
}, 1000);

function pauseTimer() {
    running = !running;
}

function resetTimer() {
    seconds = 0;
}

/* FORM VALIDATION */
function validateForm() {
    var valid = true;

    document.getElementById("nameErr").innerText = "";
    document.getElementById("emailErr").innerText = "";
    document.getElementById("passErr").innerText = "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "") {
        document.getElementById("nameErr").innerText = "Please enter your name.";
        valid = false;
    }

    if (email.indexOf("@") === -1) {
        document.getElementById("emailErr").innerText = "Invalid email.";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passErr").innerText =
            "Password must be at least 6 characters.";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMsg").innerText =
            "Your information is saved in this browser!";
    }

    return false;
}
