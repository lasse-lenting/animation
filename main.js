const $ = (s, o = document) => o.querySelector(s);

const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(button => {

    let count = {

            number: 0

        },

        icon = $('.icon', button),

        iconDiv = $('.icon > div', button),

        arrow = $('.icon .arrow', button),

        countElem = $('span', button),

        svgPath = new Proxy({

            y: null,

            s: null,

            f: null,

            l: null

        }, {

            set(target, key, value) {

                target[key] = value;

                if(target.y !== null && target.s != null && target.f != null && target.l != null) {

                    arrow.innerHTML = getPath(target.y, target.f, target.l, target.s, null);

                }

                return true;

            },

            get(target, key) {

                return target[key];

            }

        });

 
