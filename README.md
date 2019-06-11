# HTML, CSS, Javascript, jQuery Tutorials

## Git Tutorials
> * 깃(Git), 깃헙(Git Hub) 학습내용 정리
> * 깃 명령어 안내서 참고 https://git-scm.com → Documentation : progit Book (오픈라이센스)

### 깃(Git) 소개
* 기능 : 프로젝트 버전관리 (Version Control System), 백업(Backup), 복구(Recovery), 협업(Collaboration)
* 다양한 버전관리시스템이 있다 (CVS, SVN 등)

### 깃 설치
* 설치 방법 : https://git-scm.com 에서 운영체제에 맞는 다운로드 실행
* https://codeonweb.com 에서 git 설치없이 실습 가능

### 깃 명령어

#### 기본 명령어

$ pwd  현재 나의 디렉토리 위치 확인

$ clear  화면 클리어

$ cd "directory"  해당 폴더로 이동 (change directory)

        [ex] $ cd users
        [ex] $ cd htdocs

$ cd ..  상위 디렉토리로 이동

$ "directory"  현 위치에서 디렉토리(폴더) 생성 → not tried yet.

$ ls -al  현재 디렉토리의 파일목록 보여줌 ※띄어쓰기 주의

$ mkdir "directory"  로컬 디렉토리 생성 (make directory)

        [ex] $ mkdir test

$ git remote add origin "repository url"  원격 저장소 생성

        [ex] $ git remote add origin http://git.aaaaa.git

* 
        * origin: 로컬 디렉토리와 연결된 원격 디렉토리
        [ex] $ git remote add origin master

$ git remote -v  원격 저장소 상세보기

$ git remote --help  원격 저장소 명령어 도움말

$ git remote remove "repository"  원격 저장소 삭제

$ git push -u origin master  푸시 (로컬 → 원격 저장소(origin)의 master branch)
        
        git username, password 입력 후 푸시됨
* 
        [?] $ git push -u origin

$ git clone "repository url" "directory"  로컬 디렉토리 생성 및 원격 저장소를 해당 로컬 디렉토리에 복제

        [ex] $ git clone https://github.com/estellechoi/hello-world.git helloworld_home

* 
        $ git clone "repository url" .  원격 디렉토리를 현위치(로컬)에 복제 ( . ⇒ 현재 디렉토리)


$ git init  깃 이닛 (해당 디렉토리를 버전관리 하겠다)

$ git status  버전관리 여부/상태 확인

        untracked files  → 아직 버전관리를 안했군 ..
  
$ git add  선택된 파일을 커밋 준비 (To get files staged)

        git status 입력 후 확인  → Changes to be committed.
  
$ git config --global user.name "git name"

$ git config --global user.email "git email address"

$ git commit  깃 커밋 (커밋 메세지 입력을 위한 프로그램 실행(vim))

$ git log  버전관리 히스토리 확인

$ git log -p  커밋간 소스 차이 확인


#### 파일 관리

$ vim "file"  vim 프로그램을 이용해서 해당 파일을 생성/편집

        [ex] $ vim f1.txt 
* 
        ☆ vim 명령어
        i (insert)  → 입력 시작
        esc  → 해당 기능 종료
        :  → 입력 완료/저장 (입력시 화면 하단에 보여짐)
        wq + enter  → vim을 종료하고 Git Bash로 복귀

$ cat "file"  해당 파일에 저장된 내용 보기

$ cp "file1" "file2"  파일 복사 (file1 복사 → 새로운 file2 생성)

        ☆ 왜 commit 전에 add를 하는가 ?
        ∵ 원하는 파일만 골라서 커밋하기 위한 커밋 준비 (staged)
        * staged : commit 대기 상태
* 
        ☆ 커밋 아이디(Commit ID) : 커밋마다 부여되는 고유한 ID
           [ex] e71ccbce269730181fb87010caf532c1136f9f7b

#### 커밋 관리

$ git log "Commit ID"  해당 커밋 이전의 히스토리만 확인

$ git diff "Commit ID".."Commit ID"  커밋간의 차이 확인

#### 커밋 취소 (Get back to former version)

