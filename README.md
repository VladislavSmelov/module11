# ЗАДАНИЕ. МОДУЛЬ №11
----------
#### Содержание:

1. [Создаем проект со следующей структурой](#1-создаем-проект-со-следующей-структурой)
2. [Подключаем в него Git через терминал](#2-подключаем-в-него-git-через-терминал)
3. [Игнорируем все файлы с расширением .sass и папки: bin, admin, config](#3-игнорируем-все-файлы-с-расширением-sass-и-папки-bin-admin-config)
4. [Добавляем все файлы в локальное хранилище](#4-добавляем-все-файлы-в-локальное-хранилище)
5. [Cоздаём новую ветку и переходим в неё](#5-cоздаём-новую-ветку-и-переходим-в-неё)
6. [Загружаем на удаленный репозиторий лишь основную ветку проекта](#6-создаем-папку-blog-с-файлами-indexjs-indexhtml)
7. [Загружаем на удаленный репозиторий лишь основную ветку проекта](#7-загружаем-на-удаленный-репозиторий-лишь-основную-ветку-проекта)
8. [Выгружаем последнюю версию проекта с готовым файлом README.md](#8-выгружаем-последнюю-версию-проекта-с-готовым-файлом-readmemd)


----------
#### 1. Создаем проект со следующей структурой
```bash
│   gulpfile.js
│   index.html
│   package-lock.json
│   package.json
│   readme.md
│
├───admin
│       edit_profile.php
│       menu.php
│       sessions.log
│
├───bin
│   │   somefile.txt
│   │
│   └───images
│           bg-img.jpg
│           favicon.ico
│
├───config
│       config.php
│
├───css
│   │   main.sass
│   │   style.css
│   │
│   └───foundation
│           _extends.sass
│           _index.sass
│           _mixins.sass
│           _vars.sass
│
└───js
        index.js
```
--------
#### 2. Подключаем в него Git через терминал
```bash
$ git init
Initialized empty Git repository in C:/Users/user/Documents/rvbbt education/education-itproger/11th-module/.git/
```
--------
#### 3. Игнорируем все файлы с расширением .sass и папки: bin, admin, config
- Создаем файл .gitignore `$ > .gitignore`
- Записываем в него правила игнорирования:
```bash
$ echo "*.sass" > .gitignore
$ echo "bin/" >> .gitignore
$ echo "admin/" >> .gitignore
$ echo "config/" >> .gitignore
```
---------
#### 4. Добавляем все файлы в локальное хранилище
- Добавляем файлы для комита `$ git add .`
- Проверяем статус:
```bash
$ git status
On branch master        

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   css/style.css
        new file:   gulpfile.js
        new file:   index.html
        new file:   js/index.js
        new file:   package-lock.json
        new file:   package.json
        new file:   readme.md
```
- Убираем файл .gitignore `$ git rm --cached .gitignore` и добавляем его в исключения `$ echo ".gitignore" >> .gitignore`
- Снова помечаем файлы для коммита `$ git add .` и проверям:
```bash
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   css/style.css
        new file:   gulpfile.js
        new file:   index.html
        new file:   js/index.js
        new file:   package-lock.json
        new file:   package.json
        new file:   readme.md
```
- Выгружаем в локальный репозиторий:
```bash
$ git commit -m "First version of project."
[master (root-commit) e7aacce] First version of project.
 7 files changed, 6089 insertions(+)
 create mode 100644 css/style.css
 create mode 100644 gulpfile.js
 create mode 100644 index.html
 create mode 100644 js/index.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 readme.md
```
----------
#### 5. Cоздаём новую ветку и переходим в неё
- Создаем ветку `$ git branch blog`
- Переходим в ветку blog
```bash
$ git checkout blog
Switched to branch 'blog'
```
- Проверям на какой ветке находимся
```bash
$ git status
On branch blog
nothing to commit, working tree clean
```
----------
#### 6. Создаем папку blog с файлами: index.js, index.html
- Создаем папку blog `$ mkdir blog`
- Создаем файлы в папке blog:
```bash
$ > blog/index.js
$ > blog/index.html
```
- Загружаем ветку blog в локальный репозиторий
--------
#### 7. Загружаем на удаленный репозиторий лишь основную ветку проекта
- Подключаемся к удаленному репозиторию `$ git remote add origin https://github.com/VladislavSmelov/module11.git`
- Проверяем подключение:
```bash
$ git remote 
origin
```
- Выгружаем на удаленный репозиторий:
```bash
$ git push -u origin master
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (9/9), 56.70 KiB | 4.05 MiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/VladislavSmelov/module11.git
 * [new branch]      master -> master
branch 'master' set up to track 'origin/master'.
```
---------
#### 8. Выгружаем последнюю версию проекта с готовым файлом README.md
- Переходим на master-ветку `$ git checkout master`
- Добавляем файлы к комиту `$ git add .`
- Проверяем статус
```bash

```