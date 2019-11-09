Here is how you set up the optimal mousewheel bindings for this game. Alternatively, if you are fine with using the game's default binds, we have a pre-made file in the [Resources section](https://www.speedrun.com/arkhamcity/resources).

* Open the game's Launcher, choose Settings -> Controls
* Unassign "Previous Gadget" and "Next Gadget" (also make sure mouse wheel isn't being used anywhere else)
* Assign Mouse Scroll Up to "Run/Glide/Use"
* Assign Shift+Mouse Scroll Up to "Counter/Takedown"

Then, open the UserInput.ini file found here > "Documents\WB Games\Batman Arkham City GOTY\BmGame\Config\UserInput.ini"

 and add this:

.Bindings=(Name="MouseScrollDown",Command="QuickGadgetB | VenomShockwave | BlockBreaker | ExitAgilityMode | SkipCutscene | CancelGadget | DebugMenuSelectB | CancelBatarangCamera")

With all that setup, you'll have:
-Mouse Wheel Down skips dialog
-Mouse Wheel Up opens grates, dive rolls, etc
-Shift+Mouse Wheel Up counters (for the Ra's boss fight)

This method lets us have all three of the useful mouse wheel actions bound, and also means you use the same UserInput file for every category.