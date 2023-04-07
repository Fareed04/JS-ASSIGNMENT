// N1A
let students = [
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: undefined,
    },
    {
        score: null,
    },
    {
        score: undefined,
    },
]
function findCheat(array) {

    for (student of students){
        if (student.score === undefined){
            console.log(`Score currently unavailable, has not been uploaded yet`)
        }
        else if (student.score === null) {
            return alert(`Cheater found!!!!`)
        }
    }
}
findCheat(students);