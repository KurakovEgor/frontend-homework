'use strict'

const SPACE = ' ',
      NEW_LINE = '\n',
      STAR = '*',
      STICK = '|',
      EMPTY_STRING = '';

function tree( heigth ) {
    if( !Number.isInteger( +heigth ) || heigth < 3 ) {
        return null;
    }
    let numOfStars = 1;
    let numOfSpaces = heigth - 2;
    let out = EMPTY_STRING;
    for( let i = 1; i < heigth; ++i ) {
        out += ( SPACE.repeat( numOfSpaces ) + STAR.repeat( numOfStars ) +
            SPACE.repeat( numOfSpaces ) + NEW_LINE );
        --numOfSpaces;
        numOfStars += 2;
    }
    numOfSpaces = ( numOfStars - 3 ) / 2;
    out += ( SPACE.repeat( numOfSpaces ) + STICK +
            SPACE.repeat( numOfSpaces ) + NEW_LINE );
    return out;
}