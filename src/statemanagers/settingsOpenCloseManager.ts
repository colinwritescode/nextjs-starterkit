import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useSettingsOpenCloseSwitcher = create((set) => ({
  settingsIsOpen: false,
  settingsOpenAttempts: 0,
}))

export default useSettingsOpenCloseSwitcher
