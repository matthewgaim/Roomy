import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    grid-area: right;
`;

const ArtCard = styled.div`
    top: 50px;
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: #fff;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 3px #999, 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    padding: 12px 12px 16px;
    word-wrap: break-word;
    word-break: break-word;
`;

const CardBackground = styled.div`
    background: url("/images/card-bg.png");
    background-position: center;
    background-size: 462px;
    height: 54px;
    margin: -12px -12px 0;
`;

const Photo = styled.div`
    box-shadow: none;
    background: url(${(props) => props.photoUrl});
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: #fff;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 2px solid white;
    margin: -38px auto 12px;
    border-radius: 50%;
`;

const Link = styled.div`
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 600;
`;

const AddPhotoText = styled.div`
    color: #8f2bb8;
    margin-top: 4px;
    font-size: 12px;
    line-height: 1.33;
    font-weight: 400;
`;

function Left(props) {
    const user = props.user ? props.user : null;
    const photoUrl = user ? user.photoURL : '/images/photo.svg';
    const uid = props.user ? props.user.uid : null;
    const [userType, setUserType] = useState('Renter');

    useEffect(() => {
        if (user) {
            setUserType(user.userInfo ? user.userInfo.status : 'Renter');
        } else {
            setUserType('Renter');
        }
    }, [user]);

    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <CardBackground />
                    <a>
                        <Photo photoUrl={photoUrl ? photoUrl : '/images/user.svg'} />
                        <Link>
                            Welcome, 
                            {user ? user.displayName : 'there'}
                            !
                        </Link>
                    </a>
                    <h3>
                        Status:
                        {userType}
                    </h3>
                    <a href={`/profile/${uid}`}>
                        <AddPhotoText>
                            Edit Profile
                        </AddPhotoText>
                    </a>
                </UserInfo>
            </ArtCard>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    user: state.userState.user,
});

export default connect(mapStateToProps)(Left);
