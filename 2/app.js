    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    var hand = document.querySelectorAll('.hand');
    // var hand = document.getElementsByClassName('hand');

    
    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minsHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        // console.log(secondsDegrees + ' ' + seconds)

        if (seconds == 0) {
            for (var i = 0; i < hand.length; i++) {
                hand[i].classList.add('notransition');
            }
        }
        if (seconds == 1) {

            for (var i = 0; i < hand.length; i++) {
                hand[i].classList.remove('notransition');
            }
        }

    }

    setInterval(setDate, 1000);