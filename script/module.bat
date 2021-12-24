@echo off
Title Website Ping
color 0e
echo Enter the Website to run the Ping
set input=
set /p input= Enter your Website here:
if %input%==goto A if NOT B
echo Processing Your request
ping localhost>nul
echo -------------------------------------------------------------------------------------
echo If you do not close this within  45 seconds you will go to **ENTER WEBSITE HERE**
echo -------------------------------------------------------------------------------------
ping localhost>nul
echo This is the IP=
ping %input%
set input=
set /p input= If you want to open the adress please enter the IP here:
start iexplore.exe %input%
set input2=
set /p input2=
if %input% exit goto exit
ping localhost -n 45 >nul
start iexplore.exe **ENTER WEBSITE HERE**
exit
:exit
exit