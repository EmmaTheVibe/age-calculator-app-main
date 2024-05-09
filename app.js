const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth() + 1
const currentDay = new Date().getDate()
const form = document.querySelector('.info')
const displayYrs = document.querySelector('.yrs')
const displayMnth = document.querySelector('.mths')
const displayDay = document.querySelector('.dy')
const dashes = document.querySelectorAll('.dash')
const inputs = document.querySelectorAll('input')
const tags = document.querySelectorAll('.tag')
const errors = document.querySelectorAll('.error')
const dayErr = document.querySelector('.dayErr')
const yearErr = document.querySelector('.yearErr')
const monthErr = document.querySelector('.monthErr')
const day = document.querySelector('#day')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const dayTag = document.querySelector('.dayTag')
const yearTag = document.querySelector('.yearTag')
const monthTag = document.querySelector('.monthTag')

form.addEventListener('submit', function(submit){
    submit.preventDefault()
    const dayInput = document.querySelector('#day').value
    const monthInput = document.querySelector('#month').value
    const yearInput = document.querySelector('#year').value

    const dayVal = parseInt(dayInput)
    const monthVal = parseInt(monthInput)
    const yearVal = parseInt(yearInput)

    let dateExists = false
    let dateValid = false

    function isDateValid () {
        console.log('isDateValid ran')
        let dayEmpty = true
        let dayValid = false
        function isDayEmpty () {
            if (dayInput.length === 0) {
                dayTag.classList.add('errorTag')
                day.classList.add('errorInput')
                dayErr.style.opacity = '1'
                dayErr.innerText = 'This field is required'
                console.log('day empty')
                return true
            } else {
                if (dayTag.classList.contains('errorTag')){
                        dayTag.classList.remove('errorTag')
                        day.classList.remove('errorInput')
                        dayErr.style.opacity = '0'
                }

                function isDayValid () {
                    if(dayVal > 31 || dayVal<0){
                        dayTag.classList.add('errorTag')
                        day.classList.add('errorInput')
                        dayErr.style.opacity = '1'
                        dayErr.innerText = 'Must be a valid day'
                        console.log('day invalid')
                        return false
                    } else {
                        dayValid = true
                        console.log('day valid')
                        console.log(dayValid)
                        return true
                    }
                }

                dayEmpty = false
                isDayValid()
                console.log ('day not empty')
                return false
            }
        }
        isDayEmpty()
        
        let monthEmpty = true
        let monthValid = false
        function isMonthEmpty () {
            if (monthInput.length === 0) {
                monthTag.classList.add('errorTag')
                month.classList.add('errorInput')
                monthErr.style.opacity = '1'
                monthErr.innerText = 'This field is required'
                console.log('month empty')
                return true
            } else {
                if (monthTag.classList.contains('errorTag')){
                    monthTag.classList.remove('errorTag')
                    month.classList.remove('errorInput')
                    monthErr.style.opacity = '0'
                }

                function isMonthValid () {
                    if(monthVal > 12 || monthVal< 0){
                        monthTag.classList.add('errorTag')
                        month.classList.add('errorInput')
                        monthErr.style.opacity = '1'
                        monthErr.innerText = 'Must be a valid month'
                        console.log('month invalid')
                        return false
                    } else {
                        console.log('month valid')
                        monthValid = true
                        return true
                    }
                }

                console.log('month not empty')
                isMonthValid()
                monthEmpty = false
                return false
            }
        }
        isMonthEmpty()
        
        let yearEmpty = true
        let yearValid = false
        function isYearEmpty () {
            if (yearInput.length === 0) {
                yearTag.classList.add('errorTag')
                year.classList.add('errorInput')
                yearErr.style.opacity = '1'
                yearErr.innerText = 'This field is required'
                console.log('year empty')
                return true
            } else {
                if (yearTag.classList.contains('errorTag')){
                    yearTag.classList.remove('errorTag')
                    year.classList.remove('errorInput')
                    yearErr.style.opacity = '0'
                }
                function isYearValid () {
                    if(yearVal<0){
                        yearTag.classList.add('errorTag')
                        year.classList.add('errorInput')
                        yearErr.style.opacity = '1'
                        yearErr.innerText = 'Must be a valid year'
                        console.log('year invalid')
                        return false
                    } else {
                        console.log('year valid')
                        yearValid = true
                        return true
                    }
                }
                console.log('year not empty')
                isYearValid()
                yearEmpty = false
                return false
            }
        }
        isYearEmpty()

        function isPast () {
            if(
                dayVal>currentDay && monthVal>=currentMonth && yearVal>=currentYear
                ||yearVal>currentYear
            ){
                inputs.forEach(input => {
                    input.classList.add('errorInput')
                })
                tags.forEach(tag => {
                    tag.classList.add('errorTag')
                })
                yearErr.style.opacity = '1'
                yearErr.innerText = 'Must be in the past'
                console.log('date in future')
                yearValid = false 
                return false
            } else {
                if (yearTag.classList.contains('errorTag')){
                    inputs.forEach(input => {
                        input.classList.remove('errorInput')
                    })
                    tags.forEach(tag => {
                        tag.classList.remove('errorTag')
                    })
                    yearErr.style.opacity = '0'
                }
                return true
            }
        }
        if(dayValid && monthValid && yearValid) {
            console.log('is past running')
            isPast()
        }
        if(dayValid && monthValid && yearValid){
            dateValid = true
            console.log('WHOLE DATE VALID')
        }
    }
    
    isDateValid()
    if(dateValid){
        function doesDateExist () {
            if(
                monthVal == 4  && dayVal>30
            || monthVal == 6 && dayVal>30
            || monthVal == 9 && dayVal>30
            || monthVal == 11 && dayVal>30
            || monthVal == 2 && dayVal>29
            ){
                console.log('DATE DOES NOT EXIST')
                inputs.forEach(input => {
                    input.classList.add('errorInput')
                })
                tags.forEach(tag => {
                    tag.classList.add('errorTag')
                })
                dayErr.style.opacity = '1'
                dayErr.innerText = 'Date must be valid'
                return false
            } 
            else {
                if (dayTag.classList.contains('errorTag')){
                    inputs.forEach(input => {
                        input.classList.remove('errorInput')
                    })
                    tags.forEach(tag => {
                        tag.classList.remove('errorTag')
                    })
                    dayErr.style.opacity = '0'

                }
                console.log('DATE EXISTS')
                dateExists = true
                return true
            }
        }
        console.log('doesDateExist running')
        doesDateExist()
    }
    console.log(dateValid)
    
    function calcAge(){
        let calcYear = currentYear - yearVal
        let calcDay = currentDay - dayVal
        let calcMonth = currentMonth - monthVal
        if(yearVal <= currentYear) {
            if (dayVal > currentDay) {
                calcDay = currentDay - dayVal + 30
                calcMonth = currentMonth - monthVal - 1 
            }
            if (monthVal > currentMonth) {
                calcMonth = currentMonth - monthVal + 12
                calcYear = currentYear - yearVal - 1 
            }
            if (monthVal >= currentMonth && dayVal > currentDay) {
                calcMonth = currentMonth - monthVal + 11
                calcYear = currentYear - yearVal - 1 
                calcDay = currentDay - dayVal + 30
            }
        }
        dashes.forEach(dash => {
            dash.style.display = 'none'
        })

        displayDay.style.setProperty('--dayNum', 0)
        displayDay.style.display = 'unset'

        displayMnth.style.setProperty('--mthNum', 0)
        displayMnth.style.display = 'unset'

        displayYrs.style.setProperty('--yrNum', 0)
        displayYrs.style.display = 'unset'

        setTimeout(() => {
            displayDay.style.setProperty('--dayNum', calcDay)
            displayMnth.style.setProperty('--mthNum', calcMonth)
            displayYrs.style.setProperty('--yrNum', calcYear)
        }, 100);
    }
    if(dateExists) {
        calcAge()
    }
})