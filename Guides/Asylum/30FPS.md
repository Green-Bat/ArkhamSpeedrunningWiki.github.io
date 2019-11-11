# How to Switch FPS to 30 for PC
- By [FullyAutomato](https://www.speedrun.com/user/FullyAutomato)
- Updated August 17th, 2018

The ini file will be found here > "My Documents\Square Enix\Batman Arkham Asylum GOTY\BmGame\Config\UserEngine.ini"

Add the following two lines in at the bottom of the file:
[Engine.GameEngine]
MaxSmoothedFrameRate=30.000000

And you're done! To change it back to the default of 62fps all you have to do is change the value in that second line from "30.000000" to "62.000000". Important note, make sure that your BmEngine.ini file in that same directory is *not* set to read-only, otherwise these changes will not be applied.
 
-30fps is highly encouraged for these following categories: Any% Easy/Hard, and 100% Easy/Hard
-62fps is highly encouraged for these following categories: No Major Skips Easy/Hard, and 100% - Glitchless Easy/Hard