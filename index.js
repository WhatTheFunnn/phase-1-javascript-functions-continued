function saturdayFun (activity = "roller-skate", day = "Saturday" ) {
    return `This ${day}, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(result = "*") {
        return function(empathic ="a hard worker") {
            return `You are ${result}${empathic}${result}!`
        };  

}