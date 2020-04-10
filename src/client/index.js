
import { onCreate } from './js/formvalidator'
import { onBlurInput } from './js/createButton'
import { onInputFocus } from './js/createButton';
import { updateInterface } from './js/updateDataOnPage';

import './styles/footer.scss'
import './styles/header.scss'
import './styles/main.scss'
import './styles/trip.scss'
import './styles/table.scss'

import  logo from './media/logo.jpg'
import notrip from './media/notrip.jpg';
import twitter from './media/twitter.jpg'
import linkedin from './media/linkedin.jpg'
import footer from './media/footer_logo.webp'
import github from './media/github.jpg'

export
{
    onCreate,
    onBlurInput,
    onInputFocus,
    updateInterface
}


const logoimg=document.getElementById('logo-img');
logoimg.src=logo;
const linkedinimg=document.getElementById('linkedin');
linkedinimg.src=linkedin;
const githubimg=document.getElementById('github');
githubimg.src=github;
const twitterimg=document.getElementById('twitter');
twitterimg.src=twitter;
const notripimg=document.getElementById('notripi');
notripimg.src=notrip;
const footerlogoimg=document.getElementById('footerlogo');
footerlogoimg.src=footer;
const git=document.getElementById('github1');
git.src=github;
const twit=document.getElementById('linkedin1');
twit.src=twitter;
const link=document.getElementById('twitter1');
link.src=linkedin;


