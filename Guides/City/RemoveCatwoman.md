Four Catwoman segments were originally a Day 1 DLC and optional to install, but when the game was rereleased in Steam as the Game of the year edition, they became an integral part of the game. However, since many runners dislike these segments, we found a way to remove it by editing an .ini file, without affecting the rest of the game. That's why you will find separate categories on the leaderboard.

If you want to play without the Catwoman segments, find the Steam folder on the disk where you installed the game, go to X:\Steam\SteamApps\common\Batman Arkham City GOTY\BmGame\Config\PC\ and open PCGame.ini

Find the line +DLCBundlesInstalled="Catwoman" and comment it out without removing it (so you can easily restore it when necessary):
//+DLCBundlesInstalled="Catwoman"

The line repeats second time later in the file – do the same thing to it and save the changes.

Obviously, if you want to restore DLC later, open the file again and remove slashes.

Note to those who want to try a run with Catwoman: as decided by ancient gods, all four segments count as parts of the main story gameplay, even though the last one begins after the credits, so:
- Start timer when you gain control of Catwoman in the intro;
- End timer after you defeat Twoface (instead of Clayface as Batman), because only after that you gain ability to change characters in freeroam. Collecting money from Twoface's thugs is technically a sidequest so it's not necessary.