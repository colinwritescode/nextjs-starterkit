import create from 'zustand'

//=============================================================================
// ## In charge of storing the current host
//=============================================================================

const useTutorConversationSwitcher = create(() => ({
  conversationDataTutor: [],
  searchActive: false,
}))

export default useTutorConversationSwitcher
