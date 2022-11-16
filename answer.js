chrome.storage.local.get(['mykey'], function (result) {
    answer = result.mykey;
    findname0 = document.getElementsByClassName('c1sj1twu')[1];
    name0 = findname.textContent;
    findname1 = document.getElementsByClassName('c1sj1twu')[2];
    name1 = findname1.textContent;
    findname2 = document.getElementsByClassName('c1sj1twu')[3];
    name2 = findname2.textContent;
    findname3 = document.getElementsByClassName('c1sj1twu')[4];
    name3 = findname3.textContent;
    console.log(answer);
    if (answer == name0) {
        console.log(name3);
        document.getElementsByClassName('c1sj1twu')[1].click(); setTimeout(function () {
            document.getElementsByClassName('AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding')[0].click()
        }, 120);
    }
    else if (answer == name1) {
        console.log(name3);
        document.getElementsByClassName('c1sj1twu')[2].click(); setTimeout(function () {
            document.getElementsByClassName('AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding')[0].click()
        }, 120);
    }
    else if (answer == name2) {
        console.log(name3);
        document.getElementsByClassName('c1sj1twu')[3].click(); setTimeout(function () {
            document.getElementsByClassName('AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding')[0].click()
        }, 120);
    }
    else if (answer == name3) {
        console.log(name3);
        document.getElementsByClassName('c1sj1twu')[4].click(); setTimeout(function () {
            document.getElementsByClassName('AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding')[0].click()
        }, 120);
        
    }
}); setTimeout(function () {
    document.getElementsByClassName('AssemblyButtonBase AssemblyPrimaryButton--default AssemblyButtonBase--large AssemblyButtonBase--padding')[0].click()
}, 320);
