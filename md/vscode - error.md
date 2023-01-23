# EPERM: operation not permitted 에러날때
1. vscode 를 닫는다

2. powershell 을 관리자 권한으로 연다.

3. 바탕화면으로 이동한다.
```
# cd c:\Users\사용자명\Desktop
```
4. npm 캐시를 제거한다
```
# npm cache clean --force
```
5. npm 을 최신버전으로 업데이트한다 - 이건 혹시 몰라서 실행하지 않음.  7번으로 고고.
```
# npm install -g npm@latest --force
```
6. npm 캐시를 다시 제거한다
```
npm cache clean --force
```
7. vscode 를 새로 연다.