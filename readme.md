# Goal
The aim is to have a super simple website that provides no fuss no muss and clear access to an online viewable pdf flipbook and downladable pdfs to print.

# Current Issues

# User Experience
## If People click, they are curious about the content. but when they click it, they suddenly have to think about file formats (online or pdf), something they really dont care about at that moment. Then they have to do another click before they get the content they actually wanted. As a user, i would be more intrigued by a button that says "discover more" than by two buttons saying 'view online' and 'Download to print'. I also dont think its a relevant choice to give at that point. I dont think anybody wants to 'download to print' something they havent seen. Its linear; everyone who clicks wants to see the content online first, and from there maybe download/print/share. Id recommend:
## either get rid of the popup entirely and take the user straight to the online version which should provide a link to download the pdf.
## or, especially if each icon has a lot of content behind it, keep the popup but use it to give the user an overview of what this book is about in addition to a button that leads to the online view. 

## Visual
### dont understand / clarify please. you want it to exand? it does but it shouldnt? what do you mean by expand into center?---->>> pop-up boxes (.selected) to seem to expand into centre - jQuery slide-toggle?
## Functional
### Online pdf viewing
#### free option: http://mozilla.github.io/pdf.js/web/viewer.html
#### almost all browser have built in pdf viewers, so you might not need both options. e.g. in chrome, a link to a pdf opens the pdf in the browser, from where you can save it locally if you want. in that case both links would do more or less the same. If you relied on that you would even save us and the user the popup entirely. Basically we could make the original icon simply open the pdf in a new window directly
#### if you want one anyway, an online pdf viewer should be no problem. From a UI perspective I think you would want it full screen no? maybe with the other icons small on top like a small navigation to switch between pdfs?
#### depends on the pdfs, but probably the best solution would be to remake the pdfs in html... pdf is made for print, if the exact layout is not important it would make a lot of sense to redo their content in html. Much better for people who just want to have a look, especially on mobile. but again, depends on the content 


## Other
