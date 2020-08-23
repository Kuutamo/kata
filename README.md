# Katat - Number to LCD

Päätin toteuttaa tämän Nuxtilla ihan siksi, että olen frameworkia käyttänyt viime aikoina paljon. Kyseessähän on Vuelle toteutettu Gatsbyn (React) korvike, jonka kanssa saa rendattua niin SSR:ää hakukoneiden iloksi, sillä luonnostaan Vue ei ko. ominaisuutta tarjoa. 

Käytännössähän tämän kokoinen demo ei vaadi mitään näin isoa ympärilleen, mutta päätin esitellä ehkä peruscasen ratkaisuani.

`/dist` -kansiosta löytyy build.

## Rakenteesta

```bash
-| components/LCDnum.vue -> komponentti numeroiden muodostukseen
-| pages/index.vue -> sivu, jossa käsitellään lomake, kutsutaan komponentit yms.
-| assets/main.scss -> tyylit
```

### tyylit

`lcd` prefixillä varustetut luokat ovat customeita
css-frameworkina bootstrap

`ui` prefix on ui:n ja lomakkeen elementeille

### Kritiikki

Vaikka numeroiden muodostus on nyt ajettu yhteen komponenttiin, parempi tuotantoversio saattaisi olla sellainen, jossa jokainen numero olisi oma komponenttinsa. Silloin koodi voisi olla luettavampaa, vaikka toistoa olisikin. Numeroiden käsittely olisi yksinkertaisempaa. Mutta tosiaan, tämä tarve on projektikohtainen ja riippuu aina tilanteesta, mikä on turhaa.

En myöskään koodannut erillistä validaattoria numeroilla, vaan yksinkertaisesti ignoraan, jos käyttäjä syöttää muita merkkejä `Tarjoa numerot` -kenttään, kuin positiivisia digiteja.

## Build Setup

Heitin mukaan lintti-conffit ja buildin ihan siksi, jos joku haluaa käynnistää softan. Pelkän koodin ihmettelyn lisäksi. `/dist` -kansio sisältää buildin.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

Jos kaipaa nähdä jotain spesifimpää kataa tai muuta koodia, huudelkaa ihmeessä! Palailen arkeen joka tapauksessa.