(function( gmbadger, $, undefined ) {
    var config = {
        'base_url' : '',
        'base_path' : 'images/',
        'lang' : 'ru',
        /* embedded - build image list based on embedded images, url - based on urls */
        'method_list' : 'url', // method for building images list
        'method_output' : 'url', // method for output images list
        'list_urlprefix' : '',
        'out_urlprefix' : ''
    };
    var config_langs = {
        'en' : 'English',
        'ru' : 'Русский'
    };
    var help_hints = {
        'ru' : 'Кликая на кнопочки, выберите свои бейджики. Выделите весь текст в окне результата, скопируйте и вставьте в блог, профиль или куда вам заблагорассудится :) ',
        'en' : 'Select your GM badges, then select all text in `result` window, press <strong>Ctrl-C</strong> to copy and paste to your blog, profile and so on. Sorry for poor english.'
    };
    var aspect_story = {
        'story' : {
            'url'     :   'story.jpg',
            'ru'      :   'В моих играх есть СЮЖЕТ.',
            'en'      :   'My games will tell an interesting Story'
        },
        'scary' : {
            'url'     :   'scary.jpg',
            'ru'      :   'Мои игры бывают СТРАШНЫМИ.',
            'en'      :   'My games will be Scary'
        },
        'mystery' : {
            'url'     :   'mystery.jpg',
            'ru'      :   'На моих играх часто ИССЛЕДУЮТ и РАЗГАДЫВАЮТ ЗАГАДКИ.',
            'en'      :   'My games focuses on Exploration & Mystery'
        },
        'gonzo' : {
            'url'     :   'gonzo.jpg',
            'ru'      :   'На моих играх много СТРАННОГО.',
            'en'      :   'My games are Gonzo and can include a lot of strangeness'
        },
        'fate' : {
            'url'     :   'fate.jpg',
            'ru'      :   'Персонажи в моих играх — герои, им суждены великие свершения, и их смерть не бывает случайной.',
            'en'      :   'Characters in my games are Destined for greatness, not random death'
        },
        'disturbing' : {
            'url'     :   'disturbing.jpg',
            'ru'      :   'Игры для ВЗРОСЛЫХ.',
            'en'      :   'My games include Disturbing content'
        },
        'drama' : {
            'url'     :   'drama.jpg',
            'ru'      :   'В моих играх интересные ПЕРСОНАЖИ и СЮЖЕТЫ. ',
            'en'      :   'My games focus on interesting Characters and Drama.'
        },
        'beerpretzels' : { // http://en.wikipedia.org/wiki/Beer_and_pretzels_game
            'url'     :   'beerpretzels.jpg',
            'ru'      :   'ЧИПСЫ и ПИВО — важный аспект моих игр. ',
            'en'      :   'My games are more of the Social, Fun and «Beer & Pretzels» style'
        },
        'safe' : {
            'url'     :   'safe.jpg',
            'ru'      :   'На моих играх не бывает НЕПРИЯТНЫХ СЮРПРИЗОВ. ',
            'en'      :   'My games are Safe and you don`t need to worry about content or character death'
        }
    };
    var aspect_mechanic = {
        'brain' : {
            'url'     :   'brain.jpg',
            'ru'      :   'Успех зависит от ИГРОКА, а не ПЕРСОНАЖА. ',
            'en'      :   'My game focuses on Player Skill rather than character abilities'
        },
        'peace' : {
            'url'     :   'peace.jpg',
            'ru'      :   'Мне ближе СОЦИАЛКА, чем БОЕВКА. ',
            'en'      :   'My game is primarily Non-Combat in nature'
        },
        'sharegm' : {
            'url'     :   'sharegm.jpg',
            'ru'      :   'Я делю роль мастера с игроками. ',
            'en'      :   'My game has Shared GMing responsibility with the other players'
        },
        'dice' : {
            'url'     :   'dice.jpg',
            'ru'      :   'Я не прячу дайсы за ширмой и с результатами не мухлюю.',
            'en'      :   'I roll Dice in the open and don`t fudge the results in my games'
        },
        'bythebook' : {
            'url'     :   'bythebook.jpg',
            'ru'      :   'На моих играх нет места ХОУМРУЛАМ и мастерскому произволу',
            'en'      :   'I play By-The-Book and «rule-zero» is not being used to alter existing rules'
        },
        'tinker' : {
            'url'     :   'tinker.jpg',
            'ru'      :   'На моих играх часто используются ХОУМРУЛЫ.',
            'en'      :   'I frequently Tinker with the rules of the game'
        },
        'tactics' : {
            'url'     :   'tactics.jpg',
            'ru'      :   'Тактика — важная составляющая моих игр. ',
            'en'      :   'Tactics are an important part of my games'
        },
        'run' : {
            'url'     :   'run.jpg',
            'ru'      :   'На моих играх иногда лучше БЕЖАТЬ, чем ГОВОРИТЬ. ',
            'en'      :   'Players in my game should be prepared to Run when the odds are against them'
        },
        'pvp' : {
            'url'     :   'pvp.jpg',
            'ru'      :   'PvP — мои игроки могут играть ДРУГ ПРОТИВ ДРУГА. ',
            'en'      :   'There will be Player vs Player combat allowed in my games'
        },
        'mirror' : {
            'url'     :   'mirror.jpg',
            'ru'      :   'Я подхватываю и развиваю в игре интересные идеи, подкинутые игроками. ',
            'en'      :   'I will Mirror back player ideas I think are interesting in the game'
        },
        'map' : {
            'url'     :   'map.jpg',
            'ru'      :   'Я использую в игре заранее нарисованную карту и подготовленные материалы',
            'en'      :   'My games use a pre-made Map and pre scripted content '
        },
        'improv' : {
            'url'     :   'improv.jpg',
            'ru'      :   'ИМПРОВИЗАЦИЯ — важная составляющая моего стиля вождения. ',
            'en'      :   'My games rely on a lot of Improvisation rather than pre scripted content'
        },
        'incharge' : {
            'url'     :   'incharge.jpg',
            'ru'      :   'Мастер всегда прав.',
            'en'      :   'The GM is In Charge in my games and «rule-zero» is in effect'
        }
        ,
        'characterdeath' : {
            'url'     :   'characterdeath.jpg',
            'ru'      :   'Смерть персонажа — обычное дело в моих играх. ',
            'en'      :   'Players characters Death is a likely event in my games'
        }
        ,
        'unknown' : {
            'url'     :   'unknown.jpg',
            'ru'      :   'У меня интереснее играть, когда я не раскрываю карты (альтернатива ВСЕМ предыдущим бейджам). ',
            'en'      :   'My game is more enjoyable when I keep my GMing style Unknown'
        }
    }; // —«»
    var aspect_fun = {
        'avallah' : {
            'url'   : 'lingam.jpg',
            'ru'    : 'У меня на играх случается КАМЕННЫЙ ФАЛЛОС',
            'en'    : 'Stone Lingam sometime appears in my games'
        },
        'goose' : {
            'url'   : 'goose.jpg',
            'ru'    : 'ГУСЬ-ДИАБЛЕРИСТ',
            'en'    : 'GOOSE-DIABLERIST '
        },
        'xwod' : {
            'url'   : 'xwod.png',
            'ru'    : 'Это какой-то неправильный Мир Тьмы',
            'en'    : 'It`s a strange Word of Darkness'
        }
    };
    // Private methods
    //
    function BuildHref(name)
    {
        var where;
        if (name in aspect_story) {
            where = aspect_story[name]
        } else if (name in aspect_mechanic) {
            where = aspect_mechanic[name]
        } else if (name in aspect_fun) {
            where = aspect_fun[name]
        }
        // where = aspect_story[name] || aspect_mechanic[name] || aspect_fun[name];
        return '<img src="' +
            config['out_urlprefix'] +
            where[ config['method_output']  ] +
            '" title="' +
            where[ config['lang'] ] +
            '"/> ';
    }

    function AddList(target, sourcearray)
    {
        var apptext='';
        $.each(sourcearray, function(a_key, a_value){

            apptext = '<li class="badge">' +
                '<button class="gmbadge_button" data-is-selected="false"' +
                'title="' + a_value[ config['lang'] ] + '" name="'+ a_key +'">';
            apptext += '<img src="' + config['list_urlprefix'];
            apptext += a_value[ config['method_list'] ];
            apptext += '">';
            apptext += '</button><div></div></li>';
            $(target).append(apptext);
        });
    }
    function AddTitle(target, text, name)
    {
        var apptext = '<li class="title" name="'+ name +'">' + text + '</li>';
        $(target).append(apptext);
    }

    function drawButtonsList(target)
    {
        $(target).empty();
        AddTitle    (target, 'Story Aspect', 'story_aspect');
        AddList     (target, aspect_story);
        AddTitle    (target, 'Mechanical Orientation', 'mech_aspect');
        AddList     (target, aspect_mechanic);
        AddTitle    (target, 'Fun', 'fun_aspect');
        AddList     (target, aspect_fun);

        redrawButtonTitles(target);
    }
    function redrawButtonTitles(target)
    {
        var _button, _name, _text;
        $(target+' li.badge').each(function(i, element){ // element -> this in {}
            _name = $(this).find('button.gmbadge_button').attr('name');
            if (_name in aspect_story) {
                _text = aspect_story[_name][ config['lang'] ]
            } else if (_name in aspect_mechanic) {
                _text = aspect_mechanic[_name][ config['lang'] ]
            } else if (_name in aspect_fun) {
                _text = aspect_fun[_name][ config['lang'] ]
            } else {
                _text = '';
            }

            $(this).find('div').empty().html(_text);
        });
        $('#hint').empty().html(help_hints[ config['lang'] ]);
    }
    function Selector_SetOption(name, option_value)
    {
        var cid = option_value || 0;
        $("select[name="+name+"] option[value="+ cid +"]").prop("selected",true);
    }


    // Public (extend)
    gmbadger.extend = function(where, data) {
        if (where == 'aspect_story') {
            $.extend(true, aspect_story, add);
        }
        if (where == 'aspect_mechanic') {
            $.extend(true, aspect_mechanic, add);
        }
        if (where == 'aspect_fun') {
            $.extend(true, aspect_fun, add);
        }
    };

    gmbadger.config = function(data) {
        $.extend(config, data)
    };

    gmbadger.init = function() {
        // check language in hash.
        config['lang'] = (window.location.hash != '') ? (window.location.hash).substr(1) : 'ru';
        Selector_SetOption('lang', config['lang']);

        config['list_urlprefix'] = (config['method_list'] == 'embedded') ? 'data:image/jpeg;base64,' : config['base_path'];
        config['out_urlprefix'] = (config['method_output'] == 'embedded') ? 'data:image/jpeg;base64,' : config['base_url'] + config['base_path'];

        drawButtonsList('#all_badges');
    };

    gmbadger.buildResult = function(target) {
        var _button, _output='';
        $('ul#all_badges li.badge').each(function(i, element){ // element -> this in {}
            _button = $(this).find('button.gmbadge_button');
            if ( _button.data('is-selected') == true)
            {
                _output += BuildHref( _button.attr('name')  );
            }
        });
        $(target).empty().html(_output);
    };

    gmbadger.setLanguage = function(value){
        window.location.hash = value;
        config['lang'] = value;
        redrawButtonTitles('#all_badges');
    };


}( window.gmbadger = window.gmbadger || {}, jQuery ));
