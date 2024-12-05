import Member from '../models/member.model.js'

const memberData = async (req, res) => {
    try {
        const memberData = await Member.find();
        res.json(memberData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}
const member = async (req,res)=>{
    try{
        const memberInsert = await Member.create(req.body);
        res.json(memberInsert);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}

const oneMember = async (req,res)=>{
    try{
        let email = req.query.email
        let upass = req.query.upass

        if (!email || !upass) {
            return res.status(400).send('Missing email or password');
        }
        
        const memberData = await Member.findOne({email});
        if (memberData && memberData.upass === upass) {
            res.send(memberData);
        } else {
            res.status(404).send({ error: "Member not found or incorrect password" });
        }
       
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}

const updateMember = async (req,res)=>{
    try{
        let opr = req.query.opr

        if (opr != 'U') {
            return res.status(400).send("Can't Update vehicle");
        }

        let {email,upass} = req.body
        
        const memberData = await Member.updateOne({email},{$set:{upass}});
        if (memberData) {
            res.send(memberData);
        } else {
            res.status(404).send({ error: "Can't Update Password" });
        }
       
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}

export {member,memberData,oneMember,updateMember}