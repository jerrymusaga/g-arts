

import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, getGlobalState, useGlobalState} = createGlobalState({
    modal: 'scale-0',
    NFTDetailsModal: 'scale-0',
});

export {setGlobalState, getGlobalState, useGlobalState}