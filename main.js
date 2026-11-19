/* Sign Audio Objs */
const capricorn_sound = new Audio('sound/zodiac-sound-1.mp3');
const aquarius_sound = new Audio('sound/zodiac-sound-2.mp3');
const pisces_sound = new Audio('sound/zodiac-sound-3.mp3');
const aries_sound = new Audio('sound/zodiac-sound-4.mp3');
const taurus_sound = new Audio('sound/zodiac-sound-5.mp3');
const gemini_sound = new Audio('sound/zodiac-sound-6.mp3');
const cancer_sound = new Audio('sound/zodiac-sound-7.mp3');
const leo_sound = new Audio('sound/zodiac-sound-8.mp3');
const virgo_sound = new Audio('sound/zodiac-sound-9.mp3');
const libra_sound = new Audio('sound/zodiac-sound-10.mp3');
const scorpio_sound = new Audio('sound/zodiac-sound-11.mp3');
const sagittarius_sound = new Audio('sound/zodiac-sound-12.mp3');

const all_sounds = [
    capricorn_sound,
    aquarius_sound,
    pisces_sound,
    aries_sound,
    taurus_sound,
    gemini_sound,
    cancer_sound,
    leo_sound,
    virgo_sound,
    libra_sound,
    scorpio_sound,
    sagittarius_sound,
]

/* Stop Sounds Function */
function stop_sounds() {
    for (const sound of all_sounds) {
        sound.pause();
        sound.currentTime = 0;
    }
}

const zodiac_signs = [
    {
        name: 'Capricorn',
        start_month: 12,
        start_day: 22,
        end_month: 1,
        end_day: 19,

        sound: capricorn_sound,
        image: 'Capricorn Image',
        text: 'Capricorn Text'
    },
    {
        name: 'Aquarius',
        start_month: 1,
        start_day: 20,
        end_month: 2,
        end_day: 18,

        sound: aquarius_sound,
        image: 'Aquarius Image',
        text: 'Aquarius Text'
    },
    {
        name: 'Pisces',
        start_month: 2,
        start_day: 19,
        end_month: 3,
        end_day: 20,

        sound: pisces_sound,
        image: 'Pisces Image',
        text: 'Pisces Text'
    },
    {
        name: 'Aries',
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,

        sound: aries_sound,
        image: 'Aries Image',
        text: 'Aries Text'
    },
    {
        name: 'Taurus',
        start_month: 4,
        start_day: 20,
        end_month: 5,
        end_day: 20,

        sound: taurus_sound,
        image: 'Taurus Image',
        text: 'Taurus Text'
    },
    {
        name: 'Gemini',
        start_month: 5,
        start_day: 21,
        end_month: 6,
        end_day: 20,

        sound: gemini_sound,
        image: 'Gemini Image',
        text: 'Gemini Text'
    },
    {
        name: 'Cancer',
        start_month: 6,
        start_day: 21,
        end_month: 7,
        end_day: 22,

        sound: cancer_sound,
        image: 'Gemini Image',
        text: 'Gemini Text'
    },
    {
        name: 'Leo',
        start_month: 7,
        start_day: 23,
        end_month: 8,
        end_day: 22,

        sound: leo_sound,
        image: 'Leo Image',
        text: 'Leo Text'
    },
    {
        name: 'Virgo',
        start_month: 8,
        start_day: 23,
        end_month: 9,
        end_day: 22,

        sound: virgo_sound,
        image: 'Virgo Image',
        text: 'Virgo Text'
    },
    {
        name: 'Libra',
        start_month: 9,
        start_day: 23,
        end_month: 10,
        end_day: 22,

        sound: libra_sound,
        image: 'Libra Image',
        text: 'Libra Text'
    },
    {
        name: 'Scorpio',
        start_month: 10,
        start_day: 23,
        end_month: 11,
        end_day: 21,

        sound: scorpio_sound,
        image: 'Scorpio Image',
        text: 'Scorpio Text'
    },
    {
        name: 'Sagittarius',
        start_month: 11,
        start_day: 22,
        end_month: 12,
        end_day: 21,

        sound: sagittarius_sound,
        image: 'Sagittarius Image',
        text: 'Sagittarius Text'
    },
    
];

/* HTML --> JS */
const month_input = document.querySelector("#month");
const day_input = document.querySelector("#day");
const submit_form = document.querySelector("#submit_form");
const art_display = document.querySelector("#art_display");

/* Turn month_input & day_input into value (event handler) */
function user_birthday(event) {
    event.preventDefault();
    const month = Number(month_input.value);
    const day = Number(day_input.value);
    const painting = compare_birthday(month, day);

    console.log(painting);

    const result = document.createElement('h1');
    result.textContent = painting.name;
    art_display.appendChild(result);
    stop_sounds();
    painting.sound.play();
}

/* Listens for submit button to be pressed (event listener) */
submit_form.addEventListener('submit',user_birthday);

/* Loop to match input date agaisnt start_month & start_day... */
function compare_birthday(month, day) {
    for (const Birthdate of zodiac_signs) {
        const user_start_month = month === Birthdate.start_month && day >= Birthdate.start_day
        const user_end_month = month === Birthdate.end_month && day <= Birthdate.end_day

        if (user_start_month || user_end_month) {
            return Birthdate
        }
    }
}

for (const sign of zodiac_signs) {
    const button = document.createElement('button');
    button.textContent = sign.name;

    button.addEventListener('click', function() {
        stop_sounds();
        sign.sound.play();
    });

    art_display.appendChild(button);
}

/* Painting Interaction Function */
function play_sound(sign) {
    console.log(sign.sound);
}
function play_img(sign) {
    console.log(sign.image);
}
function play_text(sign) {
    console.log(sign.text);
}
/* 
function all_signs() {
    for (const Birthdate of zodiac_signs) {
        console.log(`Your birthdate is ${Birthdate.name}`)
        const li = document.createElement('li');
        li.textContent = `${Birthdate.name}`;
        art_display.appendChild(li);
    }
}
all_signs() */