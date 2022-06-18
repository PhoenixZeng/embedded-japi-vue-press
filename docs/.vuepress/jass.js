Prism.languages.jass = {
    'comment': [{
        pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
        lookbehind: true
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
    }],
    'string': {
        pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
        greedy: true
    },
    'keyword': /\b(?:and|or|not|globals|endglobals|function|endfunction|constant|native|local|type|set|call|takes|returns|extends|array|debug|if|else|elseif|endif|then|loop|endloop|exitwhen|return|library|initializer|needs|uses|requires|endlibrary|scope|endscope|private|public|static|interface|endinterface|extends|struct|endstruct|method|endmethod|this|delegate|operator|module|endmodule|implement|optional|stub|key|thistype|onInit|onDestroy|hook|defaults|execute|evaluate|create|destroy|allocate|deallocate|library|function|constant|onInit|struct|public|private|static|requires|optional|interface|struct|method|operator|module|type|extends|delegate|not|do)\b/,
    'boolean': /\b(?:true|false)\b/,
    'builtin': /\b(?:integer|real|boolean|string|handle|code|nothing|agent|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|image|ubersplat|hashtable|mousebuttontype|animtype|subanimtype|framehandle|originframetype|framepointtype|textaligntype|frameeventtype|oskeytype|abilityintegerfield|abilityrealfield|abilitybooleanfield|abilitystringfield|abilityintegerlevelfield|abilityreallevelfield|abilitybooleanlevelfield|abilitystringlevelfield|abilityintegerlevelarrayfield|abilityreallevelarrayfield|abilitybooleanlevelarrayfield|abilitystringlevelarrayfield|unitintegerfield|unitrealfield|unitbooleanfield|unitstringfield|unitweaponintegerfield|unitweaponrealfield|unitweaponbooleanfield|unitweaponstringfield|itemintegerfield|itemrealfield|itembooleanfield|itemstringfield|movetype|targetflag|armortype|heroattribute|defensetype|regentype|unitcategory|pathingflag|minimapicon|commandbuttoneffect)\b/,
    'number': /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    'punctuation': /(\.|[..]|->)/,
    'annotation': /@\w+(\s|[(])/
}