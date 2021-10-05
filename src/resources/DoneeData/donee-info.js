//import images
import imageOne from '../images/Donne1.png';

import ifunnanya from '../images/DoneeImages/Serah.png';
import hezron from '../images/DoneeImages/Hezron.png';
import reem from '../images/DoneeImages/Reem.png';
import fatma from '../images/DoneeImages/Sofia.png';
import joseph from '../images/DoneeImages/Joseph.png';
import yeute from '../images/DoneeImages/Aisha.png';
import lekan from '../images/DoneeImages/lekan.png';
import gloria from '../images/DoneeImages/Gloria.png';
import blessing from '../images/DoneeImages/Blessing.png';
import john from '../images/DoneeImages/John.png';
import sally from '../../resources/images/Team/Sally.png';
import hammed from '../images/DoneeImages/Hamed.png';

const doneeInfo = [
    {
        firstName : "Ifunnanya",
        lastName : "Oke",
        dob : "1/1/1999",
        userId : "6dt5eia0-1238-ewi7-89yw-w879ewo9309t",
        homeAddress : "Man street",
        country : "Nigeria",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "male",
        itemNeeded : "Laptop",
        reasonForApplication : "I need a laptop to participate in a Software development training",
        imageLink : ifunnanya,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "IfunnanyaOke"
    },

    {
        firstName : "Hezron",
        lastName : "Geteye",
        dob : "1/1/1989",
        userId : "d5s3whit-5rs3-ewi7-8yrw-w879558uyt7b",
        homeAddress : "wesdate crescent street",
        country : "South Africa",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "male",
        itemNeeded: "Phone",
        reasonForApplication: "I need a phone to participate in a digital marketing training",
        imageLink : hezron,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "HezronGeteye"
    },

    {
        firstName : "Reem",
        lastName : "Mohammed",
        dob : "1/1/1992",
        userId : "5vb89mlt-ytc5-783b-2a9m-t2d6n09mf41a",
        homeAddress : " Hatfield street",
        country : "Egypt",
        phoneNumber: "010-100-200-300",
        eduLevel : "Graduate",
        gender : "Female",
        itemNeeded : "Laptop",
        reasonForApplication : "I need a laptop to participate in a digital tech training",
        imageLink : reem,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "ReemMohammed"
    },
    
    {
        firstName : "Fatma",
        lastName : "Isa",
        dob : "1/1/1990",
        userId : "85c43gmi-it2s-i4xs-67vb-2xmo96vf42b8",
        homeAddress : " pictory street",
        country : "Egypt",
        phoneNumber: "010-100-200-300",
        eduLevel : "Graduate",
        gender : "Female",
        itemNeeded : "Ipad",
        reasonForApplication : "I need an Ipad to participate in a product design training",
        imageLink : fatma,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "FatmaIsa"
    },

    {
        firstName : "Joseph",
        lastName : "Munakin",
        dob : "1/1/1991",
        userId : "mu6g4cd2-ut0b-4c8b-2as8-3xv9jm3d6hxb",
        homeAddress : "hamilton street",
        country : "Kenya",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "Female",
        itemNeeded : "Phone",
        reasonForApplication : "I need a phone to participate in a digital marketing training",
        imageLink : joseph,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "JOsephMunakin"
    },

    {
        firstName : "Yeute",
        lastName : "Yet",
        dob : "1/1/1988",
        userId : "10ms6ch5-95xv-62vg-haj7-8mos72b6s0pc",
        homeAddress : " redate street",
        country : "Kenya",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "Female",
        itemNeeded : "Laptop",
        reasonForApplication : "I need a laptop to participate in a data science training",
        imageLink : yeute,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "yeuteyet"
    },
    {
        firstName : "Lekan",
        lastName : "Adediran",
        dob : "1/1/1996",
        userId : "10b6ed6n-8mdo-w6dg-53g6-jsk73maut4v8",
        homeAddress : " balaa street",
        country : "Nigeria",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "Female",
        itemNeeded : "Ipad",
        reasonForApplication : "I need an Ipad to participate in a product management training",
        imageLink : lekan,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "LekanAdediran"
    },
    {
        firstName : "Gloria",
        lastName : "Kawasi",
        dob : "1/1/1986",
        userId : "kb6736d5-bct7-3n9s-8dd4-b6dh8wko390d",
        homeAddress : " White oaks street",
        country : "Ghana",
        phoneNumber: "010-100-200-300",
        eduLevel : "Graduate",
        gender : "Female",
        itemNeeded : "Laptop",
        reasonForApplication : "I need a laptop to start my training in cybersecurity",
        imageLink : gloria,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink : "imageOne",
        orgName: "Tech4Dev",
        orgWebsite: "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature: "GloriaKawasi"
    },
    {
        firstName : "Blessing",
        lastName : "Ozor",
        dob : "1/1/1990",
        userId : "3b7etd6n-78dj-iso5-9d6b-mo2d64wmlpa6",
        homeAddress : " Reservoir Hills",
        country : "Nigeria",
        phoneNumber: "010-100-200-300",
        eduLevel : "Graduate",
        gender : "Female",
        itemNeeded : "Ipad",
        reasonForApplication : "I need an Ipad to participate in a product management training",
        imageLink : blessing,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "BlessingOzor"
    },

    {
        firstName : "John",
        lastName : "Efua",
        dob : "1/1/1996",
        userId : "l5s7wh8o-w742-wu75-kie8-0fevq8whb963",
        homeAddress : " Alekuwodo street",
        country : "Ghana",
        phoneNumber: "010-100-200-300",
        eduLevel : "Graduate",
        gender : "Male",
        itemNeeded : "Laptop",
        reasonForApplication : "I need a laptop to participate in a cybersecurity training",
        imageLink : john,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: john,
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "Johanna Efua"
    },

    {
        firstName : "Sally",
        lastName : "Xathi",
        dob : "1/1/1991",
        userId : "298gs4w8-iwn6-782h-xue5-mo27xahoek0s",
        homeAddress : " maclarty ton street",
        country : "South Africa",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "Female",
        itemNeeded : "Phone",
        reasonForApplication : "I need a smart phone to venture into digital marketing",
        imageLink : sally,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "SallyXathi"
    },
    
    {
        firstName : "Hammed",
        lastName : "Bashir",
        dob : "1/1/1997",
        userId : "y6s5ebh8-37db-9eo5-293l-vx6537dk9sle",
        homeAddress : " wal street",
        country : "Ghana",
        phoneNumber: "010-100-200-300",
        eduLevel : "Undergraduate",
        gender : "male",
        itemNeeded : "Phone",
        reasonForApplication : "I need a phone to participate in a digital marketing training",
        imageLink : hammed,
        letterOfRecomendationLink : "imageOne",
        nationalIdLink: "imageOne",
        orgName : "Tech4Dev",
        orgWebsite : "www.tech4dev.com",
        orgContact : "123-456-7890",
        signature : "HammedBashir"
    }
]

export default doneeInfo;