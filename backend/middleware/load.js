let load = (req,res,next)=>{
    res.render("loading")
    next()
    
}
export default load;