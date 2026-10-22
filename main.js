const zodiac_signs = [
    {
        name: 'Capricorn',
        start_month: 12,
        start_day: 22,
        end_month: 1,
        end_day: 19,

        sound: 'Capricorn Sound',
        image: 'Capricorn Image',
        text: 'Capricorn Text'
    },
    {
        name: 'Aquarius',
        start_month: 1,
        start_day: 20,
        end_month: 2,
        end_day: 18,

        sound: 'Aquarius Sound',
        image: 'Aquarius Image',
        text: 'Aquarius Text'
    },
    {
        name: 'Pisces',
        start_month: 2,
        start_day: 19,
        end_month: 3,
        end_day: 20,

        sound: 'Pisces Sound',
        image: 'Pisces Image',
        text: 'Pisces Text'
    },
    {
        name: 'Aries',
        start_month: 3,
        start_day: 21,
        end_month: 4,
        end_day: 19,

        sound: 'Aries Sound',
        image: 'Aries Image',
        text: 'Aries Text'
    },
    {
        name: 'Taurus',
        start_month: 4,
        start_day: 20,
        end_month: 5,
        end_day: 20,

        sound: 'Taurus Sound',
        image: 'Taurus Image',
        text: 'Taurus Text'
    },
    {
        name: 'Gemini',
        start_month: 5,
        start_day: 21,
        end_month: 6,
        end_day: 20,

        sound: 'Gemini Sound',
        image: 'Gemini Image',
        text: 'Gemini Text'
    },
    {
        name: 'Cancer',
        start_month: 6,
        start_day: 21,
        end_month: 7,
        end_day: 22,

        sound: 'Gemini Sound',
        image: 'Gemini Image',
        text: 'Gemini Text'
    },
    {
        name: 'Leo',
        start_month: 7,
        start_day: 23,
        end_month: 8,
        end_day: 22,

        sound: 'Leo Sound',
        image: 'Leo Image',
        text: 'Leo Text'
    },
    {
        name: 'Virgo',
        start_month: 8,
        start_day: 23,
        end_month: 9,
        end_day: 22,

        sound: 'Virgo Sound',
        image: 'Virgo Image',
        text: 'Virgo Text'
    },
    {
        name: 'Libra',
        start_month: 9,
        start_day: 23,
        end_month: 10,
        end_day: 22,

        sound: 'Libra Sound',
        image: 'Libra Image',
        text: 'Libra Text'
    },
    {
        name: 'Scorpio',
        start_month: 10,
        start_day: 23,
        end_month: 11,
        end_day: 21,

        sound: 'Scorpio Sound',
        image: 'Scorpio Image',
        text: 'Scorpio Text'
    },
    {
        name: 'Sagittarius',
        start_month: 11,
        start_day: 22,
        end_month: 12,
        end_day: 21,

        sound: 'Sagittarius Sound',
        image: 'Sagittarius Image',
        text: 'Sagittarius Text'
    },
    
];

function get_birthday(month, day) {
    for (const Birthdate of zodiac_signs) {
        const user_start_month = month === Birthdate.start_month && day >= Birthdate.start_day
        const user_end_month = month === Birthdate.end_month && day <= Birthdate.end_day

        if (user_start_month || user_end_month) {
            return Birthdate
        }
    }
}


function play_sound(sign) {
    console.log(sign.sound);
}

function play_img(sign) {
    console.log(sign.image);
}

function play_text(sign) {
    console.log(sign.text);
}

play_sound(zodiac_signs[0]);

function all_signs() {
    for (const Birthdate of zodiac_signs) {
        console.log(`${Birthdate.name}`)
    }
}
console.log(all_signs);