$ git reset "Commit ID" --hard  해당 커밋 상태로 초기화 (이후 버전 취소, 취소된 버전 추후 복구 가능)

        soft 등 다른 명령도 있음

$ git revert  ??

$ git commit --help  커밋메세지에 대한 도움말 보기

        [?] $ git commit id -a : 해당 파일이 수정되면 자동으로 add (can commit without add)

$ git commit -am "msg"  수정된 파일 add 및 커밋 (자동 add)

        [ex] $ git commit -am "new version"

### 자주 쓰는 깃 명령어 순위 (Google 검색빈도 순)
  
        $ git commit
        $ git push
        $ git pull
        $ git clone
        $ git checkout
        $ git add
        $ git branch
        $ git log
        $ git diff
        $ git fetch
        $ git merge

### 깃 브랜치 (Branch)

$ git branch  브랜치 현황 보기

        * master : 디폴트 브랜치의 이름 (분기 전)

$ git branch "branch"  입력한 이름의 브랜치 생성

        [ex] $ git branch test
  
$ git checkout "branch"  해당 브랜치로 이동 (체크아웃)

$ git log --branches --decorate  디렉토리 내 모든 브랜치 히스토리 확인 (-- 옵션)

$ git log --branches --decorate --graph  브랜치 히스토리를 그래프로 확인 (언제 분기되어/어디까지 관리됐는지)
  
$ git log --branches --decorate --graph --oneline  브랜치 히스토리를 그래프 한 줄로 확인
  
$ stree  현재 디렉토리를 소스트리(GUI)로 확인 (버전관리 상태 확인)

        [?]
        $ git log 1..2 : 1과 2 브랜치간 차이 보기 (1에는 없고 2에는 있는 것 보기)
        $ git diff 1..2 : 각 브랜치 현상태 비교
        $ git merge 2 : 현재 체크아웃 브랜치에서 2 브랜치를 merge
        $ git branch -d 2 : (현재 체크아웃 브랜치를 두고) 2 브랜치 삭제
        $ git checkout -b 3 : 3 브랜치 (긴급브랜치라고 가정) 생성 및 체크아웃
* 
        * Fast-forwad (빨리감기) : 마스터 브랜치 + 긴급브랜치 병합 (별도의 커밋 X)
        $ git branch -d 3 : 3 브랜치(긴급 브랜치) 삭제

* 
        * recursive : 마스터 브랜치에 변화가 생겼을 때 Fast-forward 불가
        → 공통된 조상 커밋을 두고, 합쳐진 새로운 커밋 생성 !
        → 동일파일 각 브랜치에서 커밋 후 합병시, 충돌 ...
        → 파일 내에서 각 브랜치의 내용 모두 자동으로 합침


### 오픈소스 프로젝트를 나의 로컬 디렉토리로 가져오기

$ git clone "repository url" "directory"  나의 로컬 디렉토리로 원격 저장소(오픈소스 프로젝트) 복제

$ git log --reverse  커밋 로그를 최초순으로 조회

$ git checkout "Commit ID"


### 깃헙 디렉토리 동기화/백업하기

$ git commit --amend  커밋메시지/add 내용 수정  ※ 반드시 푸시 전에만 사용

$ git push  원격 디렉토리로 푸시

$ git pull  원격 디렉토리에 푸시된(저장된) 내용들을 로컬 디렉토리로 풀


### 깃의 원리 (How does Git work ?) : .git 디렉토리에서 일어나는 일

* Gistory 설치 → gttps://www.python.ord 에서 다운로드 (Git Bash에서 바로 설치 가능 → pip install gistory)

        $ gistory : 브라우저에서 http://localhost + 0000 (:0000의 숫자 4개)

* Gistory에서 최근 변경된 파일순으로 표시 (새로 추가된 파일에 대해서는 표시 X)
* git add 완료된 파일 표시 → index 파일, objects/78/.. (object 디렉토리내 78번째 파일)
* 변경된 파일명은 index에서 확인 가능
* 파일의 변경된 내용은 objects/78/.. 에서 확인 가능 * object : 객체 ****** Make branches
