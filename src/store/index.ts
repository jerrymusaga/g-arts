

import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, getGlobalState, useGlobalState} = createGlobalState({
    modal: 'scale-0',
    NFTDetailsModal: 'scale-0',
    reactionModal: 'scale-0',
    updatePriceModal: 'scale-0',
    loading: {show: false, msg: ''},
    alert: {show:false, msg:'', color:''},
    nfts: [].toString(),
    nft: null,
    
});

const setAlert = (msg: string,color='green') => {
    setGlobalState('loading', {show:false,msg:''})
    setGlobalState('alert', {show:true, msg, color})
    setTimeout(() => {
        setGlobalState('alert',{show:false, msg, color})
    }, 9000)
}

const setLoadingMsg = (msg: string) => {
    const loading = getGlobalState('loading')
    setGlobalState('loading', {...loading, msg})
}

export {setGlobalState, getGlobalState, useGlobalState, setAlert, setLoadingMsg}