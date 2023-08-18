import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useCategoryCardSwitcher = create((set) => ({
  cardStatement: 'Select a prompt category',
  currentCategory: null, //roleplay, information, image, video
}))

export default useCategoryCardSwitcher
