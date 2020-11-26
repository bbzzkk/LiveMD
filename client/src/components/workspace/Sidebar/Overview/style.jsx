import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
/*
// Global Variables
:root {
  --color-first          : #65587f;
  --color-second         : #f18867;
  --color-third          : #e85f99;
  --color-forth          : #50bda1;
  --block-width          :   300px;
  --block-height         :   270px;
  --border-width         : .625rem;
  --border-radius-outer  :     8px;
  --border-radius-inner  : calc(var(--border-radius-outer) / 2);
  --font-plain           : 'IBM Plex Sans', sans-serif;
  --font-special         : 'Fredoka One', sans-serif;
 
  box-sizing: border-box;
  line-height: 1.4
}

*, *:before, *:after { box-sizing: inherit }

body {
  background: hsl(0, 0%, 95%);
  color: #5e5e5e;
  font-family: var(--font-plain);
  height: 100vh;
  display: flex;
  justify-content: center; align-items: center;
}

.rainbow {
  width :  100%;
  height:  100%;
  animation: o-rotate-360 linear 8s infinite;

  span {
    display: block;
    width: 100%; height: 100%;
    position: relative;
    transform: translate(-50%, -50%);

    &:after {
      display: block;
      content: "";
      width: 100%; height: 100%;
      position: absolute;
      left: 100%;
    }

    &:first-child {
                background: var(--color-first);
      &:after { background: var(--color-second) }
    }

    &:last-child {
                background: var(--color-third);
      &:after { background: var(--color-forth) }
    }
  }
}


// Components

.c-subscribe-box {
  width :  var(--block-width);
  height:  var(--block-height);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
  border-radius: var(--border-radius-outer);

  &__wrapper {
    width : calc(100% - var(--border-width));
    height: calc(100% - var(--border-width));
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 1.2rem 1rem 1.8rem;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-inner);
  }
  
  &__title {
    font-size: 1.6rem;
  }
  
  &__desc {
    font-size: .935rem;
    margin: .7rem auto 1.8rem;
    max-width: 240px;
  }
  
  &__form {
    margin-top: auto;
  }
}

.c-form {
  &--accent {
    input {      
      &:hover, &:active, &:focus {
        border-color: var(--color-third); // accent color
        box-shadow: 0 0 0 3px hsla(335, 75%, 64%, .25)
      }
    }

    [type=submit] { 
      background: var(--color-third);
      border-color: var(--color-third);
      color: #fff;
    }
  }
}


// Objects

@keyframes o-rotate-360 {
  0% { transform: rotate(0) }

  100% { transform: rotate(360deg) }
}


// Elements

[type=submit] { 
  margin-bottom: 0;
  font-family: var(--font-special);
  font-weight: normal;
  letter-spacing: .015em;
  font-size: 1.1rem;
  
  &:active {
    transform: scale(.97);
  }
}

input {
  font-family: inherit;
  color: inherit;
  outline: none;
  font-size: 93%;
  transition: all 300ms ease;
}

h3 {
  margin: 0;
  letter-spacing: -.015em;
  font-family: var(--font-special);
  font-weight: normal;
  line-height: 1.4;
}


// Utilities 
.u-align-center {
  text-align: center;
}


<div class="c-subscribe-box u-align-center">
  <div class="rainbow"><span></span><span></span></div>
  <div class="c-subscribe-box__wrapper">
    <h3 class="c-subscribe-box__title">Join my newsletter</h3>
    <p class="c-subscribe-box__desc">You like articles of the blog? Sign up for updates via email.</p>
    <form class="c-form c-form--accent c-subscribe-box__form">
    </form>
  </div>
</div>
*/

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

// const classes = useStyles();

const S = {
  Container: styled.div`
    // background-color: #1e6896;
    color: white;
    text-aligin: center;
    border-bottom-left-radius: 20%;
    border-bottom-right-radius: 20%;
    padding-top: 10%;
    padding-bottom: 10%;
    height: 20%;
    // box-shadow: -1px 1px 1px 1px grey;
  `,
  Avatar: styled.img`
    display: block;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    height: 35%
    margin-top: 10%;
    // border: 1px white ridge;
    border-radius: 50%;
    margin-bottom: 10%;
  `,
  Username: styled.h3`
    text-align: center;
    margin-bottom: 10%;
  `,
};

export default S;
