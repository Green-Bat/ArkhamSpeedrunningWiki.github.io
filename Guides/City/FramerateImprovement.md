# Make Game Work Better on Low-end Systems (Delta Time Adjustment)

When the framerate gets too low, the game slows down to compensate.
Open UserEngine.ini located at "%UserProfile%\Documents\WB Games\Batman Arkham City GOTY\BmGame\Config\" (Assuming you have the GOTY edition. If you have the original, just search the file name in your documents folder) and add the following lines to the bottom of the file:

[Engine.GameEngine]
MaxDeltaTime=1