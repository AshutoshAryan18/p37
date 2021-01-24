class Question{
    constructor(){
        this.input=createInput("NAME")
        this.button=createButton("PLAY")
        this.greeting=createElement("h4")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        this.title.html("my Quiz game")
        this.title.position(350,0)

        this.question.html("Question:- What start and ends with the letter 'E',but has only one letter? ")
        this.question.position(150,80)
        this.option1.html("1:- Everyone ")
        this.option1.position(150,80)
        this.option2.html("2:- Envelope ")
        this.option2.position(150,120)

        this.input.position(150,230);

    }
}