import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
{
    speciality: 'Médico geral',
    image: General_physician
},
{
    speciality: 'Ginecologista',
    image: Gynecologist
},
{
    speciality: 'Dermatologista',
    image: Dermatologist
},
{
    speciality: 'Pediatra',
    image: Pediatricians
},
{
    speciality: 'Neurologista',
    image: Neurologist
},
{
    speciality: 'Gastroenterologista',
    image: Gastroenterologist
},
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ricardo Santos',
        image: doc1,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Ricardo Santos tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc2',
        name: 'Dra. Emília Lopes',
        image: doc2,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'A Dra. Emília Lopes tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 60,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc3',
        name: 'Dra. Sara Ferreira',
        image: doc3,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Sara Ferreira tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 30,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Cristóvão Lima',
        image: doc4,
        speciality: 'Pediatra',
        degree: 'MBBS',
        experience: '2 Anos',
        about: 'O Dr. Cristóvão Lima tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 40,
        address: {
            line1: '47ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc5',
        name: 'Dra. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Jennifer Garcia tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. André Silva',
        image: doc6,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. André Silva tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Cristóvão Dias',
        image: doc7,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Cristóvão Dias tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Tiago Branco',
        image: doc8,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'O Dr. Tiago Branco tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 60,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc9',
        name: 'Dra. Ava Martins',
        image: doc9,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Ava Martins tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 30,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeferson Reis',
        image: doc10,
        speciality: 'Pediatra',
        degree: 'MBBS',
        experience: '2 Anos',
        about: 'O Dr. Jeferson Reis tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 40,
        address: {
            line1: '47ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc11',
        name: 'Dra. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Zoe Kelly tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrício Harris',
        image: doc12,
        speciality: 'Neurologista',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'O Dr. Patrício Harris tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '57ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc13',
        name: 'Dra. Cláudia Evans',
        image: doc13,
        speciality: 'Clínico Geral',
        degree: 'MBBS',
        experience: '4 Anos',
        about: 'A Dra. Cláudia Evans tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 50,
        address: {
            line1: '17ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martins',
        image: doc14,
        speciality: 'Ginecologista',
        degree: 'MBBS',
        experience: '3 Anos',
        about: 'O Dr. Ryan Martins tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 60,
        address: {
            line1: '27ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
    {
        _id: 'doc15',
        name: 'Dra. Amélia Hill',
        image: doc15,
        speciality: 'Dermatologista',
        degree: 'MBBS',
        experience: '1 Ano',
        about: 'A Dra. Amélia Hill tem um forte compromisso em fornecer cuidados médicos abrangentes, focando na medicina preventiva, no diagnóstico precoce e em estratégias de tratamento eficazes.',
        fees: 30,
        address: {
            line1: '37ª Rua, Richmond',
            line2: 'Círculo, Anel Rodoviário, São Paulo'
        }
    },
];