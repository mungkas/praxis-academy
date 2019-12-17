  428  cd /root/praxis-academy/kemampuan-dasar/kemampuan-dasar-2/praxis-academy/
  429  ls
  430  git add all-around-the-mulberry-bush.txt 
  431  ls
  432  git status
  433  git commit -m 'Added all-around-the-mulberry-bush.txt.'
  434  ls
  435  git add jack-and-jill.txt
  436  git commit -m 'Added jack-and-jill.txt.'
  437  git add .
  438  git commit -m 'Added old-mother-hubbard.txt, twinkle-twinkle.txt, hokey-pokey.txt' 
  439  ls
  440  git log
  441  git log --oneline
  442  git log -p
  443  git remote add origin https://github.com/mungkas/praxis-academy.git
  444  git remote rm origin
  445  ls
  446* 
  447  git push -u origin master
  448  ls
  449  git checkout -b hickory-dickory
  450  add hickory-dickory-dock.txt
  451  bash
  452  add hickory-dickory-dock.txt
  453  ls
  454  git commit -m 'Added hickory-dickory-dock.txt.'
  455  git add hickory-dickory-dock.txt
  456  git commit -m 'Added hickory-dickory-dock.txt.'
  457  ls
  458  git push origin hickory-dickory
  459  git remote rename origin alice
  460  git remote add bob https://github.com/mungkas/praxis-academy.git
  461  git remote
  462  git remote -v
  463  git fetch bob
  464  git branch -a
  465  git checkout -b hickory-dickory bob/hickory-dickory
  466  git checkout hickory-dickory bob/hickory-dickory
  467  l
  468  git diff master hickory-dickory
  469  git log -1 -p
  470  git checkout master
  471  git merge hickory-dickory
  472  git branch -D hickory-dickory
  473  git remote rename origin bob
  474  git remove origin
  475  git remote rm origin
  476  git remote rename origin bob 
  477  git remote add alice https://github.com/mungkas/praxis-academy.git
  478  git remote
  479  git remote -v
  480  git remote update
  481  git checkout master
  482  git merge alice/master 
  483  git diff alice/master 
  484  git push bob master 
  485  git checkout -b bobs-changes
  486  wget https://www.acquia.com/sites/default/files/blog/jack-be-nimble.txt
  487  ls
  488  git add jack-be-nimble.txt
  489  ls
  490  git commit -am 'Updated README.txt.'
  491  git diff --word-diff 
  492  git commit -am 'Fixed typo in README.txt.'
  493  ls
  494  git add twinkle-twinkle.txt
  495  git commit -m 'Added twinkle-twinkle.txt.'
  496  git commit -am 'Updated README.txt.'
  497  git log git log --oneline 
  498  git log --oneline 
  499  git log
  500  git rebase -i 4b15370
  501  git rebase
  502  git rebase alice/
  503  git rebase master 
  504  history

