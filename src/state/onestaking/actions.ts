import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { AppThunk } from "state/types";
import {getLeosStakingContract} from "utils/contractHelpers";
import { getTotalTVL } from "./index";

export type SerializedBigNumber = string

const leosStakingContract = getLeosStakingContract()

export const ethersToSerializedBigNumber = (value: ethers.BigNumber): SerializedBigNumber =>
  ethersToBigNumber(value).toJSON()

export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber => new BigNumber(ethersBn.toString())

export const fetchTotalTVL =
  (): AppThunk =>
    async (dispatch) => {
      const tx = await leosStakingContract.totalStakedAmount()
      dispatch(getTotalTVL(ethersToSerializedBigNumber(tx)))
    }