import React, {useEffect, useState} from "react";
import axios from 'axios';

export const usePriceLeosBusd = () => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    const fetchPrice = async  () => {
      try {
        const res = await axios.get(`https://api.pancakeswap.info/api/v2/tokens/0x2c8368f8f474ed9af49b87eac77061beb986c2f1`);
        setPrice(res.data?.data?.price)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPrice()
  }, [])

  return price
}