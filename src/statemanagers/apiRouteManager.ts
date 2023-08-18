import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useAPIRouteSwitcher = create((set) => ({
  apiURL: '',
}))

export default useAPIRouteSwitcher
