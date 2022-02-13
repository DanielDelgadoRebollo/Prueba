import { Router } from 'express';
import Task from '../models/Task'
const router = Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/tasks/add',async (req,res)=>{
    const usuarioRegistrado = Task(req.body)
    const usuarioGuardado = await usuarioRegistrado.save()
    console.log(usuarioGuardado)
    console.log(usuarioRegistrado)
    res.send('saved')
})

router.get('/about',(req,res)=>{
    res.send("about")
})

router.get('/edit',(req,res)=>{
    res.send("edit")
})
export default router;