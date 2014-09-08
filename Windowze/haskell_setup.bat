@echo off
start /d "C:\Program Files\Notepad++" notepad++.exe
cd "C:\Repositories\"
start "C:\WINDOWS\system32" cmd.exe "/c ""C:\Program Files\Git\bin\sh.exe" --login -i"
cmd /k "ghci"