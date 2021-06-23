


var questions = [
    {
        title: "Hyper Text Markup Language Stand For?",
        choices: ["JavaScript", "XHTML","CSS", "HTML"],
        answer: "HTML"
    },

    {
        title: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"], 
        answer: "CSS"
    },

    {
        title: "Which is not a JScript Framework?",
        choices: ["Python Script", "JQuery","Django", "Node"],
        answer: "Django"
    },

    {
        title: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        answer: "PHP"
    }
]

// function Quiz(questions) {
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// } 
.

$("#initBtn").on("click", function firstQ() { 
    $("#question").text(questions[0].title)
    $("#btn0").text(questions[0].choices[0])
    $("#btn1").text(questions[0].choices[1])
    $("#btn2").text(questions[0].choices[2])
    $("#btn3").text(questions[0].choices[3])   

} )

var i = 0

function cycle() { 
    i++; 
    $("#question").text(questions[i].title)
    $("#btn0").text(questions[i].choices[0])
    $("#btn1").text(questions[i].choices[1])
    $("#btn2").text(questions[i].choices[2])
    $("#btn3").text(questions[i].choices[3]) 
    
}
var score = 0
$("#btn0").on("click", function(){
    if($("#btn0").text() === questions[i].answer){
       score++;
       console.log(score)
      

}
cycle()

$("#score").text("Score: " + score)
})
$("#btn1").on("click", function(){
    if($("#btn1").text() === questions[i].answer){
       score++;
    }
    cycle()
    $("#score").text("Score: " + score)
})
$("#btn2").on("click", function(){
    if($("#btn2").text() === questions[i].answer){
       score++;
    }
    cycle()
    $("#score").text("Score: " + score)
})
$("#btn3").on("click", function(){
    if($("#btn3").text() === questions[i].answer){
       score++;
    } 
    cycle()
    $("#score").text("Score: " + score)
})