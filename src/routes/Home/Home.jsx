import { useState, useEffect } from "react"

const Home =()=>{

    const [produto, setProduto]=useState([])

    useEffect(()=>{
        fetch("https://bd-1-sph.vercel.app/produtos/")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProduto(data)
        })
    },[])

    return(
        <>
        <div>
            {produto.map((item, index)=>(
                <div key={index}>
                    {item.nome}
                   <img src={item.foto}/>
                </div>
            ))}            
        </div>
        </>
    )
}
export default Home
