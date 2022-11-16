
    findname = document.getElementsByClassName('FormattedText notranslate FormattedTextWithImage-wrapper lang-fr')[0];
name = findname.textContent;
console.log(name);
//faire stockage variable
chrome.storage.local.set({ key: name }, function () {
    console.log('Value is set to ' + name);
});


