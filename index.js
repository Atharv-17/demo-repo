const express=require('express')
const app=express()
app.use(express.json()) 
const users=[{
  name:"John",
  kidneys:[{
    healthy:false
  },{
    healthy:true
  }]
}]


app.get("/",function(req,res){
    const jhonkidneys=users[0].kidneys
    const totalkidneys=jhonkidneys.length
    let numberofhealthykidneys=0
    for(let i=0;i<totalkidneys;i++){
      if(jhonkidneys[i].healthy){
        numberofhealthykidneys=numberofhealthykidneys+1
      }
    }
    
    const noofUnnhealthykidneys=totalkidneys-numberofhealthykidneys

    res.json({totalkidneys,
      numberofhealthykidneys,
      noofUnnhealthykidneys,
      jhonkidneys
    })
})

app.post("/",function(req,res){
   const ishealthy=req.body.ishealthy
    users[0].kidneys.push({
      healthy: ishealthy
    })

    res.send("Done!!!!!")
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
      users[0].kidneys[i].healthy=true
    }
    res.send({})
})

app.delete("/",function(req,res){
    const newkidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
      if(users[0].kidneys[i].healthy){
        newkidneys.push({healthy:true})
      }
    }

    users[0].kidneys=newkidneys
    res.send({"msg":"deleted"})
})

app.listen(3000);
