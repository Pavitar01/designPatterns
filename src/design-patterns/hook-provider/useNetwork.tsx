/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";



const useNetwork = () => {

    const [products, setProducts] = useState<any>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true);
        const getdata = async () => {

            try {
                const response = await axios.get("https://dummyjson.com/products")
                setProducts(response.data.products)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        getdata()
    }, [])

    return { loading, products }
}

export default useNetwork
