window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    var tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        var target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });


    //timer

    var deadLine = '2020-07-08';
    
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()); // вычисление разницы между сейчас и окончанеим таймера в мили секундах
        var seconds = Math.floor((t/1000) % 60);
        var minutes = Math.floor((t/1000/60) % 60);
        var hours = Math.floor((t/1000/60/60) %  60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }
    

    function setClock(id, endtime) {
        var timer = document.getElementById(id);
        var hours = timer.querySelector('.hours');
        var minutes = timer.querySelector('.minutes');
        var seconds = timer.querySelector('.seconds');
        var timeInterval = setInterval(updataClock, 1000);

        if(hours < 10) {
            hours = '0' + hours;
        }

        function updataClock() {
            var t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                
            }
        }

    }
    
    setClock('timer', deadLine);

    //modal

    var more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    
{/* <input id="age" value="30"> */}
var age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, ['Днищенко', 'Алексей']);



});

