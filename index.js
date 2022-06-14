// code your solution here
function saturdayFun(activity){
    if (!activity) {
        return 'This Saturday, I want to roller-skate!'
    } else {
        return (`This Saturday, I want to ${activity}!`)}
}

function mondayWork(activity1) {
    if(!activity1){
        return 'This Monday, I will go to the office.'
    } else {
        return (`This Monday, I will ${activity1}.`)
    }
}

function wrapAdjective (part1 = "*") {
    return function(adjective = 'special') {
        return `You are ${part1}${adjective}${part1}!`
    }
}

