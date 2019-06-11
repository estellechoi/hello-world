# HTML, CSS, Javascript, jQuery Tutorials

## Git Tutorials
> 깃(Git), 깃헙(Git Hub) 학습내용 정리
> To be revised

### 깃(Git) 소개
* 기능 : 프로젝트 버전관리 (Version Control System), 백업(Backup), 복구(Recovery), 협업(Collaboration)
* 다양한 버전관리시스템 : CVS, SVN 등

### 깃 설치
* 설치 방법 : https://git-scm.com 에서 운영체제에 맞는 다운로드 실행
* https://codeonweb.com 에서 git 설치없이 실습 가능

### 깃 명령어(Git Commands)

$ pwd : 현재 나의 디렉토리 위치 알려줌

$ cd 폴더명 : 해당 폴더로 이동

$ cd .. : 상위 디렉토리로 이동

$ 폴더명 : 현 위치에서 폴더 생성

$ ls -al : 현재 디렉토리의 파일목록 보여줌 (띄어쓰기 주의)

    $ mkdir 디렉토리명 : 로컬 디렉토리 생성
    $ git remote add origin 깃헙리파지토리주소 : 원격 디렉토리 생성 (디렉토리명 origin)
    (origin: 로컬 디렉토리와 연결된 원격 디렉토리)
    $ git remote -v : 원격 디렉토리 상세보기
    $ git remote --help : 명령어 도움말
    $ git remote remove 저장소이름 : 원격 디렉토리 삭제
    $ git push -u origin master : 푸시 (로컬 → 원격 디렉토리(origin)의 master branch로)
    (git username, password 입력 후 get pushed)
    $ git push -u origin : ?
    $ git clone 원격디렉토리url . : 원격 디렉토리를 현위치(로컬)에 복제 ( . ⇒ 현재 디렉토리)

  $ git init : Wil control versions of this directory

  $ vim f1.txt : vim 프로그램을 이용해 f1.txt 파일을 생성/편집하겠다
  ≫ i (insert) : 입력기능
  ≫ esc : 해당 기능 종료
  ≫ : : 입력내용 저장 ? (입력시 화면 하단에 보여짐)
  ≫ wq (wright, quit) + enter : vim을 종료하고 명령어 입력 화면으로 돌아간다
  $ cat f1.txt : f1.txt 파일에 저장된 내용 보기
  ??? q : 되돌아가기

  $ git status : git init된 파일의 버전관리 여부/상태 확인
  ≫ untracked files ⇒ 버전관리 아직 시작 안했네 ..
  $ git add : Get this file staged to be committed (git에 이 파일을 추적하라 명령)
  ≫ git status 입력 후 확인 Changes to be committed.

  $ git config --global user.name 이름
  $ git config --global user.email 이메일주소

  $ git commit : commit message 입력 화면 (vim 실행)
  $ git log : 버전관리 history 확인
  $ git log -p : commit간 소스 차이 확인

  $ cp f1.txt f2.txt : 파일 복사 (f1.txt와 똑같은 f2.txt 파일을 만든다)

  * 왜 commit 전에 add를 하는가 ?
  ≫ 원하는 파일만 골라서 commit하기 위해 파일 선택 후 add (get staged)
  *stage area : commit 대기 상태

  * "Commit Id" 예시 ≫ e71ccbce269730181fb87010caf532c1136f9f7b (해당 commit의 고유한 id)

  $ git log "Commit Id" : 해당 commit 이전의 history만 보기

  $ git diff "Commit Id".."Commit Id" : commit간의 차이 보기

  * 이전 버전으로 돌아가기 ! (commit 취소하기)
  $ git reset "Commit Id" --hard : 해당 커밋 상태로 초기화 (이후 ver 취소 / 추후 복구 가능)
  * soft 등 다른 명령도 있음

  $ git revert : ??

  $ git commit --help : commit message에 대한 도움말 보기

  $ git commit id -a : 해당 파일이 수정되었을 때 자동으로 add (can commit without add)

  $ git commit -am "msg" : 자동 add + commit msg 창 켜지 않고 "msg" 메세지와 함께 커밋

  * 자주 쓰는 Git Bash Command(명령어) 순위 (Google 검색빈도 순)
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

  * How does Git work ? (Git의 원리) ⇒ .git 디렉토리에서 일어나는 일

  Gistory 설치 → gttps://www.python.ord 에서 다운로드
  (git bash에서 바로 설치 가능 → pip install gistory)
  $ gistory : 브라우저에서 http://localhost + 0000 (:0000의 숫자 4개)
  최근 변경된 파일이 가장 위에 표시 (새로운 파일 추가에 대해서는 표시X)
  git add 후 파일 표시 → index 파일, objects/78/.. (object 디렉토리내 78번째 파일)
  변경된 파일명은 index에서 확인 가능
  파일의 변경된 내용은 objects/78/.. 에서 확인 가능 * object : 객체 ****** Make branches

  $ git branch : 브랜치 현황 보기
  * master : 현재 브랜치 이름은 master 이다.
  $ git branch "branch name"
  $ git checkout "branch name" : 해당 브랜치로 이동 및 체크아웃

  $ clear : 화면 clear

  $ git log --branches --decorate : 디렉토리 내 모든 branch log 보기 (-- 옵션)
  q : 나가기
  $ git log --branches --decorate --graph : 브랜치간 상태 그래프 (언제 분기되어/어디까지 관리됐는지)
  $ git log --branches --decorate --graph --oneline : 한 줄로 보기
  $ stree : 현 디렉토리가 소스트리(GUI)로 나타남 (버전관리 상태가 나타남)
  $ git log 1..2 : 1과 2 브랜치간 차이 보기 (1에는 없고 2에는 있는 것 보기)
  $ git diff 1..2 : 각 브랜치 현상태 비교
  $ git merge 2 : 현재 체크아웃 브랜치에서 2 브랜치를 merge
  $ git branch -d 2 : (현재 체크아웃 브랜치를 두고) 2 브랜치 삭제

  * Git 명령어 확인
  https://git-scm.com / documentation : progit 북 (오픈라이센스)

  $ git checkout -b 3 : 3 브랜치 (긴급브랜치라고 가정) 생성 및 체크아웃

  * Fast-forwad (빨리감기) : 마스터 브랜치 + 긴급브랜치 병합 (별도의 커밋 X)
  $ git branch -d 3 : 3 브랜치(긴급 브랜치) 삭제

  * recursive : 마스터 브랜치에 변화가 생겼을 때 Fast-forward 불가
  → 공통된 조상 커밋을 두고, 합쳐진 새로운 커밋 생성 !
  → 동일파일 각 브랜치에서 커밋 후 합병시, 충돌 ...
  → 파일 내에서 각 브랜치의 내용 모두 자동으로 합침

  * 오픈소스를 내 디렉토리로 가져오기
  $ git clone "디렉토리url" "로컬디렉토리명" : 로컬 디렉토리로 원격 디렉토리 복제
  $ git log --reverse : 깃의 로그를 최초순으로 조회
  $ git checkout "Commit Id"

  * 깃헙 디렉토리 동기화/백업하기
  $ git commit --amend : commit msg 또는 add 내용 수정
  $ git push : 원격 디렉토리로 푸시
  $ git pull : 원격 디렉토리에 푸시된(저장된) 내용들을 로컬 디렉토리로 풀
