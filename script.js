let stopwatch = document.querySelector(".stopwatch");
let Start = document.querySelector(".start");
let Pause = document.querySelector(".pause");
let Reset = document.querySelector(".reset");
let Laps = document.querySelector(".laps-btn");
let ClearLaps = document.querySelector(".clear-laps");
let LapElements = document.querySelector(".lap-elements");
let intervelCheck = 0;
let minutes = 0;
let secnds = 0;
let hundred = 0;

function Stopwatch() {
    hundred++;
    if (hundred < 10) hundred = "0" + hundred;
    if (hundred > 99) {
        secnds++;
        hundred = 0;
        if (secnds < 10) secnds = "0" + secnds;
        if (secnds > 59) {
            minutes++;
            secnds = 0;
            if (minutes < 10) minutes = "0" + minutes;
        }
    }
    if (secnds == 0) secnds = "00";
    if (hundred == 0) hundred = "00";
    if (minutes == 0) minutes = "00";
    stopwatch.innerHTML = `${minutes}:${secnds}:${hundred}`;
}

Start.addEventListener("click", () => {
    intervelCheck++;
    const starts = setInterval(Stopwatch, 10);

    // to prevent multi inturvel run at once
    if (intervelCheck > 1) {
        clearInterval(starts);
    }

    Pause.addEventListener("click", () => {
        clearInterval(starts);
        intervelCheck = 0;
    });
    Reset.addEventListener("click", () => {
        clearInterval(starts);
        stopwatch.innerHTML = `00:00:00`;
        minutes = 0;
        secnds = 0;
        hundred = 0;
        intervelCheck = 0;
    });
});
Laps.addEventListener("click", () => {
    const LapDiv = document.createElement("div");
    LapDiv.classList.add("laps");
    LapElements.appendChild(LapDiv);
    const LDT = document.createElement("div"); // LDT = lap div text
    LDT.classList.add("ldt");
    LDT.innerHTML = `${stopwatch.innerHTML}`;
    LapDiv.appendChild(LDT);
    const LDB = document.createElement("div"); // LTB = lap div border
    LDB.classList.add("ldb");
    LapDiv.appendChild(LDB);
    LapElements.appendChild(LapDiv);
    const ExtraLap = document.querySelectorAll(".laps");
    if (ExtraLap.length > 6) {
        ExtraLap[0].remove();
    }
});
ClearLaps.addEventListener("click", () => {
    let AllLaps = document.querySelectorAll(".laps");
    for (let i = 0; i < AllLaps.length; i++) {
        AllLaps[i].remove();
    }
});
