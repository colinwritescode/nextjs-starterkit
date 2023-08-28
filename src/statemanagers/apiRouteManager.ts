import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================
export interface APIRouteSwitcherState {
  apiURL: string
}

const useAPIRouteSwitcher = create<APIRouteSwitcherState>((set) => ({
  apiURL: '',
}))

export default useAPIRouteSwitcher
