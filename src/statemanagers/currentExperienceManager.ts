import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useCurrentExperienceSwitcher = create((set) => ({
  currentExperienceIs: 'settings',
}))

export default useCurrentExperienceSwitcher
