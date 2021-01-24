class constest{
    constructor(){
        this.index=null
        this.name=null
    }
    getcount(){
        var constestCountref=database.ref("constestCount")
        constentCountref.on("value",(data)=>{
            constestCount=data.val()
        })
}
    updatecount(count){
        database.ref("/").update({
            constestCount:count
        })
    }
    update(){
        var constestindex="constests/constest"+this.index
        database.ref(constestindex).set({
            name:this.name
        })
    }
   static getplayerinfo(){
        var constestinfo=database.ref("constests")
        constestinfo.on("value",(data)=>{
            allplayers=data.val()
        })
    }
}