var _ = require('lodash');

var people = [{
    "id": 1,
    "first_name": "Conny",
    "last_name": "Treweela",
    "email": "ctreweela0@fotki.com",
    "gender": "Male",
    "ip_address": "154.135.126.239"
}, {
    "id": 2,
    "first_name": "Raimondo",
    "last_name": "Yankov",
    "email": "ryankov1@forbes.com",
    "gender": "Male",
    "ip_address": "236.46.216.81"
}, {
    "id": 3,
    "first_name": "Murvyn",
    "last_name": "Eliot",
    "email": "meliot2@prlog.org",
    "gender": "Male",
    "ip_address": "195.199.31.136"
}, {
    "id": 4,
    "first_name": "Butch",
    "last_name": "Ismail",
    "email": "bismail3@sciencedirect.com",
    "gender": "Male",
    "ip_address": "189.217.244.37"
}, {
    "id": 5,
    "first_name": "Jeno",
    "last_name": "Chatelet",
    "email": "jchatelet4@dell.com",
    "gender": "Male",
    "ip_address": "129.75.172.24"
}, {
    "id": 6,
    "first_name": "Louise",
    "last_name": "Hackworthy",
    "email": "lhackworthy5@hugedomains.com",
    "gender": "Female",
    "ip_address": "239.50.16.119"
}, {
    "id": 7,
    "first_name": "Aurlie",
    "last_name": "Shawe",
    "email": "ashawe6@about.me",
    "gender": "Female",
    "ip_address": "130.9.245.220"
}, {
    "id": 8,
    "first_name": "Mozelle",
    "last_name": "Dewsbury",
    "email": "mdewsbury7@ocn.ne.jp",
    "gender": "Female",
    "ip_address": "176.169.42.31"
}, {
    "id": 9,
    "first_name": "Larina",
    "last_name": "Spray",
    "email": "lspray8@alibaba.com",
    "gender": "Female",
    "ip_address": "191.69.20.57"
}, {
    "id": 10,
    "first_name": "Cathee",
    "last_name": "MacAlroy",
    "email": "cmacalroy9@multiply.com",
    "gender": "Female",
    "ip_address": "133.248.155.119"
}, {
    "id": 11,
    "first_name": "Daisi",
    "last_name": "Woollin",
    "email": "dwoollina@cnbc.com",
    "gender": "Female",
    "ip_address": "197.149.76.178"
}, {
    "id": 12,
    "first_name": "Orsola",
    "last_name": "Sockell",
    "email": "osockellb@topsy.com",
    "gender": "Female",
    "ip_address": "58.174.33.199"
}, {
    "id": 13,
    "first_name": "Johan",
    "last_name": "Philo",
    "email": "jphiloc@alexa.com",
    "gender": "Male",
    "ip_address": "172.79.192.38"
}, {
    "id": 14,
    "first_name": "Reinhard",
    "last_name": "Mossbee",
    "email": "rmossbeed@youtu.be",
    "gender": "Male",
    "ip_address": "162.126.89.178"
}, {
    "id": 15,
    "first_name": "Nerti",
    "last_name": "Dimmock",
    "email": "ndimmocke@elegantthemes.com",
    "gender": "Female",
    "ip_address": "209.126.65.207"
}, {
    "id": 16,
    "first_name": "Paige",
    "last_name": "Redon",
    "email": "predonf@marriott.com",
    "gender": "Male",
    "ip_address": "95.138.101.74"
}, {
    "id": 17,
    "first_name": "Alanah",
    "last_name": "Paolucci",
    "email": "apaoluccig@home.pl",
    "gender": "Female",
    "ip_address": "44.82.127.21"
}, {
    "id": 18,
    "first_name": "Alfred",
    "last_name": "Fellon",
    "email": "afellonh@rakuten.co.jp",
    "gender": "Male",
    "ip_address": "181.237.47.109"
}, {
    "id": 19,
    "first_name": "Gayle",
    "last_name": "Limeburn",
    "email": "glimeburni@sina.com.cn",
    "gender": "Male",
    "ip_address": "87.122.55.146"
}, {
    "id": 20,
    "first_name": "Larina",
    "last_name": "Trownson",
    "email": "ltrownsonj@csmonitor.com",
    "gender": "Female",
    "ip_address": "233.181.85.217"
}];

var femaleCount = _.filter(people, { gender: "Female" }).length;

alert(femaleCount + " females!");