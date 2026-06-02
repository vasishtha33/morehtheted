@echo off
chcp 65001 >nul
echo ========================================
echo    Деплой на GitHub Pages
echo ========================================
echo.

echo [1/4] Сборка проекта...
call npm run build

if %errorlevel% neq 0 (
    echo Ошибка сборки! Проверь код.
    pause
    exit /b 1
)

echo [2/4] Переход в dist...
cd dist

echo [3/4] Подготовка файлов...
git checkout -b gh-pages 2>nul
git add -A

:: Проверяем, есть ли изменения
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo Нет изменений для коммита. Сайт уже актуален.
    cd ..
    pause
    exit /b 0
)

git commit -m "Deploy %date% %time%"

echo [4/4] Пуш на GitHub...
git push -f https://github.com/vasishtha33/morehtheted.git gh-pages

echo.
echo ========================================
echo    Деплой успешно завершён!
echo    Сайт: https://vasishtha33.github.io/morehtheted
echo ========================================

cd ..
pause