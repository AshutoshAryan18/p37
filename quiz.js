class Quiz{
    constructor(){

    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",(data)=>{
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
    async start(){
        if(gameState===0){
            constestant = new constestant()
            var constestantCountref = await database.ref("constestant").once("value")
            if(constestantCount.ref.exist()){
                constestantCount=constestantCount.val()
                constestant.getCount()
            }
            question=new Question()
            question.display()
        }
    }
}



