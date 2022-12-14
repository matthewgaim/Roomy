import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
`;

const ButtonWrapper = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    button {
        width: 45px;
        height: 45px;
        margin-top: 20px;
        font-size: 15px;
        border: none;
        border-radius: 50px;
        background-color: rgba(0, 0, 0, 0.15);
        &:hover {
            color: white;
            background-color: rgba(49, 49, 49, 0.7);
        }
    }
`;

const Indicator = styled.div`
     position: absolute;
     bottom: 60px;
     left: 50%;
     transform: translateX(-50%);
     padding: 10px 25px;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: rgba(49, 49, 49, 0.7);
     color: white;
     border-radius: 50px;
 `;

function ImageDisplay({ images }) {
    const [current, setCurrent] = useState(0);
    const { length } = images;

    if (images.length === 1) {
        return <img src={images[0]} alt="" style={{ width: '100%', height: 'auto' }} />;
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <Container>
            <ButtonWrapper>
                <button className="ButtonPrev" onClick={prevSlide}> &lt; </button>
                <button className="ButtonNext" onClick={nextSlide}> &gt; </button>
            </ButtonWrapper>
            <Indicator>
                {current + 1}
                {' '}
                of
                {' '} 
                {length}
            </Indicator>
            <img src={images ? images[current] : '/images/no-image-available.png'} alt="" style={{ width: '100%', height: 'auto' }} />
        </Container>
    );
}

export default ImageDisplay;
