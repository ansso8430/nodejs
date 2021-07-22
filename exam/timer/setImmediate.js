const Timeout = setTimeout(() => {
    console.logg("지연실행");
}, 5000);

clearTimeout(Timeout); //지연실행 취소

const interval = setInterval(() => {
    console.log("지연반복실행");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);

setImmediate(() => {
    console.log("즉시 실행");
    //setTimeout(function() {}, 0);
});

clearImmediate(immediate); //비동기 즉시 실행 취소