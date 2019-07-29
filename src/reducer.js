const drinkState = [
    {
        id: '1',
        name: 'モンスターエナジー（日本）',
        capa: 355,
        cal: 178,
        caffeine: 142
    },
    {
        id: '2',
        name: 'モンスターエナジー（米）',
        capa: 473,
        cal: 210,
        caffeine: 160
    },
    {
        id: '3',
        name: 'モンスターエナジー M3',
        capa: 150,
        cal: 66,
        caffeine: 150
    },
    {
        id: '4',
        name: 'レッドブル（日本）',
        capa: 185,
        cal: 85,
        caffeine: 80
    },
    {
        id: '5',
        name: 'レッドブル（米国）',
        capa: 250,
        cal: 110,
        caffeine: 80
    },
    {
        id: '6',
        name: 'ロックスターエナジー（日本）',
        capa: 250,
        cal: 145,
        caffeine: 120
    },
    {
        id: '7',
        name: 'ロックスターエナジー（米）',
        capa:　473,
        cal: 280,
        caffeine: 160
    },
    {
        id: '8',
        name: 'コカ･コーラ エナジー',
        capa:　250,
        cal: 105,
        caffeine: 80
    },
    {
        id: '9',
        name: 'エナジードリンク（西友）',
        capa:　250,
        cal: 128,
        caffeine: 160
    },
    {
        id: '10',
        name: 'ブラックアウトゼロ',
        capa:　500,
        cal: 0,
        caffeine: 175
    },
    {
        id: '11',
        name: 'ブラックアウトゴッド',
        capa:　250,
        cal: 148,
        caffeine: 160
    },
    {
        id: '12',
        name: 'エナジーハンター',
        capa:　300,
        cal: 162,
        caffeine: 195
    }
];

export default function reducer(state = drinkState, action) {
    switch(action.type) {
        default:
            return state;
    }
}