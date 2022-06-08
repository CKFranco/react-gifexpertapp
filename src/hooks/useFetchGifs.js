import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'


export const useFetchGifs =  (category) => {

    const [objeto, setObjeto] = useState({
        data: [],
        loading: true
    })

    useEffect(()=>{

        getGifs(category)

            .then(imgs => {

                setTimeout(() => {

                    setObjeto({
                        data: imgs,
                        loading: false
                    })

                }, 3000);
            })

    }, [category])


    return objeto

}