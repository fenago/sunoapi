@echo off
setlocal enabledelayedexpansion
echo Running Git Push Script
echo ==========================================
echo.

REM Prompt for repository name
set /p repo_name="Enter GitHub repository (format: fenago/medical): "

REM Validate input format
echo %repo_name% | findstr /r "^[^/]*/[^/]*$" >nul
if errorlevel 1 (
    echo ERROR: Invalid format. Please use format: fenago/medical
    echo Do NOT include https://github.com/
    pause
    exit /b 1
)

REM Construct full repository URL
set repo_url=https://github.com/%repo_name%.git

echo.
echo Repository URL: %repo_url%
echo.

REM Check if .git directory exists
if exist .git (
    echo Git repository already exists.
    set /p reinit="Do you want to reinitialize it? This will keep your files but reset Git history. (Y/N): "
    if /i "!reinit!"=="Y" (
        echo Removing existing .git directory...
        rmdir /s /q .git
        echo Initializing new Git repository with main branch...
        git init -b main
        echo.
    )
) else (
    echo No Git repository found.
    set /p first_time="Initialize new Git repository? (Y/N): "
    if /i "!first_time!"=="Y" (
        echo Initializing new Git repository with main branch...
        git init -b main
        echo.
    )
)

echo Setting remote repository...
git remote remove origin 2>nul
git remote add origin %repo_url%
echo.

echo Checking current status...
git status
echo.

REM Detect current branch
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
echo Current branch: %current_branch%

REM If on master, ask to rename to main
if /i "%current_branch%"=="master" (
    echo.
    echo WARNING: You are on 'master' branch, not 'main'.
    set /p rename_branch="Rename 'master' to 'main'? (Y/N): "
    if /i "!rename_branch!"=="Y" (
        git branch -M main
        set current_branch=main
        echo Branch renamed to main
    )
)
echo.

echo Adding all files except those in .gitignore...
git add .
echo.

echo Committing changes...
set /p commit_msg="Enter commit message (or press Enter for default message): "
if "%commit_msg%"=="" (
  git commit -m "Fixed TypeScript errors and added Google Analytics integration"
) else (
  git commit -m "%commit_msg%"
)
echo.

echo WARNING: This will FORCE PUSH to the repository, potentially overwriting remote changes.
echo This makes the remote repository match your local repository exactly.
set /p confirm="Are you sure you want to force push? (Y/N): "
if /i "%confirm%"=="Y" (
  echo Pushing to GitHub repository: %repo_url%
  git push -f -u origin %current_branch%
) else (
  echo Force push canceled.
  exit /b 1
)

echo.
echo Done!
echo ==========================================
pause
endlocal