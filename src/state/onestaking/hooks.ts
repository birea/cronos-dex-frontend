import { useEffect} from 'react'
import { useSelector } from 'react-redux';
import useRefresh from 'hooks/useRefresh'
import { State } from 'state/types';
import { fetchTotalTVL } from "./actions";
import { useAppDispatch } from "../index";

export const useTotalTvl = (): { totalTVL:number } => {
  const { fastRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  useEffect(()=>{
      dispatch(fetchTotalTVL())
  },[dispatch, fastRefresh])
  const { totalTVL } = useSelector((state:State)=>({
    totalTVL: state.staking.totalTVL
  }))
  return { totalTVL }
}