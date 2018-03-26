var initialHeight = '0px';
const mq = window.matchMedia( "(min-width: 481px)" );

function refreshPage(){ // Window Resizing makes new page dimentions
    if (mq.matches) {
        window.location.href = window.location.href;
        } 
    else {
      // window width is less than 481px
        }
    }

function openTab(evt, tabName) {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code for when site is visited from a mobile devices
        }
	// Close the NavigationTab if viewed from a small device
	if (!mq.matches) {
        closeNav(); 
        }

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent"); // Will hide all the tab_content sections
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    	}
    tablinks = document.getElementsByClassName("tablinks");     // Will set as 'inactive' all tab_links
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(tabName).style.display = "block";   // Will show only the tab clicked
    evt.currentTarget.className += " active";                   // Will set the selected tablink as active
    var pageHeight = initialHeight+'px';

    var newPageHeight = 0;
    if(tabName ==='vocabulary'){
        newPageHeight = document.getElementById('vocabulary_frame').contentWindow.document.body.offsetHeight+20;
        document.getElementById('vocabulary_frame').style.height = newPageHeight+'px';
        }
    if(tabName =='notes'){
        newPageHeight = document.getElementById('notes_frame').contentWindow.document.body.offsetHeight+20;
        document.getElementById('notes_frame').style.height = newPageHeight+'px';
        }
    if(tabName =='phrases'){
        newPageHeight = document.getElementById('phrases_frame').contentWindow.document.body.offsetHeight+20;
        document.getElementById('phrases_frame').style.height = newPageHeight+'px';
        }

    pageHeight = newPageHeight+50;

    document.body.style.height = pageHeight+'px';
    }


function openNav() {
    document.getElementById("sidenav_div").style.display = "block";
    document.getElementById("sidenav_open").style.display = "none";
    }

function closeNav() {
	document.getElementById("sidenav_div").style.display = "none";
	document.getElementById("sidenav_open").style.display = "block";
    }

