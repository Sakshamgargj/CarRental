import Countries from "../models/countries.model.js";

const countryData = async (req,res)=>{
    try{
        const country = [{"cid":"1","cname":"Afghanistan","isoname":"AF"},{"cid":"2","cname":"Aland Islands","isoname":"AX"},{"cid":"3","cname":"Albania","isoname":"AL"},{"cid":"4","cname":"Algeria","isoname":"DZ"},{"cid":"5","cname":"American Samoa","isoname":"AS"},{"cid":"6","cname":"Andorra","isoname":"AD"},{"cid":"7","cname":"Angola","isoname":"AO"},{"cid":"8","cname":"Anguilla","isoname":"AI"},{"cid":"9","cname":"Antarctica","isoname":"AQ"},{"cid":"10","cname":"Antigua And Barbuda","isoname":"AG"},{"cid":"11","cname":"Argentina","isoname":"AR"},{"cid":"12","cname":"Armenia","isoname":"AM"},{"cid":"13","cname":"Aruba","isoname":"AW"},{"cid":"14","cname":"Australia","isoname":"AU"},{"cid":"15","cname":"Austria","isoname":"AT"},{"cid":"16","cname":"Azerbaijan","isoname":"AZ"},{"cid":"17","cname":"Bahamas The","isoname":"BS"},{"cid":"18","cname":"Bahrain","isoname":"BH"},{"cid":"19","cname":"Bangladesh","isoname":"BD"},{"cid":"20","cname":"Barbados","isoname":"BB"},{"cid":"21","cname":"Belarus","isoname":"BY"},{"cid":"22","cname":"Belgium","isoname":"BE"},{"cid":"23","cname":"Belize","isoname":"BZ"},{"cid":"24","cname":"Benin","isoname":"BJ"},{"cid":"25","cname":"Bermuda","isoname":"BM"},{"cid":"26","cname":"Bhutan","isoname":"BT"},{"cid":"27","cname":"Bolivia","isoname":"BO"},{"cid":"155","cname":"Bonaire, Sint Eustatius and Saba","isoname":"BQ"},{"cid":"28","cname":"Bosnia and Herzegovina","isoname":"BA"},{"cid":"29","cname":"Botswana","isoname":"BW"},{"cid":"30","cname":"Bouvet Island","isoname":"BV"},{"cid":"31","cname":"Brazil","isoname":"BR"},{"cid":"32","cname":"British Indian Ocean Territory","isoname":"IO"},{"cid":"33","cname":"Brunei","isoname":"BN"},{"cid":"34","cname":"Bulgaria","isoname":"BG"},{"cid":"35","cname":"Burkina Faso","isoname":"BF"},{"cid":"36","cname":"Burundi","isoname":"BI"},{"cid":"37","cname":"Cambodia","isoname":"KH"},{"cid":"38","cname":"Cameroon","isoname":"CM"},{"cid":"39","cname":"Canada","isoname":"CA"},{"cid":"40","cname":"Cape Verde","isoname":"CV"},{"cid":"41","cname":"Cayman Islands","isoname":"KY"},{"cid":"42","cname":"Central African Republic","isoname":"CF"},{"cid":"43","cname":"Chad","isoname":"TD"},{"cid":"44","cname":"Chile","isoname":"CL"},{"cid":"45","cname":"China","isoname":"CN"},{"cid":"46","cname":"Christmas Island","isoname":"CX"},{"cid":"47","cname":"Cocos (Keeling) Islands","isoname":"CC"},{"cid":"48","cname":"Colombia","isoname":"CO"},{"cid":"49","cname":"Comoros","isoname":"KM"},{"cid":"50","cname":"Congo","isoname":"CG"},{"cid":"51","cname":"Congo The Democratic Republic Of The","isoname":"CD"},{"cid":"52","cname":"Cook Islands","isoname":"CK"},{"cid":"53","cname":"Costa Rica","isoname":"CR"},{"cid":"54","cname":"Cote D'Ivoire (Ivory Coast)","isoname":"CI"},{"cid":"55","cname":"Croatia (Hrvatska)","isoname":"HR"},{"cid":"56","cname":"Cuba","isoname":"CU"},{"cid":"249","cname":"Cura?ao","isoname":"CW"},{"cid":"57","cname":"Cyprus","isoname":"CY"},{"cid":"58","cname":"Czech Republic","isoname":"CZ"},{"cid":"59","cname":"Denmark","isoname":"DK"},{"cid":"60","cname":"Djibouti","isoname":"DJ"},{"cid":"61","cname":"Dominica","isoname":"DM"},{"cid":"62","cname":"Dominican Republic","isoname":"DO"},{"cid":"63","cname":"East Timor","isoname":"TL"},{"cid":"64","cname":"Ecuador","isoname":"EC"},{"cid":"65","cname":"Egypt","isoname":"EG"},{"cid":"66","cname":"El Salvador","isoname":"SV"},{"cid":"67","cname":"Equatorial Guinea","isoname":"GQ"},{"cid":"68","cname":"Eritrea","isoname":"ER"},{"cid":"69","cname":"Estonia","isoname":"EE"},{"cid":"70","cname":"Ethiopia","isoname":"ET"},{"cid":"71","cname":"Falkland Islands","isoname":"FK"},{"cid":"72","cname":"Faroe Islands","isoname":"FO"},{"cid":"73","cname":"Fiji Islands","isoname":"FJ"},{"cid":"74","cname":"Finland","isoname":"FI"},{"cid":"75","cname":"France","isoname":"FR"},{"cid":"76","cname":"French Guiana","isoname":"GF"},{"cid":"77","cname":"French Polynesia","isoname":"PF"},{"cid":"78","cname":"French Southern Territories","isoname":"TF"},{"cid":"79","cname":"Gabon","isoname":"GA"},{"cid":"80","cname":"Gambia The","isoname":"GM"},{"cid":"81","cname":"Georgia","isoname":"GE"},{"cid":"82","cname":"Germany","isoname":"DE"},{"cid":"83","cname":"Ghana","isoname":"GH"},{"cid":"84","cname":"Gibraltar","isoname":"GI"},{"cid":"85","cname":"Greece","isoname":"GR"},{"cid":"86","cname":"Greenland","isoname":"GL"},{"cid":"87","cname":"Grenada","isoname":"GD"},{"cid":"88","cname":"Guadeloupe","isoname":"GP"},{"cid":"89","cname":"Guam","isoname":"GU"},{"cid":"90","cname":"Guatemala","isoname":"GT"},{"cid":"91","cname":"Guernsey and Alderney","isoname":"GG"},{"cid":"92","cname":"Guinea","isoname":"GN"},{"cid":"93","cname":"Guinea-Bissau","isoname":"GW"},{"cid":"94","cname":"Guyana","isoname":"GY"},{"cid":"95","cname":"Haiti","isoname":"HT"},{"cid":"96","cname":"Heard Island and McDonald Islands","isoname":"HM"},{"cid":"97","cname":"Honduras","isoname":"HN"},{"cid":"98","cname":"Hong Kong S.A.R.","isoname":"HK"},{"cid":"99","cname":"Hungary","isoname":"HU"},{"cid":"100","cname":"Iceland","isoname":"IS"},{"cid":"101","cname":"India","isoname":"IN"},{"cid":"102","cname":"Indonesia","isoname":"ID"},{"cid":"103","cname":"Iran","isoname":"IR"},{"cid":"104","cname":"Iraq","isoname":"IQ"},{"cid":"105","cname":"Ireland","isoname":"IE"},{"cid":"106","cname":"Israel","isoname":"IL"},{"cid":"107","cname":"Italy","isoname":"IT"},{"cid":"108","cname":"Jamaica","isoname":"JM"},{"cid":"109","cname":"Japan","isoname":"JP"},{"cid":"110","cname":"Jersey","isoname":"JE"},{"cid":"111","cname":"Jordan","isoname":"JO"},{"cid":"112","cname":"Kazakhstan","isoname":"KZ"},{"cid":"113","cname":"Kenya","isoname":"KE"},{"cid":"114","cname":"Kiribati","isoname":"KI"},{"cid":"115","cname":"Korea North","isoname":"KP"},{"cid":"116","cname":"Korea South","isoname":"KR"},{"cid":"248","cname":"Kosovo","isoname":"XK"},{"cid":"117","cname":"Kuwait","isoname":"KW"},{"cid":"118","cname":"Kyrgyzstan","isoname":"KG"},{"cid":"119","cname":"Laos","isoname":"LA"},{"cid":"120","cname":"Latvia","isoname":"LV"},{"cid":"121","cname":"Lebanon","isoname":"LB"},{"cid":"122","cname":"Lesotho","isoname":"LS"},{"cid":"123","cname":"Liberia","isoname":"LR"},{"cid":"124","cname":"Libya","isoname":"LY"},{"cid":"125","cname":"Liechtenstein","isoname":"LI"},{"cid":"126","cname":"Lithuania","isoname":"LT"},{"cid":"127","cname":"Luxembourg","isoname":"LU"},{"cid":"128","cname":"Macau S.A.R.","isoname":"MO"},{"cid":"129","cname":"Macedonia","isoname":"MK"},{"cid":"130","cname":"Madagascar","isoname":"MG"},{"cid":"131","cname":"Malawi","isoname":"MW"},{"cid":"132","cname":"Malaysia","isoname":"MY"},{"cid":"133","cname":"Maldives","isoname":"MV"},{"cid":"134","cname":"Mali","isoname":"ML"},{"cid":"135","cname":"Malta","isoname":"MT"},{"cid":"136","cname":"Man (Isle of)","isoname":"IM"},{"cid":"137","cname":"Marshall Islands","isoname":"MH"},{"cid":"138","cname":"Martinique","isoname":"MQ"},{"cid":"139","cname":"Mauritania","isoname":"MR"},{"cid":"140","cname":"Mauritius","isoname":"MU"},{"cid":"141","cname":"Mayotte","isoname":"YT"},{"cid":"142","cname":"Mexico","isoname":"MX"},{"cid":"143","cname":"Micronesia","isoname":"FM"},{"cid":"144","cname":"Moldova","isoname":"MD"},{"cid":"145","cname":"Monaco","isoname":"MC"},{"cid":"146","cname":"Mongolia","isoname":"MN"},{"cid":"147","cname":"Montenegro","isoname":"ME"},{"cid":"148","cname":"Montserrat","isoname":"MS"},{"cid":"149","cname":"Morocco","isoname":"MA"},{"cid":"150","cname":"Mozambique","isoname":"MZ"},{"cid":"151","cname":"Myanmar","isoname":"MM"},{"cid":"152","cname":"Namibia","isoname":"NA"},{"cid":"153","cname":"Nauru","isoname":"NR"},{"cid":"154","cname":"Nepal","isoname":"NP"},{"cid":"156","cname":"Netherlands The","isoname":"NL"},{"cid":"157","cname":"New Caledonia","isoname":"NC"},{"cid":"158","cname":"New Zealand","isoname":"NZ"},{"cid":"159","cname":"Nicaragua","isoname":"NI"},{"cid":"160","cname":"Niger","isoname":"NE"},{"cid":"161","cname":"Nigeria","isoname":"NG"},{"cid":"162","cname":"Niue","isoname":"NU"},{"cid":"163","cname":"Norfolk Island","isoname":"NF"},{"cid":"164","cname":"Northern Mariana Islands","isoname":"MP"},{"cid":"165","cname":"Norway","isoname":"NO"},{"cid":"166","cname":"Oman","isoname":"OM"},{"cid":"167","cname":"Pakistan","isoname":"PK"},{"cid":"168","cname":"Palau","isoname":"PW"},{"cid":"169","cname":"Palestinian Territory Occupied","isoname":"PS"},{"cid":"170","cname":"Panama","isoname":"PA"},{"cid":"171","cname":"Papua new Guinea","isoname":"PG"},{"cid":"172","cname":"Paraguay","isoname":"PY"},{"cid":"173","cname":"Peru","isoname":"PE"},{"cid":"174","cname":"Philippines","isoname":"PH"},{"cid":"175","cname":"Pitcairn Island","isoname":"PN"},{"cid":"176","cname":"Poland","isoname":"PL"},{"cid":"177","cname":"Portugal","isoname":"PT"},{"cid":"178","cname":"Puerto Rico","isoname":"PR"},{"cid":"179","cname":"Qatar","isoname":"QA"},{"cid":"180","cname":"Reunion","isoname":"RE"},{"cid":"181","cname":"Romania","isoname":"RO"},{"cid":"182","cname":"Russia","isoname":"RU"},{"cid":"183","cname":"Rwanda","isoname":"RW"},{"cid":"184","cname":"Saint Helena","isoname":"SH"},{"cid":"185","cname":"Saint Kitts And Nevis","isoname":"KN"},{"cid":"186","cname":"Saint Lucia","isoname":"LC"},{"cid":"187","cname":"Saint Pierre and Miquelon","isoname":"PM"},{"cid":"188","cname":"Saint Vincent And The Grenadines","isoname":"VC"},{"cid":"189","cname":"Saint-Barthelemy","isoname":"BL"},{"cid":"190","cname":"Saint-Martin (French part)","isoname":"MF"},{"cid":"191","cname":"Samoa","isoname":"WS"},{"cid":"192","cname":"San Marino","isoname":"SM"},{"cid":"193","cname":"Sao Tome and Principe","isoname":"ST"},{"cid":"194","cname":"Saudi Arabia","isoname":"SA"},{"cid":"195","cname":"Senegal","isoname":"SN"},{"cid":"196","cname":"Serbia","isoname":"RS"},{"cid":"197","cname":"Seychelles","isoname":"SC"},{"cid":"198","cname":"Sierra Leone","isoname":"SL"},{"cid":"199","cname":"Singapore","isoname":"SG"},{"cid":"250","cname":"Sint Maarten (Dutch part)","isoname":"SX"},{"cid":"200","cname":"Slovakia","isoname":"SK"},{"cid":"201","cname":"Slovenia","isoname":"SI"},{"cid":"202","cname":"Solomon Islands","isoname":"SB"},{"cid":"203","cname":"Somalia","isoname":"SO"},{"cid":"204","cname":"South Africa","isoname":"ZA"},{"cid":"205","cname":"South Georgia","isoname":"GS"},{"cid":"206","cname":"South Sudan","isoname":"SS"},{"cid":"207","cname":"Spain","isoname":"ES"},{"cid":"208","cname":"Sri Lanka","isoname":"LK"},{"cid":"209","cname":"Sudan","isoname":"SD"},{"cid":"210","cname":"Suriname","isoname":"SR"},{"cid":"211","cname":"Svalbard And Jan Mayen Islands","isoname":"SJ"},{"cid":"212","cname":"Swaziland","isoname":"SZ"},{"cid":"213","cname":"Sweden","isoname":"SE"},{"cid":"214","cname":"Switzerland","isoname":"CH"},{"cid":"215","cname":"Syria","isoname":"SY"},{"cid":"216","cname":"Taiwan","isoname":"TW"},{"cid":"217","cname":"Tajikistan","isoname":"TJ"},{"cid":"218","cname":"Tanzania","isoname":"TZ"},{"cid":"219","cname":"Thailand","isoname":"TH"},{"cid":"220","cname":"Togo","isoname":"TG"},{"cid":"221","cname":"Tokelau","isoname":"TK"},{"cid":"222","cname":"Tonga","isoname":"TO"},{"cid":"223","cname":"Trinidad And Tobago","isoname":"TT"},{"cid":"224","cname":"Tunisia","isoname":"TN"},{"cid":"225","cname":"Turkey","isoname":"TR"},{"cid":"226","cname":"Turkmenistan","isoname":"TM"},{"cid":"227","cname":"Turks And Caicos Islands","isoname":"TC"},{"cid":"228","cname":"Tuvalu","isoname":"TV"},{"cid":"229","cname":"Uganda","isoname":"UG"},{"cid":"230","cname":"Ukraine","isoname":"UA"},{"cid":"231","cname":"United Arab Emirates","isoname":"AE"},{"cid":"232","cname":"United Kingdom","isoname":"GB"},{"cid":"233","cname":"United States","isoname":"US"},{"cid":"234","cname":"United States Minor Outlying Islands","isoname":"UM"},{"cid":"235","cname":"Uruguay","isoname":"UY"},{"cid":"236","cname":"Uzbekistan","isoname":"UZ"},{"cid":"237","cname":"Vanuatu","isoname":"VU"},{"cid":"238","cname":"Vatican City State (Holy See)","isoname":"VA"},{"cid":"239","cname":"Venezuela","isoname":"VE"},{"cid":"240","cname":"Vietnam","isoname":"VN"},{"cid":"241","cname":"Virgin Islands (British)","isoname":"VG"},{"cid":"242","cname":"Virgin Islands (US)","isoname":"VI"},{"cid":"243","cname":"Wallis And Futuna Islands","isoname":"WF"},{"cid":"244","cname":"Western Sahara","isoname":"EH"},{"cid":"245","cname":"Yemen","isoname":"YE"},{"cid":"246","cname":"Zambia","isoname":"ZM"},{"cid":"247","cname":"Zimbabwe","isoname":"ZW"}]

        const countryInfo = await Countries.create(country);
        res.json(countryInfo);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving countries' });
    }
}

const stateData = async (req,res)=>{
    try{
        console.log(req.body);
        res.send("HII")
    }catch(err){
        res.status(500).json({error:'Err retrieving states'})
    }
}

export {countryData,stateData}