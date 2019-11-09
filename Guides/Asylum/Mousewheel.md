Here is how you set up mousewheel bindings for this game. Alternatively, if you are fine with using the game's default binds, we have a pre-made file in the [Resources section](https://www.speedrun.com/arkhamasylum/resources).

The ini file will be found here > "My Documents\Square Enix\Batman Arkham Asylum GOTY\BmGame\Config\UserInput.ini"

In this ini file, a breakdown of all the game's keyboard button mappings can be found.  As the game itself does not allow custom keybinds to be made (ex. a button that punches but doesn't use gadgets, or vice versa) we only allow copying other buttons for use on the mousewheel.  

For opening grates (this is by default the spacebar) add this line at the bottom (make sure to copy starting at the period and ending with Interact) :

.Bindings=(Name="MouseScrollUp",Command="ContextSensitive | Run | CapeGlide | AcceptConversation | Evade | CancelBatarangCamera", Shift=false, Control=false, Alt=false, bIgnoreShift=false, bIgnoreCtrl=false, bIgnoreAlt=false):META:COM_RUN_GLIDE_USE,0,-1,-1,"bRunButton",false,false,CI_RunGlide,CI_Interact

To switch these from mouse wheel up to down simply change MouseScrollUp to MouseScrollDown.  To do down to up, do the opposite.

For skipping dialogue without punching (this is by default the Xbox B button) add this line at the bottom (make sure to copy starting at the period and ending with CancelBatarangCamera):

.Bindings=(Name="MouseScrollDown",Command="HangFromVantagePoint | BlockBreaker | DebugCamMoreSpeed | OnRelease DebugCamNormalSpeed | ExitAgilityMode | SkipCutscene | CancelGadget | DebugMenuSelectB | CancelBatarangCamera")

If you need to change any settings in the future, you may need to re-add the mouse wheel binds in case the launcher removed them. Once you have them set up I'd recommend backing up the file somewhere for convenience.